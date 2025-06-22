// import { postgres } from "bun";
import htmlFile from "./index.html";
import pkg from 'pg';
const { Client } = pkg;

const client = new Client({
  connectionString:  process.env.postgres_URl || "postgres",
  // ssl: true, // Required for Supabase & many cloud DBs
});

await client.connect();

const res = await client.query('SELECT * FROM users');
console.log(res.rows);

await client.end();

// bun autometically loads environment variables from .env files
// and stores them in process.env object
// console.log(process.env.postgres_URl);

// use of tag template literal to execute a query
// postgres_URl is the environment variable that contains the connection string
// let data = await postgres`select * from users`;

// console.log(data);

// let response = await fetch("http://localhost:3333/");

// console.log(response);
// console.log(await response.blob());

// console.log(new Blob());
console.log(htmlFile);

import { serve } from "bun";

console.log(process.env.PORT || 3333);

serve({
    port: process.env.PORT,
    routes: {
        "/": htmlFile,
        "/api/:id": async () => {
            // return the data as JSON
            return new Response(JSON.stringify(res.rows), {
                headers: {
                    "Content-Type": "application/json"
                }
            }); // return Response.json(data);
        },
        "/api": async () => new Response("Hello world", { status: 200 }),
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
