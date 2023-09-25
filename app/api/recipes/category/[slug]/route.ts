import { getAllRecipesByCategory } from "@/app/controllers/recipe.controller";
import { getDatabaseClient } from "@/services/database.service";
import { sql } from "@vercel/postgres";

export async function GET(request: Request, { params }: { params: { slug: string } }) {

    const { rows } = await sql`SELECT
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
        c.slug = ${params.slug}
    ORDER BY r.recipe_name 
    LIMIT 100;`;

    return new Response(JSON.stringify(rows), { status: 200 })


    const client = await getDatabaseClient();

    try {
        if (request.method === 'GET') {
            const recipes = await getAllRecipesByCategory(client, params.slug, 100);
            return new Response(JSON.stringify(recipes), { status: 200 })
        }
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 })
    } finally {
        client.release();
    }
}