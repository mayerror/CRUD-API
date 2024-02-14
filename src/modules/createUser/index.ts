// import { IncomingMessage, ServerResponse } from 'node:http';

// const createUser = async (req: IncomingMessage & {body: JSON}, res: ServerResponse) => {
//   try {
//     let body = req.body;

//     const users = await userSevice.getUsers();
//     const foundUser = users.find((user) => user.name === body.name);

//     if (foundUser) {
//       return response(res, {
//         data: { message: `'${body.name}' already exists!` },
//         status: 409,
//       });
//     }

//     body.id = users.length + 1;
//     users.push(body);

//     await writeDataAsync(users);

//     response(res, { data: users, status: 201 });
//   } catch (error) {
//     response(res, { status: 400, data: { message: error.message } });
//   }
// };