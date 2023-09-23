import { getRandomRecipe } from "@/controllers/recipe.controller";
import { getDatabaseClient } from "@/services/database.service";

export async function GET(request: Request) {
    const client = await getDatabaseClient();

    try {
        if (request.method === 'GET') {
            const recipe = await getRandomRecipe(client);
            return new Response(JSON.stringify(recipe), { status: 200 })
        }
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 })
    } finally {
        client.release();
    }
}