import { getAllRecipesByCategory } from "@/controllers/recipe.controller";
import { getDatabaseClient } from "@/services/database.service";
import { unslugify } from "@/utils/slugify";

export async function GET(request: Request, { params }: { params: { slug: string } }) {
    const client = await getDatabaseClient();

    const category_name = unslugify(params.slug);

    try {
        if (request.method === 'GET') {
            const recipes = await getAllRecipesByCategory(client, category_name, 100);
            return new Response(JSON.stringify(recipes), { status: 200 })
        }
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 })
    } finally {
        client.release();
    }
}