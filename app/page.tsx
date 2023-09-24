import Jumbotron from "@/components/layout/Jumbotron";
import FeaturedRecipes from "@/components/ui/featured-recipes";
import { LatestRecipes } from "@/components/ui/latest-recipes";
import PopularCategories from "@/components/ui/popular-categories";

async function fetchRecipeData(endpoint: string) {
  const res = await fetch(`http://localhost:3000/api/recipes/${endpoint}`);
  const data = await res.json();
  return data;
}

async function fetchCategoryData(endpoint: string) {
  const res = await fetch(`http://localhost:3000/api/categories/${endpoint}`);
  const data = await res.json();
  return data;
}

export default async function Home() {
  const jumbotronData = await fetchRecipeData('random')
  const featuredRecipes = await fetchRecipeData('featured')
  const latestRecipes = await fetchRecipeData('latest')

  const popularCategories = await fetchCategoryData('popular')

  return (
    <>
      <Jumbotron
        title={jumbotronData.recipe_name}
        description={jumbotronData.description}
        image={jumbotronData.image_url}
        buttonText="View Recipe"
        buttonLink={"/recipes/" + jumbotronData.slug}
      />

      {featuredRecipes.length > 0 && (
        <FeaturedRecipes title="Super Delicious" recipes={featuredRecipes} />
      )}

      <FeaturedRecipes title="Sweet Tooth" recipes={[
        {
          id: 1,
          recipe_name: "Mighty Super Cheesecake",
          slug: "mighty-super-cheesecake",
          // rating: 5,
          image_url: "https://th.bing.com/th/id/R.ab4a2592b98e2cfcb0f25d89326d78ee?rik=%2bJvWwZLOkrlHYA&riu=http%3a%2f%2fwww.baltana.com%2ffiles%2fwallpapers-1%2fCheesecake-HD-Images-03401.jpg&ehk=i3GdsmQJ6pI8oA6YUMqzwegxxiJfYVUi9nywPwegAc0%3d&risl=&pid=ImgRaw&r=0"
        },
        {
          id: 2,
          recipe_name: "Mighty Super Cheesecake",
          slug: "mighty-super-cheesecake",
          // rating: 3,
          image_url: "https://th.bing.com/th/id/R.ab4a2592b98e2cfcb0f25d89326d78ee?rik=%2bJvWwZLOkrlHYA&riu=http%3a%2f%2fwww.baltana.com%2ffiles%2fwallpapers-1%2fCheesecake-HD-Images-03401.jpg&ehk=i3GdsmQJ6pI8oA6YUMqzwegxxiJfYVUi9nywPwegAc0%3d&risl=&pid=ImgRaw&r=0"
        },
        {
          id: 3,
          recipe_name: "Mighty Super Cheesecake",
          slug: "mighty-super-cheesecake",
          // rating: 2,
          image_url: "https://th.bing.com/th/id/R.ab4a2592b98e2cfcb0f25d89326d78ee?rik=%2bJvWwZLOkrlHYA&riu=http%3a%2f%2fwww.baltana.com%2ffiles%2fwallpapers-1%2fCheesecake-HD-Images-03401.jpg&ehk=i3GdsmQJ6pI8oA6YUMqzwegxxiJfYVUi9nywPwegAc0%3d&risl=&pid=ImgRaw&r=0",
        }
      ]} />

      <PopularCategories title="Popular Categories" categories={popularCategories} />

      <LatestRecipes recipes={latestRecipes} />

    </>
  )
}
