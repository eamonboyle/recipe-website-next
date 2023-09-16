export interface Recipe {
    id: string;
    name?: string;
    description?: string;
    ingredients?: string[];
    steps?: string[];
    imageUrl?: string;
    originalUrl?: string;
    tags?: string[];
    link?: string;
}