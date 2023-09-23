import { Pool } from 'pg';

const pool = new Pool({
    user: process.env.PUBLIC_POSTGRES_USER,
    host: process.env.PUBLIC_POSTGRES_HOST,
    database: process.env.PUBLIC_POSTGRES_DATABASE,
    password: process.env.PUBLIC_POSTGRES_PASSWORD,
    port: 5432,
});

export const getDatabaseClient = async () => {
    const client = await pool.connect();
    return client;
}