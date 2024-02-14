import {IncomingMessage, ServerResponse} from 'http';
import userController from "../controllers/index.js";


const routes = {
  "/": {
    // GET: (_req: IncomingMessage, res: ServerResponse) => {
    //   response(res, { data: { message: "running nodejs api" } });
    // },
  },
  "/users": {
    GET: userController.getUsers,
    // POST: (req: IncomingMessage, res: ServerResponse) => {
    //   validateUserData(req, res, userController.createUser);
    // },
  },
  // "/users/:id": {
  //   GET: userController.getUserById,
  //   DELETE: userController.deleteUserById,
  //   PUT: (req: IncomingMessage, res: ServerResponse) => {
  //     validateUserData(req, res, userController.updateUser);
  //   },
  // },
  "notFound": (_req: IncomingMessage, res: ServerResponse) => {
    // response(res, {
    //   status: 404,
    //   data: { message: "requested resource not found!" },
    // });
  },
};

export default routes;