import Jumbotron from "@/components/layout/Jumbotron";
import FeaturedRecipes from "@/components/ui/featured-recipes";
import { LatestRecipes } from "@/components/ui/latest-recipes";
import PopularCategories from "@/components/ui/popular-categories";

async function fetchRecipeData(endpoint: string) {
  const res = await fetch(`/api/recipes/${endpoint}`);
  const data = await res.json();
  return data;
}

async function fetchCategoryData(endpoint: string) {
  const res = await fetch(`/api/categories/${endpoint}`);
  const data = await res.json();
  return data;
}

export default async function Home() {
  const jumbotronData = await fetchRecipeData('random')
  const featuredRecipes = await fetchRecipeData('featured')
  const featuredRecipes2 = await fetchRecipeData('random/3')
  const latestRecipes = await fetchRecipeData('latest')

  const popularCategories = await fetchCategoryData('popular')

  return (
    <>
      {jumbotronData && (
        <Jumbotron
          title={jumbotronData.recipe_name}
          description={jumbotronData.description}
          image={jumbotronData.image_url}
          buttonText="View Recipe"
          buttonLink={"/recipes/" + jumbotronData.slug}
        />
      )}

      {featuredRecipes.length > 0 && (
        <FeaturedRecipes title="Super Delicious" recipes={featuredRecipes} />
      )}

      {featuredRecipes2.length > 0 && (
        <FeaturedRecipes title="Tasty" recipes={featuredRecipes2} />
      )}

      {popularCategories.length > 0 && (
        <PopularCategories title="Popular Categories" categories={popularCategories} />
      )}

      {latestRecipes.length > 0 && (
        <LatestRecipes recipes={latestRecipes} />
      )}

    </>
  )
}
