import Link from 'next/link'

import { getPostList } from '../api/ghost'
import Layout from '../components/Layout'
import PostList from '../components/PostList'

const Blog = ({ posts }) => (
  <Layout>
    <section className="hero is-info is-medium">
        <div className="hero-body">
          <div className="container" style={{textAlign: 'center'}}>
            <h1 className="title">Penn Labs Blog</h1>
            <h2 className="subtitle">Thoughts and learnings about design, software engineering, and technology</h2>
          </div>
        </div>
      </section>
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
