import { getAllRecipes } from "@/app/controllers/recipe.controller";
import { getDatabaseClient } from "@/services/database.service";

export async function GET(request: Request) {
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