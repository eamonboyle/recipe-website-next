import { Recipe_Small } from "@/types/recipe";

type LatestRecipesProps = {
    recipes: Recipe_Small[];
}

const LatestRecipes: React.FC<LatestRecipesProps> = ({ recipes }) => {

    return (
        <div className="py-10">
            <h3 className="text-3xl font-bold mb-5">Latest Recipes</h3>
            <div className="flex flex-row w-full justify-items-stretch space-x-4">
                {
                    recipes.map((recipe) => (
                        <div className="flex-grow-1" key={recipe.id}>
                            <div>
                                <a href={`/recipes/${recipe.slug}`}>
                                    <img
                                        src={recipe.image_url}
                                        alt={recipe.recipe_name}
                                    />
                                </a>
                                <h4 className="text font-bold my-2">{recipe.recipe_name}</h4>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export { LatestRecipes };