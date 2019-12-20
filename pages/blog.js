import Layout from '../components/Layout'
import Link from 'next/link'
import { getPostList } from '../api/ghost'

const Blog = ({ posts }) => (
  <Layout>
    <section className="section">
      <div className="container">
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <strong>
                <Link href="/blog/post/[slug]" as={`/blog/post/${post.slug}`}>
                  <a>{post.title}</a>
                </Link>
              </strong>{' '}
              - By {post.authors.map(a => a.name).join(', ')}
              <p style={{ width: '80ch' }}>
                {post.custom_excerpt || post.excerpt}
              </p>
              <br />
            </li>
          ))}
        </ul>
      </div>
    </section>
  </Layout>
)

Blog.getInitialProps = async () => {
  const posts = await getPostList()
  return { posts }
}

export default Blog
