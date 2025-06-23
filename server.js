// import express from 'express';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import pkg from 'pg';

// const { Client } = pkg;

// let client = new Client({
//     connectionString: process.env.postgres_URL || 'postgres://postgres:password@localhost:5432/postgres',
// });

// await client.connect(); // Connect to the database
// const result = await client.query('SELECT * FROM users'); // Query the database
// console.log(result.rows);
// await client.end();

// ⚠️ Analogy
// Imagine:
//     You open a phone line to talk to a friend (→ client.connect()).

//     You talk once (→ query()).

//     Then you destroy the phone forever (→ client.end()).

// Now next time you try to talk to them again using the same destroyed phone... it’s not going to work.

// ⚠️ But Be Careful…

// You're using a single Client to serve all requests concurrently, and that’s risky for high concurrency. Why?
// 🔥 Problem at High Load:

//     pg.Client is not thread-safe.

//     If 100+ requests hit at once (as in autocannon -c 100), they all share one connection.

//     This can lead to:

//         Queueing

//         Errors like Client is already running a query

//         Data corruption or race conditions

// 💡 It's like:

// Imagine 100 people trying to talk on one phone at the same time — chaos!

// const app = express();
// const PORT = 3333;

// // __dirname workaround for ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// app.get('/home', async (req, res) => {
//     try {
//         // await client.connect(); // Connect to the database
//         const result = await client.query('SELECT * FROM users'); // Query the database
//         // console.log(result.rows);
//         res.status(200).send(result.rows); // Send the result as a response
//     } catch (error) {
//         res.status(500).send({ error: 'Internal Server Error' });   
//     } finally {
//         // await client.end(); // Close the database connection
//     }
// });

// app.get('/home/:id', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

// app.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}`);
// });









import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import pkg from 'pg';

const { Pool } = pkg;

let pool = new Pool({
    connectionString: process.env.postgres_URL || 'postgres://postgres:password@localhost:5432/postgres',
    max: 100
});

console.log(await pool.query('SELECT * FROM users'));

const app = express();
const PORT = 3333;

// __dirname workaround for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/home', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users'); // Query the database
        // console.log(result.rows);
        res.send(result.rows); // Send the result as a response
        // res.send("hello world");
    } catch (error) {
        res.status(500).send({ error: 'Internal Server Error' });   
    }
});

app.get('/home/:id', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});