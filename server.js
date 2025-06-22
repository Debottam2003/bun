import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import pkg from 'pg';

const { Client } = pkg;

let client = new Client({
    connectionString: process.env.postgres_URL || 'postgres://postgres:password@localhost:5432/postgres'
});

const app = express();
const PORT = 3333;

// __dirname workaround for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/home', async (req, res) => {
    try {
        await client.connect(); // Connect to the database
        const result = await client.query('SELECT * FROM users'); // Query the database
        // console.log(result.rows);
        res.send(result.rows); // Send the result as a response
    } catch (error) {
        res.status(500).send({ error: 'Internal Server Error' });   
    } finally {
        await client.end(); // Close the database connection
    }
});

app.get('/home/:id', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});