import Post from '../models/Post';
import InMemoryDB from '../utils/InMemoryDB';

export class PostDataAccess {
    private db = InMemoryDB.getInstance();

    addPost(post: Post): void {
        this.db.addPost(post);
    }

    getPost(postId: number): Post {
        const post = this.db.getPost(postId);
        if (!post) {
            throw new Error(`User with ID ${postId} not found`);
        }
        return post;
    }

    updatePost(postId: number, updateData: Partial<Post>): void {
        const existingPost = this.db.getPost(postId);
        if (!existingPost) {
            throw new Error(`User with ID ${postId} not found`);
        }
        this.db.updatePost(postId, updateData);
    }

    deletePost(postId: number): void {
        const existingPost = this.db.getPost(postId);
        if (!existingPost) {
            throw new Error(`User with ID ${postId} not found`);
        }
        this.db.deletePost(postId);
    }
}
