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

module.exports = (api = { cache: { using: () => log({ NODE_ENV, default: true }) } }) => {
  log({ NODE_ENV })

  api.cache.using(() => NODE_ENV)

  return {
    presets,
    plugins
  }
}
