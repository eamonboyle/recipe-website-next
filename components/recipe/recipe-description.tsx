import { Recipe_Full } from "@/types/recipe"

type RecipeDescriptionProps = {
    recipe: Recipe_Full
}

export default function RecipeDescription({ recipe }: RecipeDescriptionProps) {
    return (
        <div className='recipe-description mb-5'>
            <p className="text-gray-700 text-sm">{recipe.description}</p>
        </div>
    )
}