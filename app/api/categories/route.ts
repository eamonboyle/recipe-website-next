import { Category } from "@/types/category";
import { CategoryController } from "../controllers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    let categories: Category[] | null = await CategoryController.getAll(request).then((categories) => {
        return categories;
    }).catch((err) => {
        console.error(`Error reading file: ${err}`);
        return null;
    })

    return new Response(JSON.stringify(categories), { status: 200 })
}