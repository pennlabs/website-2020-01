import Layout from '../../../components/Layout'
import { getPost } from '../../../api/posts'
import Link from 'next/link'
const Post = ({ post }) => (
  <Layout>
    <Link href="/blog">
      <a>Back to blog</a>
    </Link>
    <h1 className="title is-2">{post.title}</h1>
    <div
      className="post-content"
      dangerouslySetInnerHTML={{
        __html: '<style> div.post-content * {all: revert}</style>' + post.html,
      }}
    />
  </Layout>
)

Post.getInitialProps = async ({ query }) => {
  const post = await getPost(query.slug)
  return { post }
}

export default Post
