<img src="https://raw.githubusercontent.com/nhoizey/Better500px-WebExtension/master/src/icons/better500px-128px.png" alt="Better500px" width="128" height="128" align="right" />

# Better500px

This is an extension for Firefox, Chrome and Opera that enhances [500px.com](https://500px.com/) with a few useful shortcuts for better navigation.

## 500px enhancements

### Menu items

- "Pulse" item in the menu that links to the search for current photographer, sorted by pulse. It might show several photographers if the name is common.
- "Favorites" item in the menu that links directly to the favorites, if such a gallery exists and contains at least one photo.

<img src="https://raw.githubusercontent.com/nhoizey/Better500px-WebExtension/master/screenshots/better500px-tchebotarev-menu.png" alt="Better500px on Evgeny Tchebotarev's gallery" width="90%" height="auto" />

### Visual hints

- White hearts shown in galleries on photos already liked.

<img src="https://raw.githubusercontent.com/nhoizey/Better500px-WebExtension/master/screenshots/better500px-tchebotarev-favs.png" alt="Better500px on Evgeny Tchebotarev's gallery" width="90%" height="auto" />

## How it is built

This extension is built using [the WebExtensions standard](https://developer.mozilla.org/en-US/Add-ons/WebExtensions), sharing the exact same source code for Firefox and Chrome.

The Chrome (and Opera) extension is built using [@oncletom](https://github.com/oncletom)'s [crx](https://github.com/oncletom/crx) Node.js command line app.
