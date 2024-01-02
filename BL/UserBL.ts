import { UserDataAccess } from '../DAL/UserDataAccess';
import User from '../models/User';

export class UserBL {
    private userDataAccess = new UserDataAccess();

    addUser(user: User) {
        // Additional business logic or validation
        this.userDataAccess.addUser(user);
    }

    // Similarly, implement methods for getUser updateUser and deleteUser
}
