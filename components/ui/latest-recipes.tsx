import { Recipe } from "@/types/recipe";

type LatestRecipesProps = {
}

const LatestRecipes: React.FC<LatestRecipesProps> = () => {
    const recipes: Recipe[] = [
        {
            id: "1",
            name: "Mighty Super Cheesecake",
            imageUrl: "https://th.bing.com/th/id/R.ab4a2592b98e2cfcb0f25d89326d78ee?rik=%2bJvWwZLOkrlHYA&riu=http%3a%2f%2fwww.baltana.com%2ffiles%2fwallpapers-1%2fCheesecake-HD-Images-03401.jpg&ehk=i3GdsmQJ6pI8oA6YUMqzwegxxiJfYVUi9nywPwegAc0%3d&risl=&pid=ImgRaw&r=0",
            link: "/recipes/1"
        },
        {
            id: "2",
            name: "Mighty Super Cheesecake",
            imageUrl: "https://th.bing.com/th/id/R.ab4a2592b98e2cfcb0f25d89326d78ee?rik=%2bJvWwZLOkrlHYA&riu=http%3a%2f%2fwww.baltana.com%2ffiles%2fwallpapers-1%2fCheesecake-HD-Images-03401.jpg&ehk=i3GdsmQJ6pI8oA6YUMqzwegxxiJfYVUi9nywPwegAc0%3d&risl=&pid=ImgRaw&r=0",
            link: "/recipes/1"
        },
        {
            id: "3",
            name: "Mighty Super Cheesecake",
            imageUrl: "https://th.bing.com/th/id/R.ab4a2592b98e2cfcb0f25d89326d78ee?rik=%2bJvWwZLOkrlHYA&riu=http%3a%2f%2fwww.baltana.com%2ffiles%2fwallpapers-1%2fCheesecake-HD-Images-03401.jpg&ehk=i3GdsmQJ6pI8oA6YUMqzwegxxiJfYVUi9nywPwegAc0%3d&risl=&pid=ImgRaw&r=0",
            link: "/recipes/1"
        },
        {
            id: "4",
            name: "Mighty Super Cheesecake",
            imageUrl: "https://th.bing.com/th/id/R.ab4a2592b98e2cfcb0f25d89326d78ee?rik=%2bJvWwZLOkrlHYA&riu=http%3a%2f%2fwww.baltana.com%2ffiles%2fwallpapers-1%2fCheesecake-HD-Images-03401.jpg&ehk=i3GdsmQJ6pI8oA6YUMqzwegxxiJfYVUi9nywPwegAc0%3d&risl=&pid=ImgRaw&r=0",
            link: "/recipes/1"
        },
        {
            id: "5",
            name: "Mighty Super Cheesecake",
            imageUrl: "https://th.bing.com/th/id/R.ab4a2592b98e2cfcb0f25d89326d78ee?rik=%2bJvWwZLOkrlHYA&riu=http%3a%2f%2fwww.baltana.com%2ffiles%2fwallpapers-1%2fCheesecake-HD-Images-03401.jpg&ehk=i3GdsmQJ6pI8oA6YUMqzwegxxiJfYVUi9nywPwegAc0%3d&risl=&pid=ImgRaw&r=0",
            link: "/recipes/1"
        }
    ]

    return (
        <div className="py-10">
            <h3 className="text-3xl font-bold mb-5">Latest Recipes</h3>
            <div className="flex flex-row w-full justify-items-stretch space-x-4">
                {
                    recipes.map((recipe) => (
                        <div className="flex-grow-1" key={recipe.id}>
                            <div>
                                <a href={recipe.link}>
                                    <img
                                        src={recipe.imageUrl}
                                        alt={recipe.name}
                                    />
                                </a>
                                <h4 className="text font-bold my-2">{recipe.name}</h4>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export { LatestRecipes };