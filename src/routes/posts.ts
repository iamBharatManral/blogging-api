import { Router } from 'express';
import { createPost, updatePost, deletePost, getPost, getAll } from '../handlers/posts';
import validateRequest from '../middlewares/validator';

const router = Router();

router.route('/')
  .get(getAll)
  .post(validateRequest, createPost)

router.route('/:id')
  .put(validateRequest, updatePost)
  .delete(deletePost)
  .get(getPost)

export default router;
