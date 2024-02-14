import { IncomingMessage, ServerResponse } from 'node:http';

const loggerMiddleware = (req: IncomingMessage, res?: ServerResponse) => {
  console.log(`${req.method} ${req.url}`);
};

export default loggerMiddleware;