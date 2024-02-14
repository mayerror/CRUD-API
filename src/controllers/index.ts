import { IncomingMessage, ServerResponse } from "http";
import { v4 as uuidv4 } from "uuid";
import getBodyAsync from "../utils/getbody";
import { users } from "../";
import isUUID from "../utils/isUUID";

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
        user.id = uuidv4();
        users.addUser(user);
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify(user));
      } else {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end("ERROR: Request body doesn't contain required fields");
      }
    } catch (error) {
      console.log("ERROR: Error adding user");
    }
  }

  public getUser(req: IncomingMessage, res: ServerResponse, id: string) {
    if (isUUID(id)) {
      const userList: User[] = users.getUsers();
      const user = userList.filter((userItem) => userItem.id === id)[0];
      if (user?.id) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(user));
      } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end("ERROR: User with this ID not found");
      }
    } else {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end("ERROR: UserId is invalid");
    }
  }

  public deleteUser(req: IncomingMessage, res: ServerResponse, id: string) {
    if (isUUID(id)) {
      const userList: User[] = users.getUsers();
      const user = userList.filter((userItem) => userItem.id === id)[0];
      if (user?.id) {
        users.deleteUser(id);
        res.writeHead(204, { "Content-Type": "application/json" });
        res.end("User has been deleted");
      } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end("ERROR: User with this ID not found");
      }
    } else {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end("ERROR: UserId is invalid");
    }
  }
}

const userController = new UserController();

export default userController;
