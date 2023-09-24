import { PoolClient } from "pg";

export async function getAllCategories(client: PoolClient, limit: number | undefined) {
    const result = await client.query(`SELECT
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
    LIMIT $1`, [limit]);
    return result.rows;
}

export async function getPopularCategories(client: PoolClient, limit: number | undefined) {
    const result = await client.query(`WITH category_recipes AS (
        SELECT c.id, c.category, c.slug, r.image_url,
               ROW_NUMBER() OVER (PARTITION BY c.category ORDER BY r.id) AS row_number
        FROM recipe_categories c
        LEFT JOIN recipes_to_categories rtc ON c.id = rtc.category_id
        LEFT JOIN recipes r ON rtc.recipe_id = r.id
    )
    SELECT 
        id, 
        category AS name, 
        slug,
        COUNT(image_url) AS recipe_count, 
        MAX(image_url) AS image_url
    FROM category_recipes
    GROUP BY id, category, slug
    ORDER BY recipe_count DESC
    LIMIT $1;`, [limit]);

    return result.rows;
}

export async function getCategoryById(client: PoolClient, id: number) {
    const result = await client.query('SELECT id, category AS name, slug FROM recipe_categories WHERE id=$1', [id]);
    return result.rows[0];
}

export async function getCategoryBySlug(client: PoolClient, slug: string) {
    const result = await client.query('SELECT id, category AS name, slug FROM recipe_categories WHERE slug=$1', [slug]);
    return result.rows[0];
}