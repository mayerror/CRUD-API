import { IncomingMessage, ServerResponse } from "http";
import userController from "../controllers";

const routes = {
  "/users": {
    GET: userController.getUsers,
    POST: userController.createUser
  },
  "/users/id": {
    GET: userController.getUser,
    DELETE: userController.deleteUser,
    PUT: userController.updateUser
  },
  notFound: userController.notFound
};

export default routes;
