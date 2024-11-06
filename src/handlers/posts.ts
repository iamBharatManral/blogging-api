import { Request, Response } from 'express'
import { generateId } from '../utils';

export function createPost(req: Request, res: Response) {
  const post = req.body;
  post.id = generateId();
  post.createdAt = new Date();
  post.updatedAt = new Date();
  req.store?.save(post);
  res.status(201).send(req.body)
}

export function updatePost(req: Request, res: Response) {
  res.send("Updated Post");
}

export function deletePost(req: Request, res: Response) {
  res.send("Deleted Post");
}

export function getPost(req: Request, res: Response) {
  res.send("Get Post");
}

export function getAll(req: Request, res: Response) {
  res.status(200)
    .header('content-type', 'application/json')
    .json(req.store?.getAll())
}
