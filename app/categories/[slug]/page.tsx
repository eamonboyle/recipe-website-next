"use client"

import Image from 'next/image'
import { useState, useEffect } from 'react'

import { unslugify } from '@/utils/slugify'
import { Recipe_Small } from '@/types/recipe'

export default function Page({ params }: { params: { slug: string } }) {
    const [recipes, setRecipes] = useState<Recipe_Small[]>([])

    useEffect(() => {
        fetch('/api/recipes/category/' + params.slug)
            .then((response) => response.json())
            .then((data) => setRecipes(data))

    }, [])

    return (
        <div className="grid-container">
            <h3 className="text-2xl font-semibold mb-4">{unslugify(params.slug)}</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
                {recipes?.map((recipe) => (
                    <div className="hover:scale-105 transform transform-transform duration-300" key={recipe.id}>
                        <a href={`/recipes/${recipe.slug}`} className="category-link">
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
    )
}
