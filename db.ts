import { postgres } from "bun";
import htmlFile from "./index.html";

// bun autometically loads environment variables from .env files
// and stores them in process.env object
console.log(process.env.postgres_URl);

// use of tag template literal to execute a query
// postgres_URl is the environment variable that contains the connection string
let data = await postgres`select * from users`;

console.log(data);

// let response = await fetch("http://localhost:3333/");

// console.log(response);
// console.log(await response.blob());

// console.log(new Blob());
console.log(htmlFile);

import { serve } from "bun";

serve({
    port: 3333,
    routes: {
        "/": htmlFile,
        "/api": () => new Response("Hello world", { status: 200 }),
        "/api/users": async () => {
            // return the data as JSON
            return new Response(JSON.stringify(data), {
                headers: {
                    "Content-Type": "application/json"
                }
            }); // return Response.json(data);
        }
    }
});

// serve({
//   port: 3333,
//   static: {
//     "/": htmlFile,
//   },
//   async fetch(req) {
//     return new Response("Hello world", { status: 200 });
//   },
// });
