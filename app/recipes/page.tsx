"use client"

import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Page() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('/api/categories')
            .then((response) => response.json())
            .then((data) => setCategories(data))

    }, [])

    return (
        <div className="categories-container">
            <h3 className="text-xl font-bold categories-title">Categories {categories && categories.length}</h3>

            <div className="categories-categories">
                <div className="category">
                    <div className="category-image">
                        <Image src="https://www.tasteofhome.com/wp-content/uploads/2018/01/exps4490_MTC153706D03_12_2b.jpg" width={200} height={200} alt="image" />
                    </div>
                    <div className="category-text">
                        <h4 className="category-name">Breakfast</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
