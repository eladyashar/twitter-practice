import { Request, Response } from 'express';
import Post from '../models/Post';
import { PostBL } from '../BL/PostBL';

export class PostController {
    private postBL = new PostBL();

    addPost(req: Request, res: Response) {
        const postData = req.body;
        const post = new Post(postData.id, postData.content, postData.postedBy);
        try {
            this.postBL.addPost(post);
            res.status(201).send({ message: `Post created successfully` });
        } catch (error) {
            res.status(400).send((error as Error).message);
        }
    }

    getPost(req: Request, res: Response) {
        const postId = +req.params.id;
        try {
            const post = this.postBL.getPost(postId);
            res.status(200).send(post);
        } catch(error) {
            res.status(400).send((error as Error).message);
        }
    }

    updatePost(req: Request, res: Response) {
        const postId = +req.params.id;
        const postData = req.body;
        try {
            this.postBL.updatePost(postId, postData);
            res.status(200).send({ message: `Post ${postId} updated successfully` });
        } catch(error) {
            res.status(400).send((error as Error).message);
        }
    }

    deletePost(req: Request, res: Response) {
        const postId = +req.params.id;
        try {
            this.postBL.deletePost(postId);
            res.status(200).send({ message: `Post ${postId} deleted successfully` });
        } catch(error) {
            res.status(400).send((error as Error).message);
        }
    }
}
