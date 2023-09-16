import { Category } from "@/types/category";
import dataReader from "../utils/dataReader";
import { NextRequest } from "next/server";

class CategoryController {
    public static async getAll(request: NextRequest): Promise<Category[] | null> {
        let categories = dataReader<Category[]>('category-list.json', '../../../../app/api/data/categories');
        return categories;
    }

    public static async getOne(slug: string): Promise<Category | null> {
        let categories = dataReader<Category[]>('category-list.json', '../../../../../app/api/data/categories');

        if (categories === null) {
            return null;
        }

        let category = categories.find((category) => {
            return category.id === slug;
        });

        if (category === undefined) {
            return null;
        }

        return category;
    }
}

export default CategoryController;