import express, { Request, Response } from 'express';
import { PostController } from '../Controllers/PostController';

const router = express.Router();
const postController = new PostController();

router.post('/', (req: Request, res: Response) => postController.addPost(req,res));
router.get('/:id', (req: Request, res: Response) => postController.getPost(req,res));
router.put('/:id', (req: Request, res: Response) => postController.updatePost(req,res));
router.delete('/:id', (req: Request, res: Response) => postController.deletePost(req,res));

export default router;
