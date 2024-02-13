import { createServer } from 'node:http';
import { parse } from 'node:url';
const users = [
    { id: '1', name: 'Sergey', age: 35, hobbies: ['test hobby', 'test hobby 2'] },
];
const server = createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const pathname = parsedUrl.pathname;
    if (pathname === '/api/users') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users));
    }
    else if (pathname?.startsWith('/api/users/')) {
        const userId = pathname.split('/')[3];
        const user = users.find(u => u.id === userId);
        if (user) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(user));
        }
        else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'User not found' }));
        }
    }
    else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Route not found' }));
    }
});
const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Server is running on port ${port}`));
