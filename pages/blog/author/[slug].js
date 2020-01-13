import Error from 'next/error'
import Head from 'next/head'
import Link from 'next/link'

import {getAuthor, getPostList} from '../../../api/ghost'
import Layout from '../../../components/Layout'
import PostList from '../../../components/PostList'

const AuthorPage = ({author, posts}) => (
    <Layout>
      <section className="hero is-info">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">{author.name}</h1>
            <h2 className="subtitle">{author.bio}</h2>
          </div>
        </div>
      </section>
      <section className = 'section'>
        <Link href = '/blog'>
          <a>Back to blog</a>
        </Link>
        <PostList posts={posts} showAuthor={false} />
      </section>
  </Layout>
)

AuthorPage.getInitialProps = async ({ query: { slug } }) => {
  const author = await getAuthor(slug)
  const posts = await getPostList(`authors:[${slug}]`)
  return { author, posts }
}

export default AuthorPage