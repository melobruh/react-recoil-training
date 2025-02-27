import { atom } from "recoil"
import type { Post } from "./types"

export const postsState = atom<Post[]>({
  key: "postsState",
  default: [],
})

