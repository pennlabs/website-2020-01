import Link from 'next/link'

const Byline = ({ authors }) => (
  <p>
    By {' '}
    {authors.map((author, i) => (
      <>
        <Link
          href="/blog/author/[slug]"
          as={`/blog/author/${author.slug}`}
        >
          <a>
          {/* <img className="is-rounded" src={author.profile_image} style={{width: '16px', height: '16px', borderRadius: '16px'}}/> */}
            {author.name}
          </a>
        </Link>
        {i < authors.length - 1 ? ', ' : ''}
      </>
    ))}
  </p>
)

const Tags = ({ tags }) => (
  <p>
    {tags.map(tag => (
      <>
        <Link href="/blog/tag/[slug]" as={`/blog/tag/${tag.slug}`}>
          <a><span className="tag">{tag.name}</span></a>
        </Link>
      </>
    ))}
  </p>
)

const PostCard = ({ post, showTags, showAuthor }) => (
  <div>
    <strong>
      <Link href="/blog/post/[slug]" as={`/blog/post/${post.slug}`}>
        <a>{post.title}</a>
      </Link>
      </strong>{' '}
      {showAuthor ? (
        <Byline authors={post.authors} />
      ) : (
        ''
      )}
      {showTags ? (
        <Tags tags={post.tags} />
      ) : (
        ''
      )}
      <p style={{ maxWidth: '80ch' }}>
        {post.custom_excerpt || post.excerpt}
      </p>
  </div>
)

export default PostCard