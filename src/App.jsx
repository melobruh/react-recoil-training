import { RecoilRoot } from "recoil"
import PostsContainer from "./PostsContainer"

function App() {
  return (
    <RecoilRoot>
      <div className="max-w-2xl mx-auto mt-5">
        <h1 className="text-2xl font-bold text-center mb-4">Recoil + Fetch Example</h1>
        <PostsContainer />
      </div>
    </RecoilRoot>
  )
}

export default App

