import express, { Request, Response } from 'express';
import { AuthController } from '../Controllers/AuthController';

const router = express.Router();
const authController = new AuthController();

router.post('/login', async (req: Request, res: Response) => await authController.handleLogin(req, res));

export default router;
