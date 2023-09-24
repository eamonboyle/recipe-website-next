import { NutritionData, Recipe_Full } from "@/types/recipe"

type RecipeContentProps = {
    recipe: Recipe_Full
}

export default function RecipeContent({ recipe }: RecipeContentProps) {
    let instructions = recipe.instructions;

    const lines = instructions.split('.');

    // remove empty lines
    lines.forEach((line, index) => {
        if (line.trim() === '') {
            lines.splice(index, 1);
        }
    });

    // combine lines that are too short
    lines.forEach((line, index) => {
        if (line.length < 150) {
            // check if there is a next line
            if (lines[index + 1] === undefined) {
                return;
            }
            lines[index] = line + '. ' + lines[index + 1];
            lines.splice(index + 1, 1);
        }
    });

    let nutritionJsonString = JSON.stringify(recipe.nutrition_data, null, 2);
    let nutritionDataJson = JSON.parse(nutritionJsonString);

    recipe.parsed_nutrition_data = [];

    for (const nutrientName in nutritionDataJson) {
        if (nutritionDataJson.hasOwnProperty(nutrientName)) {
            const nutrientValue = nutritionDataJson[nutrientName];
            let data: NutritionData = {
                name: nutrientName,
                value: nutrientValue
            }
            recipe.parsed_nutrition_data.push(data);
        }
    }

    return (
        <div className='recipe-content'>
            <div className="lg:flex flex-row gap-20">
                <div className="lg:w-1/3 recipe-ingredients">
                    <h3 className="text-2xl font-bold mb-5">Ingredients</h3>
                    <ul className="list-disc list-inside">
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index} className="text-gray-700 my-5 mb-2 capitalize">
                                {ingredient}
                            </li>
                        ))}
                    </ul>

                    {/* Nutrition */}
                    {recipe.parsed_nutrition_data && recipe.parsed_nutrition_data.length > 0 && (
                        <>
                            <h3 className="text-2xl font-bold mb-5 mt-10">Nutrition</h3>
                            <ul className="list-disc list-inside">
                                {recipe.parsed_nutrition_data.map((nutrition: NutritionData, index: number) => (
                                    <li key={index} className="text-gray-700 my-5 mb-2 capitalize">
                                        {nutrition.value}
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                </div>
                <div className="lg:w-2/3 recipe-instructions">
                    <h3 className="text-2xl font-bold mb-5">Instructions</h3>
                    {lines.map((step, index) => (
                        <div key={index} className="flex text-gray-700 text-sm mb-2 my-5">
                            <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center mr-4 text-lg flex-shrink-0">
                                {index + 1}
                            </div>
                            <p className='text-gray-700'>{step}</p>
                        </div>
                    ))}

                    <div className='recipe-already-made my-10'>
                        <h3 className="text-3xl font-bold mb-5">Already Made It?</h3>
                        <p className="text-gray-700 text-sm mb-5">Tell us and others what you thought of the recipe.</p>
                        <button className="bg-orange-500 text-white py-2 px-5 rounded-md">Share your feedback</button>
                    </div>
                </div>
            </div>
        </div>
    )
}