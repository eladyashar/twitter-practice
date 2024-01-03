import express, { Request, Response } from 'express';
import { UserController } from '../Controllers/UserController';

const router = express.Router();
const userController = new UserController();

router.post('/', (req: Request, res: Response) => userController.addUser(req, res));
router.get('/:id', (req: Request, res: Response) => userController.getUser(req, res));
router.put('/:id', (req: Request, res: Response) => userController.updateUser(req, res));
router.delete('/:id', (req: Request, res: Response) => userController.deleteUser(req, res));

export default router;
