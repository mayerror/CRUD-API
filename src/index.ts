import { createServer, IncomingMessage, ServerResponse } from "node:http";
import { parse } from "node:url";
import loggerMiddleware from "./middleware";
import routes from "./routes/index.js";
import Users from "./services/users";
import isUUID from "./utils/isUUID";

export const users = new Users();

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  const parsedUrl = parse(req.url!, true);
  const pathname = parsedUrl.pathname;
  const method = req.method ? req.method.toUpperCase() : "GET";

  if (pathname === "/api/users") {
    console.log(`method = ${method}`);
    if (method === "GET" || method === "POST") {
      routes["/users"][method](req, res);
    }
  } else if (pathname?.includes("/api/users")) {
    const uuid = pathname.split("/").slice(-1)[0];
    if (uuid?.length) {
      if (method === "GET") {
        routes["/users/id"][method](req, res, uuid);
      }
    }
  } else {
  }
});

const port = process.env.PORT || 4000;
server.on("request", loggerMiddleware);
server.listen(port, () => console.log(`Server is running on port ${port}`));
