#!/usr/bin/env bash
#
# Create or rotate an additive Codex access-gate credential.
#
# The gate keeps BMOZI_GATE_USER / BMOZI_GATE_PASSWORD as the primary owner
# login and accepts a dedicated Codex login from BMOZI_GATE_CODEX_PASSWORD.
#
# Usage:
#   ./scripts/reset-codex-gate-user.sh                 # generate password
#   ./scripts/reset-codex-gate-user.sh 'MyPassword'    # set password
#   ./scripts/reset-codex-gate-user.sh --deploy        # generate + deploy prod
#   ./scripts/reset-codex-gate-user.sh 'pw' --deploy   # set + deploy prod
#
set -euo pipefail

cd "$(dirname "$0")/.."

USER_NAME="codex"
ENVS=(production preview development)
DEPLOY=0
PASS=""

if command -v vercel >/dev/null 2>&1; then
  VERCEL=(vercel)
else
  VERCEL=(npx vercel)
fi

for arg in "$@"; do
  case "$arg" in
    --deploy) DEPLOY=1 ;;
    *) PASS="$arg" ;;
  esac
done

if [[ -z "$PASS" ]]; then
  PASS="$(openssl rand -base64 48 | tr -dc 'A-Za-z0-9' | cut -c1-32)"
fi

echo "Setting additive gate credential (user: $USER_NAME) across: ${ENVS[*]}"
for env in "${ENVS[@]}"; do
  "${VERCEL[@]}" env rm BMOZI_GATE_CODEX_PASSWORD "$env" -y >/dev/null 2>&1 || true
  printf '%s' "$PASS" | "${VERCEL[@]}" env add BMOZI_GATE_CODEX_PASSWORD "$env" >/dev/null 2>&1
  echo "  ✓ $env"
done

if [[ -f .env.local ]] && grep -q '^BMOZI_GATE_CODEX_PASSWORD=' .env.local; then
  awk -v value="BMOZI_GATE_CODEX_PASSWORD=$PASS" '
    BEGIN { replaced = 0 }
    /^BMOZI_GATE_CODEX_PASSWORD=/ {
      print value
      replaced = 1
      next
    }
    { print }
    END {
      if (!replaced) {
        print value
      }
    }
  ' .env.local > .env.local.tmp
  mv .env.local.tmp .env.local
else
  printf '\nBMOZI_GATE_CODEX_PASSWORD=%s\n' "$PASS" >> .env.local
fi

cat > .codex-login <<EOF
BMOZI_GATE_USER=$USER_NAME
BMOZI_GATE_PASSWORD=$PASS
BMOZI_GATE_URL=https://bmozi.net/access
UPDATED_AT_UTC=$(date -u +%Y-%m-%dT%H:%M:%SZ)
EOF
chmod 600 .codex-login
echo "  ✓ wrote .codex-login"

if [[ "$DEPLOY" == "1" ]]; then
  echo "Redeploying production..."
  "${VERCEL[@]}" --prod --yes
else
  echo "Env updated. Run 'vercel --prod --yes' or re-run with --deploy to apply in production."
fi
