"use client"

import { useEffect } from "react"
import { useSetRecoilState } from "recoil"
import { postsState } from "./atoms"

const useFetchPosts = () => {
  const setPosts = useSetRecoilState(postsState)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await response.json()
        setPosts(data.slice(0, 10))
      } catch (error) {
        console.error("Error fetching posts:", error)
      }
    }

    fetchPosts()
  }, [setPosts])
}

export default useFetchPosts