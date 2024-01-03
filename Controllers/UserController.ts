import { Request, Response } from 'express';
import User from '../models/User';
import { UserBL } from '../BL/UserBL';

export class UserController {
    private userBL = new UserBL();

    addUser(req: Request, res: Response) {
        const userData = req.body;
        const user = new User(userData.id, userData.username, userData.email);
        try {
            this.userBL.addUser(user);
            res.status(201).send({ message: `User created successfully` });
        } catch (error) {
            res.status(400).send((error as Error).message);
        }
    }

    getUser(req: Request, res: Response) {
        const userId = +req.params.id;
        try {
            const user = this.userBL.getUser(userId);
            res.status(200).send(user);
        } catch(error) {
            res.status(400).send((error as Error).message);
        }
    }

    updateUser(req: Request, res: Response) {
        const userId = +req.params.id;
        const userData = req.body;
        try {
            this.userBL.updateUser(userId, userData);
            res.status(200).send({ message: `User ${userId} updated successfully` });
        } catch(error) {
            res.status(400).send((error as Error).message);
        }
    }

    deleteUser(req: Request, res: Response) {
        const userId = +req.params.id;
        try {
            this.userBL.deleteUser(userId);
            res.status(200).send({ message: `User ${userId} deleted successfully` });
        } catch(error) {
            res.status(400).send((error as Error).message);
        }
    }
}
