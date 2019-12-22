import Link from 'next/link'
const PostList = ({ posts, showAuthor = true, showTags = true }) => (
  <ul>
    {posts.map(post => (
      <li key={post.id}>
        <strong>
          <Link href="/blog/post/[slug]" as={`/blog/post/${post.slug}`}>
            <a>{post.title}</a>
          </Link>
        </strong>{' '}
        {showAuthor ? (
          <span>
            - By{' '}
            {post.authors.map((author, i) => (
              <>
                <Link
                  href="/blog/author/[slug]"
                  as={`/blog/author/${author.slug}`}
                >
                  <a>{author.name}</a>
                </Link>
                {i < post.authors.length - 1 ? ', ' : ''}
              </>
            ))}
          </span>
        ) : (
          ''
        )}
        {showTags ? (
          <p>
            {post.tags.map((tag, i) => (
              <>
                <Link href="/blog/tag/[slug]" as={`/blog/tag/${tag.slug}`}>
                  <a>{tag.name}</a>
                </Link>
                {i < post.tags.length - 1 ? ', ' : ''}
              </>
            ))}
          </p>
        ) : (
          ''
        )}
        <p style={{ maxWidth: '80ch' }}>
          {post.custom_excerpt || post.excerpt}
        </p>
        <br />
      </li>
    ))}
  </ul>
)
export default PostList
