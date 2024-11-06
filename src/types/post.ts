export type Post = {
  id: string,
  title: string,
  content: string,
  category: string,
  tags: Array<string>,
  createdAt: Date,
  updatedAt: Date
}

export type IncomingRequest = Omit<Post, 'id' | 'createdAt' | 'updatedAt'>
