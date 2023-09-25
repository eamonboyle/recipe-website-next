import { getAllRecipes } from "@/app/controllers/recipe.controller";
import { getDatabaseClient } from "@/services/database.service";
import { sql } from "@vercel/postgres";

export async function GET(request: Request) {

    const { rows } = await sql`SELECT * FROM recipes WHERE active = true ORDER BY id ASC LIMIT 100`

    return new Response(JSON.stringify(rows), { status: 200 })

    const client = await getDatabaseClient();

    try {
        if (request.method === 'GET') {
            const recipes = await getAllRecipes(client, 100);
            return new Response(JSON.stringify(recipes), { status: 200 })
        }
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 })
    } finally {
        client.release();
    }
}