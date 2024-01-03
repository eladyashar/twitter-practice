import { UserDataAccess } from '../DAL/UserDataAccess';
import User from '../models/User';

export class UserBL {
    private userDataAccess = new UserDataAccess();

    addUser(user: User): void {
        try {
            this.userDataAccess.addUser(user);
        } catch (error) {
            throw new Error(`Unable to add user: ${(error as Error).message}`);
        }
    }

    getUser(userId: number): User {
        const user = this.userDataAccess.getUser(userId);
        if (!user) {
            throw new Error(`User with ID ${userId} not found`);
        }
        return user;
    }

    updateUser(userId: number, updateData: Partial<User>): void {
        try {
            this.userDataAccess.updateUser(userId, updateData);
        } catch (error) {
            throw new Error(`Unable to update user: ${(error as Error).message}`);
        }
    }

    deleteUser(userId: number): void {
        try {
            this.userDataAccess.deleteUser(userId);
        } catch (error) {
            throw new Error(`Unable to delete user: ${(error as Error).message}`);
        }
    }
}