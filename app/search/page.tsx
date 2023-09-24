"use client"

import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Recipe_Full } from "@/types/recipe";

async function fetchRecipeData(endpoint: string, limit = 8, offset = 0) {
    const res = await fetch(`http://localhost:3000/api/recipes/${endpoint}?limit=${limit}&offset=${offset}`);
    const data = await res.json();
    return data;
}

export default function Page() {
    const [searchQuery, setSearchQuery] = useState('pancakes');
    const [recipes, setRecipes] = useState<Recipe_Full[]>([]);
    const [offset, setOffset] = useState(0);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const data: Recipe_Full[] = await fetchRecipeData(`search/${searchQuery}`, 8, offset);
            // update the state of the recipes, keeping the old ones
            setRecipes([...recipes, ...data]);
            setHasMore(data.length > 0);
        }

        if (searchQuery) {
            fetchData();
        }
    }, [searchQuery, offset]);

    const handleLoadMore = () => {
        setOffset(offset + 8);
    }

    return (
        <>
            <div className="search-container">
                <div className="search-input">
                    <Input placeholder="Search for recipes" onChange={(e) => setSearchQuery(e.target.value)} />
                </div>
            </div>

            <div className="grid-container mt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
                    {recipes?.map((recipe: any) => (
                        <div className="hover:scale-105 transform transform-transform duration-300" key={recipe.id}>
                            <a href={`/recipes/${recipe.slug}`} className="recipe-link">
                                <div className="image">
                                    <Image src={recipe.image_url ??
                                        'https://placehold.co/1000x1000.png'} width={200} height={200} alt="image" className='w-full h-48 object-cover rounded-lg' />
                                </div>
                                <div className="text text-center my-2">
                                    <h4 className="category-name font-bold mb-4 text-gray-900">{recipe.recipe_name}</h4>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <div className="view-more-button my-3 flex justify-center xs:w-full">
                <Button
                    variant="default"
                    size="lg"
                    className="xs:w-full sm:w-full md:w-[250px]"
                    onClick={handleLoadMore}
                    disabled={!hasMore}
                >
                    View More
                </Button>
            </div>
        </>
    )
}