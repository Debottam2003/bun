// import express from 'express';

// const app = express();
// const PORT = 5000;

// app.get('/', (req, res) => {
//     res.send('Hello, world!');
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

// console.log(Bun);

// Bun.serve({
//     port: 5000,
//     fetch(request) {
//         let url = new URL(request.url)
//         if(url.pathname === '/') {
//             return new Response("Hello World");
//         }
//         return new Response("Not Found", { status: 404 });
//     }
// });
// console.log(`Server is running on http://localhost: 5000`);

// Call the server funvtion and it takes a object that will conatain 'port' no and a 'routes' boject which will have key - value
// pairs here 'key' is the 'path' and 'value' are 'handler function'
import pg_obj from "./db_connect";
import { serve } from "bun";
try {
  await pg_obj.query("select * from users limit 1");
  console.log("DB connected.");
  let server = serve({
    port: 3333,
    routes: {
      "/": {
        async GET(req) {
          // let { rows } = await pg_obj.query("select * from users");
          // return Response.json(rows);
          // return Response.json({ username: "debottam", age: 22 });
          return new Response("Hello world");
        },
        POST: async (req) => {
          let body = await req.json(); // <-- equivalent of express.json()
          console.log(body);
          return Response.json({ greet: "Hello world" });
        },
      },
      "/home/:id": {
        GET: async function (req) {
          console.log(req.params.id, req.url, req.method, req.headers, req);
          return new Response("This is home");
        },
        POST: async function (req) {
          let body = await req.json(); // <-- equivalent of express.json()
          console.log(body);
          return Response.json({ greet: "Hello home" });
        }
      },
    },
  });
  // console.log(server);
  console.log(`Server is running on http://localhost: ${server.port}`);
} catch (err) {
  console.log(err);
}
