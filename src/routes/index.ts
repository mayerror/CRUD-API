import { IncomingMessage, ServerResponse } from "http";
import userController from "../controllers";

const routes = {
  "/users": {
    GET: userController.getUsers,
    POST: userController.createUser
  },
  "/users/id": {
    GET: userController.getUser,
    DELETE: userController.deleteUser
  },
  notFound: (_req: IncomingMessage, res: ServerResponse) => {
    // response(res, {
    //   status: 404,
    //   data: { message: "requested resource not found!" },
    // });
  }
};

export default routes;
