export interface Category {
    id: string;
    name?: string;
    description?: string;
    subcategories?: Category[];
    parent?: Category;
    imageUrl?: string;
    active?: boolean;
}