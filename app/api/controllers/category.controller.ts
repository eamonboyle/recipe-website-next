import { Category } from "@/types/category";
import dataReader from "../utils/dataReader";

class CategoryController {
    public static async getAll(req: Request): Promise<Category[] | null> {
        let categories = dataReader<Category[]>('category-list.json', '../../../../app/api/data/categories');
        return categories;
    }
}

export default CategoryController;