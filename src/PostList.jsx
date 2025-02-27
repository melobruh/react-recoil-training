import { useRecoilValue } from "recoil"
import { postsState } from "./atoms"

const PostList = () => {
  const posts = useRecoilValue(postsState)

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Posts</h2>
      <ul className="space-y-2">
        {posts.map((post) => (
          <li key={post.id} className="p-2 border rounded-lg shadow">
            <h3 className="font-semibold">{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PostList