import { getRecipeBySlug } from "@/app/controllers/recipe.controller";
import { getDatabaseClient } from "@/services/database.service";
import { sql } from "@vercel/postgres";

export async function GET(request: Request, { params }: { params: { slug: string } }) {

    const { rows } = await sql`SELECT * FROM recipes WHERE active=true AND slug=${params.slug}`;

    return new Response(JSON.stringify(rows[0]), { status: 200 })


    const client = await getDatabaseClient();

    try {
        if (request.method === 'GET') {
            const recipe = await getRecipeBySlug(client, params.slug);
            return new Response(JSON.stringify(recipe), { status: 200 })
        }
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 })
    } finally {
        client.release();
    }
}