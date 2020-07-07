import { ServerPlugin } from 'vite'
import { compileToString } from 'node-elm-compiler'

export const serverPluginElm: ServerPlugin =
  // based on server vue plugin at
  // https://github.com/vitejs/vite/blob/6047305bb80942f153e51ced1af2e411115e2ba3/src/node/server/serverPluginVue.ts
  ({ root, app, resolver, watcher }) => {
    app.use(async (ctx, next) => {
      if (!ctx.path.endsWith('.elm') && !ctx.elm) {
        return next()
      }

      const filePath = resolver.requestToFile(ctx.path)
      try {
        const res = await compileToString([filePath], {})
        
        ctx.body = wrapElmCode(res.toString())
        ctx.type = 'js'
      } catch (err) {

      }
    })
  }

/**
 * Copied from:
 * https://github.com/ulisses-alves/rollup-plugin-elm/blob/807ed11d462b2a46e645794a4f2588a46d9c3126/src/index.js
 * 
 * @param {string} code 
 */
function wrapElmCode(code: string): string {
  return `let output = {}; (function() { ${code} }).call(output); export default output.Elm;`
}