import { Recipe_Full } from "@/types/recipe"
import { formatMinutesToHours } from "@/utils/formatter"
import { FaFacebook, FaInstagram, FaPrint, FaTwitter } from "react-icons/fa"

type RecipeMetaDataProps = {
    recipe: Recipe_Full
}

export default function RecipeMetaData({ recipe }: RecipeMetaDataProps) {
    return (
        <div className='recipe-meta-data flex flex-row my-10'>
            <div className='recipe-meta-data-item px-10 pl-0 border-r'>
                <p className="text-gray-500 text-sm uppercase">Total Time</p>
                <p className="text-gray-700 text-sm">{formatMinutesToHours(recipe.total_time)}</p>
            </div>
            <div className='recipe-meta-data-item px-10 border-r'>
                <p className="text-gray-500 text-sm uppercase">Servings</p>
                <p className="text-gray-700 text-sm">{recipe.servings}</p>
            </div>
            <div className='recipe-meta-data-item items-center pl-10 flex'>
                <p className="text-gray-500 text-sm uppercase">Share</p>
            </div>
            <div className='recipe-meta-data-item items-center pl-10 flex'>
                <FaPrint />
            </div>
            <div className='recipe-meta-data-item items-center pl-10 flex'>
                <FaFacebook />
            </div>
            <div className='recipe-meta-data-item items-center pl-10 flex'>
                <FaTwitter />
            </div>
            <div className='recipe-meta-data-item items-center pl-10 flex'>
                <FaInstagram />
            </div>
        </div>
    )
}