const debug = require('debug')

const log = debug('modernpoacher')

const {
  DEBUG = 'modernpoacher',
  env: {
    NODE_ENV = 'development'
  }
} = process

debug.enable(DEBUG)

log('`modernpoacher` is awake')

const presets = [
  [
    '@babel/env', {
      useBuiltIns: 'entry',
      targets: {
        node: 'current'
      },
      corejs: 3
    }
  ]
]

const plugins = [
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

const API = {
  cache: {
    using () {
      log({ NODE_ENV, API: true })
    }
  }
}

module.exports = (api = API) => {
  api.cache.using(() => {
    log({ NODE_ENV })

    return NODE_ENV === 'production'
  })

  return {
    presets,
    plugins
  }
}
