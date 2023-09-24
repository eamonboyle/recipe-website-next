export type Recipe_Small = {
    id: number
    recipe_name: string
    slug: string
    description: string
    image_url: string
}

export type Recipe_Full = {
    id: number;
    recipe_name: string;
    description: string;
    ingredients: string[]; // You can define a more specific type for ingredients
    instructions: string;
    total_time: number;
    servings: string;
    author: string;
    host: string;
    recipe_language: string;
    nutrition_data: JSON;
    parsed_nutrition_data?: NutritionData[];
    recipe_url: string;
    image_url: string;
    scraped: boolean;
    active: boolean;
    categorized: boolean;
    slug: string;
    featured: boolean;
    created_at: string;
    updated_at: string;
}

export type NutritionData = {
    name: string;
    value: string;
}