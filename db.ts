import { postgres } from "bun";

// bun autometically loads environment variables from .env files 
// and stores them in process.env object
console.log(process.env.postgres_URl);

// use of tag template literal to execute a query
// postgres_URl is the environment variable that contains the connection string
let data = await postgres`select * from users`;

console.log(data);

let response = await fetch("http://localhost:3333/");

console.log(response);
console.log(await response.blob());

// console.log(new Blob());
