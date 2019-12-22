import Error from 'next/error'
import Head from 'next/head'
import Link from 'next/link'

import {getTag, getPostList} from '../../../api/ghost'
import Layout from '../../../components/Layout'
import PostList from '../../../components/PostList'

const TagPage = ({tag, posts}) => (
    <Layout>
      <section className = 'section'>
        <Link href = '/blog'>
          <a>Back to blog</a>
        </Link>
        <h1 className='title is-1'>{tag.name}</h1>
        <p>{tag.description}</p>
        <PostList posts={posts} showTags={false} />
      </section>
  </Layout>
)

TagPage.getInitialProps = async ({ query: { slug } }) => {
  const tag = await getTag(slug)
  const posts = await getPostList(`tags:[${slug}]`)
  return { tag, posts }
}

export default TagPage 