import { Request, Response } from 'express';
import User from '../models/User';
import { AuthBL } from '../BL/AuthBL';

export class AuthController {
    private authBL = new AuthBL();

    async handleLogin(req: Request, res: Response) {
        
        try {
            console.log(req.body);
            const token = req.body.token;
            const user = await this.authBL.verifyGoogleToken(token);
            console.log(user);
            // Additional steps like creating a session token (JWT)
            // and returning user data and session token to the client
            console.log(JSON.stringify(user));
            res.status(200).json({ user });
        } catch (error) {
            res.status(401).json({ message: 'Authentication failed', error: (error as Error).message });
        }
    }
}
