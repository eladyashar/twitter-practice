import { PostDataAccess } from '../DAL/PostDataAccess';
import Post from '../models/Post';

export class PostBL {
    private postDataAccess = new PostDataAccess();

    addPost(post: Post): void {
        try {
            this.postDataAccess.addPost(post);
        } catch (error) {
            throw new Error(`Unable to add Post: ${(error as Error).message}`);
        }
    }

    getPost(postId: number): Post {
        const Post = this.postDataAccess.getPost(postId);
        if (!Post) {
            throw new Error(`Post with ID ${postId} not found`);
        }
        return Post;
    }

    updatePost(postId: number, updateData: Partial<Post>): void {
        try {
            this.postDataAccess.updatePost(postId, updateData);
        } catch (error) {
            throw new Error(`Unable to update Post: ${(error as Error).message}`);
        }
    }

    deletePost(postId: number): void {
        try {
            this.postDataAccess.deletePost(postId);
        } catch (error) {
            throw new Error(`Unable to delete Post: ${(error as Error).message}`);
        }
    }
}