import { Request, Response } from 'express';
import Post from '../models/Post';
import { PostBL } from '../BL/PostBL';

export class PostController {

    private postBL: PostBL;

    constructor(postBL: PostBL) {
        this.postBL = postBL;
    }

    async addPost(req: Request, res: Response): Promise<void> {
        const postData = req.body;
        const post = new Post(null, postData.title, postData.content, postData.postedBy);
        try {
            await this.postBL.addPost(post);
            res.status(201).send({ message: `Post created successfully` });
        } catch (error) {
            res.status(400).send((error as Error).message);
        }
    }

    async getPost(req: Request, res: Response): Promise<void> {
        const postId = +req.params.id;
        try {
            const post = await this.postBL.getPost(postId);
            res.status(200).send(post);
        } catch(error) {
            res.status(400).send((error as Error).message);
        }
    }

    async getAllPosts(req: Request, res: Response): Promise<void> {
        try {
            const Posts = await this.postBL.getAllPosts();
            res.status(200).send(Posts);
        } catch(error) {
            res.status(400).send((error as Error).message);
        }
    }

    async updatePost(req: Request, res: Response): Promise<void> {
        const postId = +req.params.id;
        const postData = req.body;
        try {
            await this.postBL.updatePost(postId, postData);
            res.status(200).send({ message: `Post ${postId} updated successfully` });
        } catch(error) {
            res.status(400).send((error as Error).message);
        }
    }

    async deletePost(req: Request, res: Response): Promise<void> {
        const postId = +req.params.id;
        try {
            await this.postBL.deletePost(postId);
            res.status(200).send({ message: `Post ${postId} deleted successfully` });
        } catch(error) {
            res.status(400).send((error as Error).message);
        }
    }
}
