const withSass = require('@zeit/next-sass')
module.exports = withSass({
  publicRuntimeConfig: { GHOST_API_KEY: process.env.GHOST_API_KEY },
})
