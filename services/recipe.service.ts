export const getAllRecipes = async () => {
    const response = await fetch(`/recipe`);
    const recipes = await response.json();
    return recipes;
}