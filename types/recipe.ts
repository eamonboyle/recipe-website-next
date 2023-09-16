export interface Recipe {
    id: string;
    name?: string;
    description?: string;
    ingredients?: Ingredient[];
    steps?: string[];
    imageUrl?: string;
    originalUrl?: string;
    tags?: string[];
    link?: string;
}

export interface Ingredient {
    name: string;
    quantity: number;
    unit: string;
}