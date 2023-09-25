import { getFeaturedRecipes } from "@/app/controllers/recipe.controller";
import { getDatabaseClient } from "@/services/database.service";
import { sql } from "@vercel/postgres";

export async function GET(request: Request) {

    const { rows } = await sql`SELECT id, recipe_name, slug, description, image_url FROM recipes WHERE active=true AND featured=true ORDER BY id ASC LIMIT 3`

    return new Response(JSON.stringify(rows), { status: 200 })

    const client = await getDatabaseClient();

    try {
        if (request.method === 'GET') {
            const recipe = await getFeaturedRecipes(client, 3);
            return new Response(JSON.stringify(recipe), { status: 200 })
        }
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 })
    } finally {
        client.release();
    }
}