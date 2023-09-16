import Jumbotron from "@/components/layout/Jumbotron";
import FeaturedRecipes from "@/components/ui/featured-recipes";
import { LatestRecipes } from "@/components/ui/latest-recipes";
import PopularCategories from "@/components/ui/popular-categories";

export default function Home() {
  return (
    <>

      <Jumbotron
        title="Mighty Super Cheesecake"
        description="Look no further for a creamy and ultra smooth classic cheesecake recipe! No one can deny its simple decadence, its velvety texture, or that it's the BEST!"
        image="https://th.bing.com/th/id/R.ab4a2592b98e2cfcb0f25d89326d78ee?rik=%2bJvWwZLOkrlHYA&riu=http%3a%2f%2fwww.baltana.com%2ffiles%2fwallpapers-1%2fCheesecake-HD-Images-03401.jpg&ehk=i3GdsmQJ6pI8oA6YUMqzwegxxiJfYVUi9nywPwegAc0%3d&risl=&pid=ImgRaw&r=0"
        buttonText="View Recipe"
        buttonLink="/recipes"
      />

      <FeaturedRecipes title="Super Delicious" recipes={[
        {
          title: "Mighty Super Cheesecake",
          rating: 5,
          imageUrl: "https://th.bing.com/th/id/R.ab4a2592b98e2cfcb0f25d89326d78ee?rik=%2bJvWwZLOkrlHYA&riu=http%3a%2f%2fwww.baltana.com%2ffiles%2fwallpapers-1%2fCheesecake-HD-Images-03401.jpg&ehk=i3GdsmQJ6pI8oA6YUMqzwegxxiJfYVUi9nywPwegAc0%3d&risl=&pid=ImgRaw&r=0",
          recipeLink: "/recipes/1"
        },
        {
          title: "Mighty Super Cheesecake",
          rating: 3,
          imageUrl: "https://th.bing.com/th/id/R.ab4a2592b98e2cfcb0f25d89326d78ee?rik=%2bJvWwZLOkrlHYA&riu=http%3a%2f%2fwww.baltana.com%2ffiles%2fwallpapers-1%2fCheesecake-HD-Images-03401.jpg&ehk=i3GdsmQJ6pI8oA6YUMqzwegxxiJfYVUi9nywPwegAc0%3d&risl=&pid=ImgRaw&r=0",
          recipeLink: "/recipes/1"
        },
        {
          title: "Mighty Super Cheesecake",
          rating: 2,
          imageUrl: "https://th.bing.com/th/id/R.ab4a2592b98e2cfcb0f25d89326d78ee?rik=%2bJvWwZLOkrlHYA&riu=http%3a%2f%2fwww.baltana.com%2ffiles%2fwallpapers-1%2fCheesecake-HD-Images-03401.jpg&ehk=i3GdsmQJ6pI8oA6YUMqzwegxxiJfYVUi9nywPwegAc0%3d&risl=&pid=ImgRaw&r=0",
          recipeLink: "/recipes/1"
        }
      ]} />

      <FeaturedRecipes title="Sweet Tooth" recipes={[
        {
          title: "Mighty Super Cheesecake",
          rating: 5,
          imageUrl: "https://th.bing.com/th/id/R.ab4a2592b98e2cfcb0f25d89326d78ee?rik=%2bJvWwZLOkrlHYA&riu=http%3a%2f%2fwww.baltana.com%2ffiles%2fwallpapers-1%2fCheesecake-HD-Images-03401.jpg&ehk=i3GdsmQJ6pI8oA6YUMqzwegxxiJfYVUi9nywPwegAc0%3d&risl=&pid=ImgRaw&r=0",
          recipeLink: "/recipes/1"
        },
        {
          title: "Mighty Super Cheesecake",
          rating: 3,
          imageUrl: "https://th.bing.com/th/id/R.ab4a2592b98e2cfcb0f25d89326d78ee?rik=%2bJvWwZLOkrlHYA&riu=http%3a%2f%2fwww.baltana.com%2ffiles%2fwallpapers-1%2fCheesecake-HD-Images-03401.jpg&ehk=i3GdsmQJ6pI8oA6YUMqzwegxxiJfYVUi9nywPwegAc0%3d&risl=&pid=ImgRaw&r=0",
          recipeLink: "/recipes/1"
        },
        {
          title: "Mighty Super Cheesecake",
          rating: 2,
          imageUrl: "https://th.bing.com/th/id/R.ab4a2592b98e2cfcb0f25d89326d78ee?rik=%2bJvWwZLOkrlHYA&riu=http%3a%2f%2fwww.baltana.com%2ffiles%2fwallpapers-1%2fCheesecake-HD-Images-03401.jpg&ehk=i3GdsmQJ6pI8oA6YUMqzwegxxiJfYVUi9nywPwegAc0%3d&risl=&pid=ImgRaw&r=0",
          recipeLink: "/recipes/1"
        }
      ]} />

      <PopularCategories title="Popular Categories" categories={[
        {
          title: "Mighty Super Cheesecake",
          image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/exps4490_MTC153706D03_12_2b.jpg",
          link: "/categories/1"
        },
        {
          title: "Mighty Super Cheesecake",
          image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/exps4490_MTC153706D03_12_2b.jpg",
          link: "/categories/1"
        },
        {
          title: "Mighty Super Cheesecake",
          image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/exps4490_MTC153706D03_12_2b.jpg",
          link: "/categories/1"
        },
        {
          title: "Mighty Super Cheesecake",
          image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/exps4490_MTC153706D03_12_2b.jpg",
          link: "/categories/1"
        },
        {
          title: "Mighty Super Cheesecake",
          image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/exps4490_MTC153706D03_12_2b.jpg",
          link: "/categories/1"
        },
        {
          title: "Mighty Super Cheesecake",
          image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/exps4490_MTC153706D03_12_2b.jpg",
          link: "/categories/1"
        },
        {
          title: "Mighty Super Cheesecake",
          image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/exps4490_MTC153706D03_12_2b.jpg",
          link: "/categories/1"
        },
        {
          title: "Mighty Super Cheesecake",
          image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/exps4490_MTC153706D03_12_2b.jpg",
          link: "/categories/1"
        }
      ]} />

      <LatestRecipes />

    </>
  )
}
