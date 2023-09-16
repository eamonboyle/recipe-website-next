import { Category } from "@/types/category";
import { NextRequest } from "next/server";
import { CategoryController } from "../../controllers";

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {

    let category: Category | null = await CategoryController.getOne(params.slug).then((category) => {
        return category;
    }).catch((err) => {
        console.error(`Error reading file: ${err}`);
        return null;
    })

    return new Response(JSON.stringify(category), { status: 200 })
}