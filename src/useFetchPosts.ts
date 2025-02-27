"use client"

import { useEffect } from "react"
import { useSetRecoilState } from "recoil"
import { postsState } from "./atoms"
import type { Post } from "./types"

const useFetchPosts = (): void => {
  const setPosts = useSetRecoilState(postsState)

  useEffect(() => {
    const fetchPosts = async (): Promise<void> => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const data: Post[] = await response.json()
        setPosts(data.slice(0, 10)) // Limiting to 10 posts for example
      } catch (error) {
        console.error("Error fetching posts:", error)
      }
    }

    fetchPosts()
  }, [setPosts])
}

export default useFetchPosts

