import pkg from 'pg';
let { Pool } = pkg;
let pg_obj = new Pool({
    host: "localhost",
    user: "postgres",
    database: "student",
    password: "okudera2003",
    port: 3000
});
export default pg_obj