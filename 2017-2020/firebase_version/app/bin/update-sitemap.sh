#!/bin/bash

echo '>> Publishing on GIT the new sitemap...'
git add static/sitemap.xml
git commit -m ':page_with_curl: Updating sitemap file'
git push origin master