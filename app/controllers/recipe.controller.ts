import { PoolClient } from "pg";

export async function getAllRecipes(client: PoolClient, limit: number | undefined) {
    const result = await client.query('SELECT id, recipe_name, slug, description, image_url FROM recipes WHERE active=true ORDER BY id ASC LIMIT $1', [limit]);
    return result.rows;
}

export async function getRandomRecipe(client: PoolClient, limit: number | undefined) {
    const result = await client.query('SELECT id, recipe_name, slug, description, image_url FROM recipes WHERE active=true ORDER BY RANDOM() LIMIT $1', [limit]);

    if (limit === 1) {
        return result.rows[0];
    }

    return result.rows;
}

export async function getRecipeBySlug(client: PoolClient, slug: string) {
    const result = await client.query('SELECT * FROM recipes WHERE active=true AND slug=$1', [slug]);
    return result.rows[0];
}

export async function getFeaturedRecipes(client: PoolClient, limit: number | undefined) {
    const result = await client.query('SELECT id, recipe_name, slug, description, image_url FROM recipes WHERE active=true AND featured=true ORDER BY id ASC LIMIT $1', [limit]);
    return result.rows;
}

export async function getAllRecipesByCategory(client: PoolClient, category_slug: string, limit: number | undefined) {
    const result = await client.query(`SELECT
        r.id,
        r.recipe_name,
        r.slug,
        r.image_url,
        r.description
    FROM
        recipes r
    JOIN
        recipes_to_categories rtc ON r.id = rtc.recipe_id
    JOIN
        recipe_categories c ON rtc.category_id = c.id
    WHERE
        c.slug = $1
    ORDER BY r.recipe_name 
    LIMIT $2;
    `, [category_slug, limit]);
    return result.rows;
}

export async function getLatestRecipes(client: PoolClient, limit: number | undefined) {
    const result = await client.query('SELECT id, recipe_name, slug, description, image_url FROM recipes WHERE active=true ORDER BY id DESC LIMIT $1', [limit]);
    return result.rows;
}

export async function getRecipeById(client: PoolClient, id: number) {
    const result = await client.query('SELECT id, recipe_name, slug, description, image_url FROM recipes WHERE active=true AND id=$1', [id]);
    return result.rows[0];
}

export async function getRecipeIngredients(client: PoolClient, id: number) {
    const result = await client.query('SELECT i.id, i.ingredient_name, i.image_url FROM ingredients i JOIN recipes_to_ingredients rti ON i.id = rti.ingredient_id WHERE rti.recipe_id=$1', [id]);
    return result.rows;
}

export async function getRecipesBySearchQuery(client: PoolClient, search_query: string, limit?: number, offset?: number) {
    let query = `
      SELECT
        r.id,
        r.recipe_name,
        r.slug,
        r.image_url,
        r.description
      FROM
        recipes r
      WHERE
        r.active = true
      AND
        r.recipe_name LIKE $1
      ORDER BY r.recipe_name 
    `;

    const params = [`%${search_query}%`];

    if (limit) {
        query += `LIMIT $${params.length + 1} `;
        params.push(limit.toString());
    }

    if (offset) {
        query += `OFFSET $${params.length + 1}`;
        params.push(offset.toString());
    }

    const result = await client.query(query, params);

    return result.rows;
}