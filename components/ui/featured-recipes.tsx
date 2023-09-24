import { FeaturedRecipe } from "@/types/featured-recipe";
import { Button } from "@/components/ui/button";
import { Rating } from "@/components/ui/rating";
import Image from "next/image";

type FeaturedRecipesProps = {
    title: string;
    recipes: FeaturedRecipe[];
}

const FeaturedRecipes: React.FC<FeaturedRecipesProps> = ({ title, recipes }) => {

    if (!recipes || recipes.length === 0) return null;

    return (
        <div className="py-10">
            <h3 className="text-3xl font-bold mb-5 px-3">{title}</h3>
            <div className="flex">
                {recipes.map((recipe) => (
                    <div className="md:w-1/3" key={recipe.id}>
                        <div className="px-3">
                            <a href={`/recipes/${recipe.slug}`}>
                                <Image src={recipe.image_url} width={500} height={500} alt={recipe.recipe_name} className='w-full h-60 object-cover rounded-lg' />
                            </a>
                            <div className="my-2">
                                <Rating rating={Math.floor(Math.random() * (5 - 3 + 1)) + 3} width={5} height={5} />
                            </div>
                            <h4 className="text-xl font-bold my-2">{recipe.recipe_name}</h4>
                            <Button variant="outline" size="sm">
                                <a href={`/recipes/${recipe.slug}`}>
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