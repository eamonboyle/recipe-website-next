import { PoolClient } from "pg";

export async function getAllRecipes(client: PoolClient, limit: number | undefined) {
    const result = await client.query('SELECT id, recipe_name, description, image_url FROM recipes WHERE active=true ORDER BY id ASC LIMIT $1', [limit]);
    return result.rows;
}

export async function getRandomRecipe(client: PoolClient) {
    const result = await client.query('SELECT id, recipe_name, description, image_url FROM recipes WHERE active=true ORDER BY RANDOM() LIMIT 1');
    return result.rows[0];
}

export async function getAllRecipesByCategory(client: PoolClient, category_name: string, limit: number | undefined) {
    const result = await client.query(`SELECT
        r.id,
        r.recipe_name,
        r.image_url,
        r.description
    FROM
        recipes r
    JOIN
        recipes_to_categories rtc ON r.id = rtc.recipe_id
    JOIN
        recipe_categories c ON rtc.category_id = c.id
    WHERE
        c.category = $1
    ORDER BY r.recipe_name 
    LIMIT $2;
    `, [category_name, limit]);
    return result.rows;
}

export async function getLatestRecipes(client: PoolClient, limit: number | undefined) {
    const result = await client.query('SELECT id, recipe_name, description, image_url FROM recipes WHERE active=true ORDER BY id DESC LIMIT $1', [limit]);
    return result.rows;
}

export async function getRecipeById(client: PoolClient, id: number) {
    const result = await client.query('SELECT id, recipe_name, description, image_url FROM recipes WHERE active=true AND id=$1', [id]);
    return result.rows[0];
}

export async function getRecipeIngredients(client: PoolClient, id: number) {
    const result = await client.query('SELECT i.id, i.ingredient_name, i.image_url FROM ingredients i JOIN recipes_to_ingredients rti ON i.id = rti.ingredient_id WHERE rti.recipe_id=$1', [id]);
    return result.rows;
}