export type IPost = {
  url: string
  category: string
  author: string
  comments: string
  likes: string
  created_at: string
  title: string
}

export type IPosts = {
  posts: IPost[]
}
