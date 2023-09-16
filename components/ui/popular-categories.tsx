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
                {categories.map((category, index) => (
                    <div className="flex-grow" key={index}>
                        <div className="image-container">
                            <a href={category.link}>
                                <Image src={category.image} alt={category.title} width={300} height={300} className="rounded-full m-auto w-96 hover:outline-double transition-all hover:scale-110" />
                            </a>
                        </div>
                        <div className="text-center mt-2">
                            <p className="text-sm font-bold">{category.title}</p>
                        </div>
                    </div>
                ))
                }
            </div >
        </div >
    );
}

export default PopularCategories;