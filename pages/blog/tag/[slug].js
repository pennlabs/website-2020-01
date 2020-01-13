import Error from 'next/error'
import Head from 'next/head'
import Link from 'next/link'

import {getTag, getPostList} from '../../../api/ghost'
import Layout from '../../../components/Layout'
import PostList from '../../../components/PostList'

const TagPage = ({tag, posts}) => (
    <Layout>
      <section className="hero is-info">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">{tag.name}</h1>
            <h2 className="subtitle">{tag.description}</h2>
          </div>
        </div>
      </section>
      <section className = 'section'>
        <Link href = '/blog'>
          <a>Back to blog</a>
        </Link>
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