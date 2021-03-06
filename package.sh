#!/bin/sh
cd ./src/

echo "Building the Firefox extension…"
# https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Your_first_WebExtension#Packaging_and_publishing
zip -r ../dist/better500px-firefox.xpi *
cp ../dist/better500px-firefox.xpi ../dist/better500px-folder.zip

echo "Building the Chrome extension…"
# https://github.com/oncletom/crx
../node_modules/.bin/crx pack -o ../dist/better500px-chrome.crx -p ../better500px.pem

echo "“Building” the Opera extension…"
cd ../dist/
cp ./better500px-chrome.crx ./better500px-opera.nex
