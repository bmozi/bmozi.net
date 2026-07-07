#!/usr/bin/env bash
#
# Reset the bmozi.net access-gate credentials.
#
# The gate (src/lib/access-gate.ts) reads BMOZI_GATE_USER / BMOZI_GATE_PASSWORD
# from Vercel env vars at deploy time. This script sets BOTH, as normal
# (retrievable) vars across every environment, records them in a local
# .owner-login dotfile, and — with --deploy — ships a fresh production build so
# the new password takes effect.
#
# Usage:
#   ./scripts/reset-gate-password.sh                 # generate a strong password
#   ./scripts/reset-gate-password.sh 'MyPassword'    # set a specific password
#   ./scripts/reset-gate-password.sh --deploy        # generate + redeploy prod
#   ./scripts/reset-gate-password.sh 'pw' --deploy   # set specific + redeploy
#
set -euo pipefail

cd "$(dirname "$0")/.."

USER_NAME="john"
ENVS=(production preview development)
DEPLOY=0
PASS=""

for arg in "$@"; do
  case "$arg" in
    --deploy) DEPLOY=1 ;;
    *) PASS="$arg" ;;
  esac
done

if [[ -z "$PASS" ]]; then
  # Strong, form-safe (alphanumeric) 28-char password.
  PASS="$(openssl rand -base64 48 | tr -dc 'A-Za-z0-9' | cut -c1-28)"
fi

echo "Setting gate credentials (user: $USER_NAME) across: ${ENVS[*]}"
for env in "${ENVS[@]}"; do
  vercel env rm BMOZI_GATE_USER "$env" -y  >/dev/null 2>&1 || true
  vercel env rm BMOZI_GATE_PASSWORD "$env" -y >/dev/null 2>&1 || true
  printf '%s' "$USER_NAME" | vercel env add BMOZI_GATE_USER "$env"     >/dev/null 2>&1
  printf '%s' "$PASS"      | vercel env add BMOZI_GATE_PASSWORD "$env" >/dev/null 2>&1
  echo "  ✓ $env"
done

# Local authoritative record (gitignored, owner-only).
cat > .owner-login <<EOF
BMOZI_GATE_USER=$USER_NAME
BMOZI_GATE_PASSWORD=$PASS
BMOZI_GATE_URL=https://bmozi.net/access
UPDATED_AT_UTC=$(date -u +%Y-%m-%dT%H:%M:%SZ)
EOF
chmod 600 .owner-login
echo "  ✓ wrote .owner-login"

if command -v pbcopy >/dev/null 2>&1; then
  printf '%s' "$PASS" | pbcopy
  echo "  ✓ password copied to clipboard"
fi

if [[ "$DEPLOY" == "1" ]]; then
  echo "Redeploying production..."
  vercel --prod --yes
else
  echo "Env updated. Run 'vercel --prod --yes' (or re-run with --deploy) to apply."
fi
