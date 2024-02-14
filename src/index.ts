import { createServer, IncomingMessage, ServerResponse } from 'node:http';
import { parse } from 'node:url';
import loggerMiddleware from './middleware';
import routes from './routes/index.js';
import userController from './controllers';

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  const parsedUrl = parse(req.url!, true);
  const pathname = parsedUrl.pathname;
  if (pathname === '/api/users') {
    userController.getUsers(req, res);
    routes['/users'].GET(req, res);
  } 
  // else if (pathname?.startsWith('/api/users/')) {
  //   const userId = pathname.split('/')[3];
  //   const user = users.find(u => u.id === userId);

  //   if (user) {
  //     res.writeHead(200, { 'Content-Type': 'application/json' });
  //     res.end(JSON.stringify(user));
  //   } else {
  //     res.writeHead(404, { 'Content-Type': 'application/json' });
  //     res.end(JSON.stringify({ message: 'User not found' }));
  //   }
  // } else {
  //   res.writeHead(404, { 'Content-Type': 'application/json' });
  //   res.end(JSON.stringify({ message: 'Route not found' }));
  // }
});

const port = process.env.PORT || 4000;
server.on("request", loggerMiddleware);
server.listen(port, () => console.log(`Server is running on port ${port}`));
