import { PoolClient } from "pg";

export async function getAllCategories(client: PoolClient, limit: number | undefined) {
    const result = await client.query(`SELECT
        c.id,
        c.category AS name,
        r.image_url
    FROM
        recipe_categories c
    LEFT JOIN (
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
    LIMIT $1`, [limit]);
    return result.rows;
}