import { Request, Response } from 'express'
import { generateId } from '../utils';

export function createPost(req: Request, res: Response) {
  const post = req.body;
  post.id = generateId();
  post.createdAt = new Date();
  post.updatedAt = new Date();
  req.store?.save(post);
  res.status(201).send({
    data: [post],
    error: null
  })
}

export function updatePost(req: Request, res: Response) {
  const { id } = req.params;
  const newPost = req.body;
  if (!newPost) {
    res.status(404).json({ error: "Not Found", data: [] });
    return;
  }
  newPost.id = id;
  newPost.updatedAt = new Date();
  req.store?.update(id, newPost);
  res.status(200).send({ error: null, data: [newPost] });
}

export function deletePost(req: Request, res: Response) {
  const { id } = req.params;
  const post = req.store?.get(id);
  if (!post) {
    res.status(404).json({ error: "Not Found", data: [] });
    return;
  }
  req.store?.delete(id);
  res.status(200).send({ error: null, data: [] });
}

export function getPost(req: Request, res: Response) {
  const { id } = req.params;
  const post = req.store?.get(id);
  if (!post) {
    res.status(404).json({ error: "Not Found", data: [] });
    return;
  }
  res.status(200).json({ data: [post], error: null });
}

export function getAll(req: Request, res: Response) {
  res.status(200)
    .header('content-type', 'application/json')
    .json({ error: null, data: req.store?.getAll() })
}
