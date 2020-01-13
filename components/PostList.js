import Link from 'next/link'
import PostCard from './PostCard'

const PostList = ({ posts, showAuthor = true, showTags = true }) => (
  <>
  <ul>
    {posts.map(post => (
      <li key={post.id}>
        <PostCard post={post} showTags={showTags} showAuthor={showAuthor} /> 
        <br />
      </li>
    ))}
  </ul>
  </>
)
export default PostList
