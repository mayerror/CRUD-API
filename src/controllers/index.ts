import {IncomingMessage, ServerResponse} from 'http';
import users from '../db';

class UserController {
    public getUsers(req: IncomingMessage, res: ServerResponse) {
        try {
            const users = this.fetchUsers();

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(users));
        } catch (error) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Internal server error' }));
        }
    }

    private fetchUsers(): User[] {
        return users;
    }
}

const userController = new UserController();

export default userController;