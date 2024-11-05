import Store from './store';
import { Post } from '../types/post';

export const InMemoryStore: Store & { store: Array<Post> } = {
  store: [],

  save(post: Post) {
    this.store.push(post)
  },

  update(id: string, newPost): void {
    const remainingPosts = this.store.filter((p: Post) => p.id !== id);
    this.store = [...remainingPosts, newPost]
  },

  get(id: string): Post | undefined {
    return this.store.find((p: Post) => p.id == id)
  },

  delete(id: string): void {
    this.store = this.store.filter((p: Post) => p.id !== id);
  },

  getAll(): Array<Post> {
    return this.store
  }

}
