import { IncomingMessage, ServerResponse } from "node:http";

const loggerMiddleware = (req: IncomingMessage, _res?: ServerResponse) => {
  console.log(`${req.method} ${req.url}`);
};

export default loggerMiddleware;
