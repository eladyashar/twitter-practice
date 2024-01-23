import Post from '../models/Post';
import InMemoryDB from '../utils/InMemoryDB';
import { DataAccess } from './DataAccess';

export class PostDataAccessInMemory implements DataAccess<Post>{
    private db = InMemoryDB.getInstance();

    async add(post: Post): Promise<void> {
        await this.db.addPost(post);
    }

    async get(postId: number): Promise<Post> {
        const post = await this.db.getPost(postId);
        if (!post) {
            throw new Error(`User with ID ${postId} not found`);
        }
        return post;
    }

    async getAll(): Promise<Post[]> {
        const posts = await this.db.getAllPosts();
        if (posts.length === 0) {
            throw new Error(`User with ID not found`);
        }
        return posts;
    }

    async update(postId: number, updateData: Partial<Post>): Promise<void> {
        const existingPost = await this.db.getPost(postId);
        if (!existingPost) {
            throw new Error(`User with ID ${postId} not found`);
        }
        await this.db.updatePost(postId, updateData);
    }

    async delete(postId: number): Promise<void> {
        const existingPost = await this.db.getPost(postId);
        if (!existingPost) {
            throw new Error(`User with ID ${postId} not found`);
        }
        await this.db.deletePost(postId);
    }
}
