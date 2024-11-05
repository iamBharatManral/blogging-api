import { Router } from 'express';
import { createPost, updatePost, deletePost, getPost, getAll } from '../handlers/posts'

const router = Router();

router.route('/')
  .get(getAll)
  .post(createPost)

router.route('/:id')
  .put(updatePost)
  .delete(deletePost)
  .get(getPost)

export default router;
