import Layout from '../../../components/Layout'
import { getPost } from '../../../api/ghost'
import Link from 'next/link'
import Head from 'next/head'

const Post = ({ post }) => (
  <Layout>
    <Head>
      <link rel="stylesheet" href="/static/css/blog-post.css" />
      {post.feature_image ? (
        <>
          <meta property="og:image" content={post.feature_image} key="image" />
          <meta
            property="twitter:image"
            content={post.feature_image}
            key="twitter-image"
          />
        </>
      ) : (
        <></>
      )}
      <title key="title">{post.title}</title>
      <meta property="og:title" content={post.title} key="og-title" />
      <meta property="twitter:title" content={post.title} key="twitter-title" />
      <meta
        name="description"
        content={post.custom_excerpt || post.excerpt}
        key="description"
      />
      <meta
        property="twitter:description"
        content={post.custom_excerpt || post.excerpt}
        key="twitter-description"
      />
    </Head>
    <section className="section">
      <Link href="/blog">
        <a>Back to blog</a>
      </Link>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="post-container">
          <h1 className="title is-2">{post.title}</h1>
          <img
            style={{ borderRadius: '2px', margin: '0.8em 0 2.3em' }}
            src={post.feature_image}
          />
          <div className="post-full-content content">
            <div
              className="post-content"
              dangerouslySetInnerHTML={{
                __html: `
${post.codeinjection_head || ''}
${post.html}
${post.codeinjection_foot || ''}
                `,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

Post.getInitialProps = async ({ query }) => {
  const post = await getPost(query.slug)
  return { post }
}

export default Post
