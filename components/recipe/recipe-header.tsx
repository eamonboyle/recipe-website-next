import { Recipe_Full } from "@/types/recipe"
import Image from "next/image"
import { FaCalendarDay, FaComments } from "react-icons/fa"
import { Rating } from "../ui/rating"
import { formatDate } from "@/utils/formatter"

type RecipeHeaderProps = {
    recipe: Recipe_Full
}

export default function RecipeHeader({ recipe }: RecipeHeaderProps) {
    return (
        <div className="recipe-header">
            <p className="text-gray-700 text-sm mb-2">95% would make this again</p>
            <h3 className="text-6xl font-bold">{recipe.recipe_name}</h3>

            <div className="recipe-info flex flex-row gap-10 my-5 border-b pb-5">
                <div className="recipe-info-item flex flex-row align-middle items-center">
                    <Image src="https://placehold.co/200x200.png" width={30} height={30} alt="author photo" className='rounded-full' />
                    <p className="text-gray-700 ml-2"><a href="#" className="text-gray-700 text-sm">{recipe.author}</a></p>
                </div>
                <div className="recipe-info-item flex flex-row align-middle items-center">
                    <FaCalendarDay />
                    <p className="text-gray-700 ml-2 text-sm">{formatDate(recipe.created_at)}</p>
                </div>
                <div className="recipe-info-item flex flex-row align-middle items-center">
                    <FaComments />
                    <p className="text-gray-700 text-sm ml-2">2</p>
                </div>
                <div className="recipe-info-item flex flex-row align-middle items-center">
                    <Rating rating={4} width={5} height={5} />
                </div>
            </div>
        </div>
    )
}