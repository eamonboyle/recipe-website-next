import { Recipe_Full } from "@/types/recipe"
import Image from "next/image"

type RecipeImageProps = {
    recipe: Recipe_Full
}

export default function RecipeImage({ recipe }: RecipeImageProps) {
    return (
        <div className="recipe-image">
            <Image src={recipe.image_url} width={800} height={800} alt="recipe image" className='w-full' />
        </div>
    )
}