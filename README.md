# server-plugin-elm

Use [Elm](https://elm-lang.org/) in [vitejs/vite](https://github.com/vitejs/vite) development server.

## Installation

There is no publish yet, but the code is very short and easy to share. Check out `dist` for compiled JS.

Alternatively:

```sh
$ curl -o serverPluginElm.js https://raw.githubusercontent.com/lettenj61/server-plugin-elm/trunk/dist/serverPluginElm.js
```

## Example

**Set up**:

```sh
$ npm init -y
$ npm i -D vite node-elm-compiler
```

**Configuration** (`vite.config.js`):

```js
// assume you have `serverPluginElm.js` alongside `vite.config.js`
const { serverPluginElm } = require('./serverPluginElm');

module.exports = {
  configureServer: [
    serverPluginElm
  ]
};
```

## License

Some part of the code is copied from [rollup-plugin-elm](https://github.com/ulisses-alves/rollup-plugin-elm).

For this repository, you can use either of:

- Apache 2.0
- MIT
