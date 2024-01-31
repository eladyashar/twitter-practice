import User from '../models/User';
import InMemoryDB from '../utils/InMemoryDB';

export class UserDataAccess {
    private db = InMemoryDB.getInstance();

    addUser(user: User): void {
        this.db.addUser(user);
    }

    getUser(userId: number): User {
        const user = this.db.getUser(userId);
        if (!user) {
            throw new Error(`User with ID ${userId} not found`);
        }
        return user;
    }

    updateUser(userId: number, updateData: Partial<User>): void {
        const existingUser = this.db.getUser(userId);
        if (!existingUser) {
            throw new Error(`User with ID ${userId} not found`);
        }
        this.db.updateUser(userId, updateData);
    }

    deleteUser(userId: number): void {
        const existingUser = this.db.getUser(userId);
        if (!existingUser) {
            throw new Error(`User with ID ${userId} not found`);
        }
        this.db.deleteUser(userId);
    }
}
