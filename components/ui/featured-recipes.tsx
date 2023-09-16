import { FeaturedRecipe } from "@/types/featured-recipe";
import { Button } from "@/components/ui/button";
import { Rating } from "@/components/ui/rating";

type FeaturedRecipesProps = {
    title: string;
    recipes: FeaturedRecipe[];
}

const FeaturedRecipes: React.FC<FeaturedRecipesProps> = ({ title, recipes }) => {
    return (
        <div className="py-10">
            <h3 className="text-3xl font-bold mb-5 px-3">{title}</h3>
            <div className="flex">
                {recipes.map((recipe, index) => (
                    <div className="md:w-1/3" key={index}>
                        <div className="px-3">
                            <a href={recipe.recipeLink}>
                                <img
                                    src={recipe.imageUrl}
                                    alt={recipe.title}
                                />
                            </a>
                            <div className="my-2">
                                <Rating rating={recipe.rating} width={5} height={5} />
                            </div>
                            <h4 className="text-xl font-bold mb-2">{recipe.title}</h4>
                            <Button variant="outline" size="sm">
                                <a href={recipe.recipeLink}>
                                    View Recipe
                                </a>
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FeaturedRecipes;