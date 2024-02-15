import { server } from "..";
import { afterEach, beforeEach } from "node:test";
import request from "supertest";

const port = process.env.PORT || "4000";
const host = `localhost:${port}`;

beforeEach(() => {
  server.listen(port, () => console.log(`Server is running on port: ${port}`));
});

afterEach(() => {
  server.closeAllConnections();
  server.close();
});

describe("#1", () => {
  test("Should get empty array with GET api/users request", async () => {
    const response = await request(host).get("/api/users");

    expect(response.status).toBe(200);
    expect(JSON.parse(response.text)).toStrictEqual([]);
  });
});

describe("#2", () => {
  test("Should add user with POST api/users/{id} request", async () => {
    const payload: User = { username: "Sergey", age: 35, hobbies: ["snowboard"] };
    const response = await request(host)
      .post("/api/users")
      .send(payload)
      .set("Content-Type", "application/json");
    console.log(response.status);
    expect(response.status).toBe(201);
    expect(JSON.parse(response.text).age).toStrictEqual(payload.age);
    expect(JSON.parse(response.text).username).toStrictEqual(payload.username);
  });
});

describe("#3", () => {
  test("Should update user with POST api/users/{id} request", async () => {
    const payload: User = { username: "Sergey", age: 20, hobbies: ["skiing"] };
    const responseGet = await request(host).get("/api/users");
    const users = JSON.parse(responseGet.text);
    const id = users[0].id;

    const responsePut = await request(host)
      .put(`/api/users/${id}`)
      .send(payload)
      .set("Content-Type", "application/json");

    expect(responsePut.status).toBe(200);
    expect(JSON.parse(responsePut.text).age).toStrictEqual(payload.age);
    expect(JSON.parse(responsePut.text).hobbies[0]).toStrictEqual(payload.hobbies[0]);
    server.close();
  });
});
