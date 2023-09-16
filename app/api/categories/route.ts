import { Category } from "@/types/category";
import { CategoryController } from "../controllers";

const categories: Category[] = [
    {
        id: "1",
        name: "Breakfast",
        subcategories: [
            {
                id: "1",
                name: "Eggs",
                parent: {
                    id: "1",
                    name: "Breakfast",
                    subcategories: [],
                    imageUrl: "https://images.unsplash.com/photo-1581093458791-9d3c9ebe9f8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
                    active: true
                },
                imageUrl: "https://images.unsplash.com/photo-1581093458791-9d3c9ebe9f8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
                active: true
            },
            {
                id: "2",
                name: "Pancakes",
                parent: {
                    id: "1",
                    name: "Breakfast",
                    subcategories: [],
                    imageUrl: "https://images.unsplash.com/photo-1581093458791-9d3c9ebe9f8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
                    active: true
                },
                imageUrl: "https://images.unsplash.com/photo-1581093458791-9d3c9ebe9f8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
                active: true
            }
        ]
    },
    {
        id: "2",
        name: "Lunch",
        subcategories: [
            {
                id: "3",
                name: "Sandwiches",
                parent: {
                    id: "2",
                    name: "Lunch",
                    subcategories: [],
                    imageUrl: "https://images.unsplash.com/photo-1581093458791-9d3c9ebe9f8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
                    active: true
                },
                imageUrl: "https://images.unsplash.com/photo-1581093458791-9d3c9ebe9f8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
                active: true
            },
            {
                id: "4",
                name: "Salads",
                parent: {
                    id: "2",
                    name: "Lunch",
                    subcategories: [],
                    imageUrl: "https://images.unsplash.com/photo-1581093458791-9d3c9ebe9f8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
                    active: true
                },
                imageUrl: "https://images.unsplash.com/photo-1581093458791-9d3c9ebe9f8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
                active: true
            }
        ]
    },
];


export async function GET(request: Request) {

    let categories: Category[] | null = await CategoryController.getAll(request).then((categories) => {
        return categories;
    }).catch((err) => {
        console.error(`Error reading file: ${err}`);
        return null;
    })

    return new Response(JSON.stringify(categories), { status: 200 })
}