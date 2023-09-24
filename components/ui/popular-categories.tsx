import { FeaturedCategory } from "@/types/featured-category";
import Image from "next/image";

type PopularCategoriesProps = {
    title: string;
    categories: FeaturedCategory[];
}

const PopularCategories: React.FC<PopularCategoriesProps> = ({ title, categories }) => {
    return (
        <div className="py-10">
            <h3 className="text-3xl font-bold mb-5">{title}</h3>
            <div className="flex flex-row space-x-6">
                {categories.map((category) => (
                    <div className="flex-grow" key={category.id}>
                        <div className="image-container">
                            <a href={`/categories/${category.slug}`}>
                                <Image src={category.image_url} alt={category.name} width={300} height={300} className="rounded-full m-auto w-20 h-20 object-cover hover:outline-double transition-all hover:scale-110" />
                            </a>
                        </div>
                        <div className="text-center mt-2">
                            <p className="text-sm font-bold">{category.name}</p>
                        </div>
                    </div>
                ))
                }
            </div >
        </div >
    );
}

export default PopularCategories;