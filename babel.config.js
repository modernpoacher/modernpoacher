const {
  env: {
    NODE_ENV = 'development'
  }
} = process

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

module.exports = (api = { cache: { using: () => console.error({ NODE_ENV }) } }) => {
  console.log({ NODE_ENV })

  api.cache.using(() => NODE_ENV)

  return {
    presets
  }
}
