import useFetchPosts from "./useFetchPosts"
import PostList from "./PostList"

const PostsContainer = () => {
  useFetchPosts()

  return <PostList />
}

export default PostsContainer

