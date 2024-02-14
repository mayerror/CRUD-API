import { IncomingMessage, ServerResponse } from "http";
import getBodyAsync from "../utils/getbody";
import { users } from "../";

class UserController {
  public getUsers(req: IncomingMessage, res: ServerResponse) {
    const userList: User[] = users.getUsers();

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(userList));
  }

  public async createUser(req: IncomingMessage, res: ServerResponse) {
    try {
      const user = await getBodyAsync(req);
      if (user.username && user.age && user.hobbies) {
        users.addUser(user);
      }

      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify(user));
    } catch (error) {
      console.log("Error adding user");
    }
  }
}

const userController = new UserController();

export default userController;
