#!/bin/bash

echo '>> Publishing on GIT the new service-worker...'
cd ../
git add public/sw.js
# git commit -m ':space_invader: Updating service worker'
git commit -m ":space_invader: $(curl -s http://whatthecommit.com/index.txt)"
git push origin master
