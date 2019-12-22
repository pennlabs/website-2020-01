import Link from 'next/link'

import { getPostList } from '../api/ghost'
import Layout from '../components/Layout'
import PostList from '../components/PostList'

const Blog = ({ posts }) => (
  <Layout>
    <section className="section">
      <div className="container">
        <PostList posts={posts} />
      </div>
    </section>
  </Layout>
)

Blog.getInitialProps = async () => {
  const posts = await getPostList()
  return {
    posts,
  }
}

export default Blog
