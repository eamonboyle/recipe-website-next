import { Pool } from 'pg';
import sql from 'mssql'

const pool = new Pool({

    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DATABASE,
    password: process.env.POSTGRES_PASSWORD,
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    },
});

export const getDatabaseClient = async () => {
    const client = await pool.connect();
    return client;
}

// const dbConfig = {
//     server: String(process.env.PUBLIC_MSSQL_SERVER), // Replace with your SQL Server address
//     database: process.env.PUBLIC_MSSQL_DATABASE, // Replace with your database name
//     user: process.env.PUBLIC_MSSQL_USER, // Replace with your username
//     password: process.env.PUBLIC_MSSQL_PASSWORD, // Replace with your password
//     options: {
//         encrypt: true, // For encrypted connection
//     },
// };

// export async function connectToDatabase() {
//     try {
//         const pool = await sql.connect(dbConfig);
//         return pool;
//     } catch (error) {
//         console.error('Database connection error', error);
//         throw error;
//     }
// }