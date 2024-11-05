import { Request, Response } from 'express'

export function createPost(req: Request, res: Response) {
  res.send("Created Post")
}
export function updatePost(req: Request, res: Response) {
  res.send("Updated Post")
}
export function deletePost(req: Request, res: Response) {
  res.send("Deleted Post")
}
export function getPost(req: Request, res: Response) {
  res.send("Get post")
}
export function getAll(req: Request, res: Response) {
  res.send("Get all posts")
}
