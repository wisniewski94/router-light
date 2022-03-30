#!/usr/bin/env sh

set -e

cd /docs
npm run build

cd /dist
git init
git checkout -b main
git add -A
git commit -m "build: deploy"
git push -f git@github.com:wisniewski94/router-light.git main:gh-pages

cd -