#!/usr/bin/env bash
# check-content-sync.sh — governs the seam between the products/ source-of-truth
# folders and this site's content/blog/ copies.
#
# The seam's four crossings, per the house definition:
#   identity:    filename mapping below
#   events:      this script IS the notification — run it before every deploy
#   owner:       whoever deploys owns running it (add to your deploy ritual)
#   measurement: exit code — nonzero means DRIFT, and the deploy should stop
#
# Usage: ./scripts/check-content-sync.sh   (from the bmozi.net repo root)

set -u
PRODUCTS="$(cd "$(dirname "$0")/../.." && pwd)"   # .../products
SITE="$PRODUCTS/bmozi.net"
DRIFT=0

check() { # $1 = source file, $2 = site copy
  if [ ! -f "$1" ]; then echo "SOURCE MISSING: $1"; DRIFT=1; return; fi
  if [ ! -f "$2" ]; then echo "SITE COPY MISSING: $2"; DRIFT=1; return; fi
  if ! diff -q "$1" "$2" >/dev/null 2>&1; then
    echo "DRIFTED: ${1#$PRODUCTS/}  <->  ${2#$SITE/}"
    DRIFT=1
  fi
}

# --- The Seams series (products/linkedin-systems-thinking -> content/blog/the-seams)
for f in "$PRODUCTS"/linkedin-systems-thinking/[0-9]*.md; do
  check "$f" "$SITE/content/blog/the-seams/$(basename "$f")"
done

# --- Other series (same filenames, mapped folders)
for pair in \
  "linkedin-getting-it-right:getting-it-right" \
  "linkedin-seams-for-everyone:seams-for-everyone" \
  "linkedin-architects-mind:architects-mind"; do
  src="${pair%%:*}"; dst="${pair##*:}"
  for f in "$PRODUCTS/$src"/[0-9]*.md; do
    [ -e "$f" ] || continue
    check "$f" "$SITE/content/blog/$dst/$(basename "$f")"
  done
done

# --- Reference shelf (explicit mapping: source -> site name)
while IFS='|' read -r src dst; do
  [ -z "$src" ] && continue
  check "$PRODUCTS/$src" "$SITE/content/blog/reference/$dst"
done <<'MAP'
architects-charter/THE-ARCHITECTS-CHARTER.md|01-the-architects-charter.md
linkedin-systems-thinking/EDITORIAL-NORTH-STAR.md|02-editorial-north-star.md
ea-mastery/00-MASTERY-CURRICULUM.md|03-ea-mastery-curriculum.md
ea-mastery/01-READING-CANON.md|04-reading-canon.md
ea-mastery/02-FIELD-GUIDE.md|05-field-guide.md
ea-mastery/03-FIELD-KIT.md|06-field-kit.md
ea-mastery/04-DAY-ZERO-BASELINE.md|07-day-zero-baseline.md
ea-mastery/05-BUILD-THE-GUILD.md|08-build-the-guild.md
ea-mastery/06-STUDY-GUIDE.md|09-study-guide.md
ea-mastery/07-PROGRAM-PROSECUTION.md|10-program-prosecution.md
ea-mastery/08-THE-DECISION-LAYER.md|11-the-decision-layer.md
scf-provenance/PROVENANCE.md|12-provenance-record.md
../harnessing-the-horse/talks/the-harness-in-ten-minutes.md|13-the-harness-in-ten-minutes.md
ea-mastery/09-INTRODUCTION-KIT.md|14-introduction-kit.md
MAP

if [ "$DRIFT" -eq 0 ]; then
  echo "SEAM GOVERNED: all source files and site copies in sync."
else
  echo ""
  echo "DRIFT DETECTED — resolve before deploying. Source of truth is products/;"
  echo "copy forward with: cp <source> <site copy>   (or reverse if the site edit was intentional)"
fi
exit $DRIFT
