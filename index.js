// fake-server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = 5000; // You can change the port number if needed

server.use(middlewares);
server.use(router);

server.listen(port, () => {
    console.log(`JSON Server is running on http://localhost:${port}`);
});
