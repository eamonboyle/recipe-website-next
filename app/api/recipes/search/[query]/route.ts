import { getRecipesBySearchQuery } from "@/app/controllers/recipe.controller";
import { getDatabaseClient } from "@/services/database.service";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest, { params, query }: { params: { query: string }, query: { limit?: string, offset?: string } }) {
    const client = await getDatabaseClient();

    try {
        if (request.method === 'GET') {
            const tempLimit = request.nextUrl.searchParams.get('limit');
            let limit = undefined;
            const tempOffset = request.nextUrl.searchParams.get('offset');
            let offset = undefined;

            if (tempLimit) {
                limit = parseInt(tempLimit, 10);
            }

            if (tempOffset) {
                offset = parseInt(tempOffset, 10);
            }

            const recipe = await getRecipesBySearchQuery(client, params.query, limit, offset);
            return new Response(JSON.stringify(recipe), { status: 200 })
        }
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 })
    } finally {
        client.release();
    }
}