// import { Recipe } from "@/types/recipe";

interface Ingredient {
    name: string;
    quantity: number;
    unit: string;
}

interface Recipe {
    id: string;
    name?: string;
    description?: string;
    ingredients?: Ingredient[]
    steps?: string[];
    imageUrl?: string;
    originalUrl?: string;
    tags?: string[];
    link?: string;
}

const recipes: Recipe[] = [
    {
        id: "1",
        name: "Pancakes",
        ingredients: [
            {
                name: "Flour",
                quantity: 100,
                unit: "g"
            },
            {
                name: "Eggs",
                quantity: 2,
                unit: ""
            },
            {
                name: "Milk",
                quantity: 300,
                unit: "ml"
            },
            {
                name: "Butter",
                quantity: 20,
                unit: "g"
            },
            {
                name: "Sugar",
                quantity: 1,
                unit: "tbsp"
            },
            {
                name: "Salt",
                quantity: 1,
                unit: "pinch"
            }
        ],
        steps: [
            "Mix the flour, sugar and salt in a bowl",
            "Add the eggs and mix",
            "Add the milk and mix",
            "Melt the butter and add it to the mix",
            "Cook the pancakes in a pan"
        ]
    }
];


export async function GET(request: Request) {
    return new Response(JSON.stringify(recipes), { status: 200 })
}