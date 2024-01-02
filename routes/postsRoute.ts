import express, {Request, Response} from 'express';
import Post from '../models/Post';
import InMemoryDB from '../utils/InMemoryDB';

const db = InMemoryDB.getInstance();
const router = express.Router();

router.post('/', (req: Request, res: Response) => {
    const postData = req.body;
    const post = new Post(postData.id, postData.content, postData.postedBy);
    db.addPost(post);
    res.status(201).send(post);
});

router.delete('/:id', (req: Request, res: Response) => {
    const postId = +req.params.id;
    const existingPost = db.getPost(postId);

    if (!existingPost) {
        return res.status(404).send('Post not found');
    }

    db.deletePost(postId);
    res.status(200).send({ message: `Post ${postId} deleted successfully` });
});

router.get('/:id', (req: Request, res: Response) => {
    const post = db.getPost(+req.params.id);
    if (post) {
        res.status(200).send(post);
    } else {
        res.status(404).send('Post not found');
    }
});

router.put('/:id', (req: Request, res: Response) => {
    const postId = +req.params.id;
    const existingPost = db.getPost(postId);

    if (!existingPost) {
        return res.status(404).send('Post not found');
    }

    // Assuming the request body contains the updated fields for the post
    db.updatePost(postId, req.body);
    const updatedPost = db.getPost(postId);
    res.status(200).send(updatedPost);
});
export default router;
