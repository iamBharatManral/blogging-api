import { Post } from '../types/post';

export default interface store {
  save(post: Post): void,
  update(id: string, newPost: Post): void,
  get(id: string): Post | undefined,
  delete(id: string): void,
  getAll(): Array<Post>
}
