#!/usr/bin/env bash
# Push vers achrafkadar/Template-real-estate
set -euo pipefail

REPO="achrafkadar/Template-real-estate"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"

cd "$ROOT"

TOKEN=$(printf "protocol=https\nhost=github.com\n\n" | git credential fill | awk -F= '/^password=/{print $2}')

git remote remove origin 2>/dev/null || true
git remote add origin "https://x-access-token:${TOKEN}@github.com/${REPO}.git"
git push -u origin main

git remote set-url origin "git@github.com:${REPO}.git"

echo ""
echo "Dépôt : https://github.com/${REPO}"
echo "Site : https://achrafkadar.github.io/Template-real-estate/"
echo "GitHub → Settings → Pages → Source : GitHub Actions"
