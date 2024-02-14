import { IncomingMessage } from "http";

const getBodyAsync = (req: IncomingMessage) => {
  return new Promise<User>((resolve, reject) => {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      try {
        const user: User = body ? JSON.parse(body) : {};

        resolve(user);
      } catch (error) {
        reject(error);
      }
    });
  });
};

export default getBodyAsync;
