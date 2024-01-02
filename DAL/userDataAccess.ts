import User from '../models/User';
import InMemoryDB from '../utils/InMemoryDB';

export class UserDataAccess {
    private db = InMemoryDB.getInstance();

    addUser(user: User) {
        this.db.addUser(user);
    }

    // Similarly, implement methods for updateUser and deleteUser
}
