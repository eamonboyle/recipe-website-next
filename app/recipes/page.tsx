"use client"

import { Recipe_Small } from '@/types/recipe'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Page() {
    // const [categories, setCategories] = useState([])
    const [recipes, setRecipes] = useState<Recipe_Small[]>([])

    useEffect(() => {
        fetch('/api/recipes')
            .then((response) => response.json())
            .then((data) => setRecipes(data))

    }, [])

    return (
        <div className="categories-container">
            <h3 className="text-xl font-bold categories-title">Recipes {recipes?.length}</h3>

            <div className="categories-categories flex flex-row flex-wrap gap-5">
                {recipes?.map((recipe) => (
                    <div className="category" key={recipe.id}>
                        <a href={`/recipes/${recipe.id}`} className="category-link">
                            <div className="category-image">
                                <Image src={recipe.image_url} width={200} height={200} alt="image" />
                                a</div>
                            <div className="category-text">
                                <h4 className="category-name">{recipe.recipe_name}</h4>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}
