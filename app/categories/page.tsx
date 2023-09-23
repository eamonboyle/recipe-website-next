"use client"

import { Category } from '@/types/category'
import { slugify } from '@/utils/slugify'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Page() {
    const [categories, setCategories] = useState<Category[]>([])

    useEffect(() => {
        fetch('/api/categories', { cache: 'force-cache' })
            .then((response) => response.json())
            .then((data) => setCategories(data))

    }, [])

    return (
        <div className="grid-container">
            <h3 className="text-2xl font-semibold mb-4">Categories</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
                {categories?.map((category) => (
                    <div className="hover:scale-105 transform transform-transform duration-300" key={category.id}>
                        <a href={`/categories/${slugify(category.name)}`} className="category-link">
                            <div className="image">
                                <Image src={category.image_url ??
                                    'https://placehold.co/1000x1000.png'} width={200} height={200} alt="image" className='w-full h-48 object-cover rounded-lg' />
                            </div>
                            <div className="text text-center my-2">
                                <h4 className="category-name font-bold mb-4 text-gray-900">{category.name}</h4>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}
