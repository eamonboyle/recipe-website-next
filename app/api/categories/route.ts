import { getAllCategories } from "@/app/controllers/category.controller";
import { getDatabaseClient } from "@/services/database.service";
import { sql } from "@vercel/postgres";

export async function GET(request: Request) {

    const { rows } = await sql`SELECT
        c.id,
        c.category AS name,
        c.slug,
        r.image_url
    FROM
        recipe_categories c
    INNER JOIN (
        SELECT
            rtc.category_id,
            MIN(r.image_url) AS image_url
        FROM
            recipes_to_categories rtc
        JOIN
            recipes r ON rtc.recipe_id = r.id
        GROUP BY
            rtc.category_id
    ) AS r ON c.id = r.category_id
    ORDER BY c.category
    LIMIT ${100}`;

    return new Response(JSON.stringify(rows), { status: 200 })

    // try {
    //     const pool = await connectToDatabase();
    //     const result = await pool.query(`SELECT
    //         c.id,
    //         c.category AS name,
    //         c.slug,
    //         r.image_url
    //     FROM
    //         recipe_categories c
    //     INNER JOIN (
    //         SELECT
    //             rtc.category_id,
    //             MIN(CONVERT(VARCHAR(MAX), r.image_url)) AS image_url
    //         FROM
    //             recipes_to_categories rtc
    //         JOIN
    //             recipes r ON rtc.recipe_id = r.id
    //         GROUP BY
    //             rtc.category_id
    //     ) AS r ON c.id = r.category_id
    //     ORDER BY
    //         c.category;`);
    //     return new Response(JSON.stringify(result.recordset), { status: 200 })
    // }
    // catch (error) {
    //     return new Response(JSON.stringify(error), { status: 500 })
    // }


    // return;

    const client = await getDatabaseClient();

    try {
        if (request.method === 'GET') {
            const recipes = await getAllCategories(client, 100);
            return new Response(JSON.stringify(recipes), { status: 200 })
        }
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 })
    } finally {
        client.release();
    }
}