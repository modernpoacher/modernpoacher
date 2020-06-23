const debug = require('debug')

const log = debug('modernpoacher')

const {
  env: {
    DEBUG = 'modernpoacher',
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

function using () {
  log({ NODE_ENV })

  return NODE_ENV === 'production'
}

module.exports = (api) => {
  if (api) api.cache.using(using)

  return {
    presets,
    plugins
  }
}
