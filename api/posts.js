import GhostContentAPI from '@tryghost/content-api'

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: 'https://ghost.pennlabs.org',
  key: process.env.GHOST_API_KEY,
  version: 'v3',
})

export async function getPostList() {
  return await api.posts
    .browse({
      limit: 'all',
      include: ['authors', 'tags'],
    })
    .catch(err => {
      console.error(err)
    })
}

export async function getPost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug,
    })
    .catch(err => {
      console.error(err)
    })
}
