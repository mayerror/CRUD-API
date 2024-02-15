import { createServer, IncomingMessage, ServerResponse } from "node:http";
import { parse } from "node:url";
import loggerMiddleware from "./middleware";
import routes from "./routes";
import Users from "./services/users";
import "dotenv/config";

export const users = new Users();

export const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  try {
    const parsedUrl = parse(req.url!, true);
    const pathname = parsedUrl.pathname;
    const method = req.method ? req.method.toUpperCase() : "GET";

    if (pathname === "/api/users") {
      if (method === "GET" || method === "POST") {
        routes["/users"][method](req, res);
      }
    } else if (pathname?.includes("/api/users/")) {
      const uuid = pathname.split("/").slice(-1)[0];
      if (uuid?.length) {
        if (method === "GET" || method === "DELETE" || method === "PUT") {
          routes["/users/id"][method](req, res, uuid);
        }
      }
    } else {
      console.log("not f");
      routes.notFound(req, res);
    }
  } catch (error) {
    console.error("SERVER ERROR:", error);
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("ERROR: Internal Server Error");
  }
});

const port = process.env.PORT || 4000;
server.on("request", loggerMiddleware);
server.listen(port, () => console.log(`Server is running on port: ${port}`));
