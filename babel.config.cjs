const debug = require('debug')

const log = debug('@modernpoacher/modernpoacher')

log('`modernpoacher` is awake')

const {
  env: {
    NODE_ENV = 'development'
  }
} = process

function env () {
  log({ NODE_ENV })

  return (
    NODE_ENV === 'production'
  )
}

const presets = [
  [
    '@babel/env',
    {
      targets: {
        node: 'current'
      },
      useBuiltIns: 'usage',
      corejs: 3
    }
  ]
]

const plugins = [
  [
    'minify-dead-code-elimination',
    {
      optimizeRawSize: true
    }
  ],
  [
    'module-resolver',
    {
      root: ['./src'],
      cwd: 'babelrc',
      alias: {
        build: './build'
      }
    }
  ]
]

// @ts-ignore
module.exports = (api) => {
  if (api) api.cache.using(env)

  return {
    presets,
    plugins
  }
}
