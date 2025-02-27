import useFetchPosts from "./useFetchPosts"
import PostList from "./PostList"

const PostsContainer = (): JSX.Element => {
  useFetchPosts() // Now this hook is called inside the RecoilRoot context

  return <PostList />
}

export default PostsContainer
