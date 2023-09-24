import { Recipe_Full } from "@/types/recipe"
import Image from "next/image"
import { Button } from "../ui/button"

type RecipeCommentsProps = {
    recipe: Recipe_Full
}

export default function RecipeComments({ recipe }: RecipeCommentsProps) {
    return (
        <>
            <div className="recipe-comments my-10">
                <h3 className="text-2xl font-bold mb-5">Comments</h3>

                <div className="recipe-comment flex flex-row gap-5 mb-5">
                    <div className="recipe-comment-image">
                        <Image src="https://placehold.co/200x200.png" width={50} height={50} alt="author photo" className='rounded-full' />
                    </div>
                    <div className="recipe-comment-content">
                        <p className="text-gray-700 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.</p>
                        <p className="text-gray-700 text-sm">- <a href="#" className="text-gray-700 text-sm">John Doe</a></p>
                    </div>
                </div>
                <div className="recipe-comment flex flex-row gap-5 mb-5">
                    <div className="recipe-comment-image">
                        <Image src="https://placehold.co/200x200.png" width={50} height={50} alt="author photo" className='rounded-full' />
                    </div>
                    <div className="recipe-comment-content">
                        <p className="text-gray-700 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.</p>
                        <p className="text-gray-700 text-sm">- <a href="#" className="text-gray-700 text-sm">John Doe</a></p>
                    </div>
                </div>
                <div className="recipe-comment flex flex-row gap-5 mb-5">
                    <div className="recipe-comment-image">
                        <Image src="https://placehold.co/200x200.png" width={50} height={50} alt="author photo" className='rounded-full' />
                    </div>
                    <div className="recipe-comment-content">
                        <p className="text-gray-700 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.</p>
                        <p className="text-gray-700 text-sm">- <a href="#" className="text-gray-700 text-sm">John Doe</a></p>
                    </div>
                </div>

                <div className="recipe-comments_load-more">
                    <Button variant="outline">
                        Load More
                    </Button>
                </div>
            </div>


            <div className="recipe-add-comment-form">
                <h3 className="text-2xl font-bold mb-5">Add Comment</h3>
                <form action="" className="flex flex-col gap-5">
                    <div className="flex flex-col gap-5">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" className="border border-gray-300 p-2 rounded-md" />
                    </div>
                    <div className="flex flex-col gap-5">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" className="border border-gray-300 p-2 rounded-md" />
                    </div>
                    <div className="flex flex-col gap-5">
                        <label htmlFor="comment">Comment</label>
                        <textarea name="comment" id="comment" cols={30} rows={10} className="border border-gray-300 p-2 rounded-md"></textarea>
                    </div>
                    <button className="bg-orange-500 text-white py-2 px-5 rounded-md">Submit</button>
                </form>
            </div>
        </>
    )
}