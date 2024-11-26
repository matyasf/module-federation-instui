# Running InstUI 8/9 (host) and InstUI 10 (Guest) together

This is a demo app that uses module federation to load an app with InstUI v10. To make this work specific criteria needs to be met:

- Host app needs to be using InstUI v8/v9
- Host app needs to import the `canvas`/`canvasHighContrast` theme before loading the guest app (see `host-app/index.js)
- Guest app must use `canvasThemeLocal` or `canvasHighContrastThemeLocal`. `InstUISettingsProvider`'s `theme` prop cannot be left unset because it will default to `canvas`
- Guest app cannot use `canvas.use()`, `canvasHighContrast.use()`, these again use the `globalThis` cache if possible. Overrides specified in these are not applied to local themes.

## How does it work?

The main issue with InstUI theming that it uses a `globalThis` object to store/cache theme objects. This looks up the theme by its key, if it `undefined` it will store the given theme, if not it will return it. The local themes circumvent this cache.

# What pierces the module federation isolation?

- `globalThis`
- using `document.getElementById` and such to access something outside the mounted DOM subtree
- any library relying on the above (emotion?)
- Emotion's global CSS stuff (style tags in head!). On the upside InstUI v8, v9, v10 uses Emotion 11

# Running the demo

Run `pnpm i` in the host app and in the guest app. Run `pnpm run start`. This will build and serve both `app1` and `app2` on ports 3001 and 3002 respectively with RsPack.
You can also try `pnpm run legacy:start`, this should do the same just with Webpack

- [localhost:3001](http://localhost:3001/) (HOST)
- [localhost:3002](http://localhost:3002/) (STANDALONE REMOTE)
