import { createServer, IncomingMessage, ServerResponse } from "node:http";
import { parse } from "node:url";
import loggerMiddleware from "./middleware";
import routes from "./routes/index.js";
import Users from "./services/users";

export const users = new Users();

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  const parsedUrl = parse(req.url!, true);
  const pathname = parsedUrl.pathname;
  const method = req.method ? req.method.toUpperCase() : "GET";

  console.log(method);

  if (pathname === "/api/users" && method == "GET") {
    routes["/users"].GET(req, res);
  }
  if (pathname === "/api/users" && method == "POST") {
    routes["/users"].POST(req, res);
  }
});

const port = process.env.PORT || 4000;
server.on("request", loggerMiddleware);
server.listen(port, () => console.log(`Server is running on port ${port}`));
