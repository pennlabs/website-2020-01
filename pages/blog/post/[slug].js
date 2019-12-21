import Layout from '../../../components/Layout'
import { getPost } from '../../../api/ghost'
import Link from 'next/link'
import Head from 'next/head'
import Error from 'next/error'

const Post = ({ post }) => {
  if (!post) {
    return <Error statusCode={404} />
  }
  let seoProps = {
    title: post.title,
    description: post.custom_excerpt || post.excerpt,
    url: 'https://pennlabs.org/blog',
  }
  if (post.feature_image) {
    seoProps.image = post.feature_image
    seoProps.imageAlt = post.title
  }
  return (
    <Layout {...seoProps}>
      <Head>
        <link rel="stylesheet" href="/static/css/blog-post.css" />
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
}
Post.getInitialProps = async ({ query }) => {
  const post = await getPost(query.slug)
  return { post }
}

export default Post
