declare module 'node-elm-compiler' {
  function compileToString(sources: string[], options: {
    pathToElm?: string
    output?: string
    report?: 'json'
    debug?: boolean
    optimize?: boolean
    docs?: string
  }): Promise<string>
}