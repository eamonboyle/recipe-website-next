import Image from "next/image";
import { Button } from "../ui/button";

type JumbotronProps = {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    image: string;
}

const Jumbotron: React.FC<JumbotronProps> = ({ title, description, buttonText, buttonLink, image }) => {
    return (
        <div className="bg-zinc-100 rounded-lg my-4 flex flex-col lg:flex-row">
            <div className="w-full lg:w-2/4 sm:w-full">
                <Image src={image} width={500} height={500} alt="image" className='w-full h-70 object-cover rounded-lg' />
            </div>
            <div className="w-full sm:w-full lg:w-2/4 flex items-center flex-col justify-center px-4 lg:px-20">
                <h3 className="text-4xl md:text-5xl font-bold mb-4 sm:mt-4">
                    {title}
                </h3>
                <p className="text-gray-700 text-center md:text-left">
                    {description}
                </p>
                <Button variant="default" size="lg" className="mt-4 w-full">
                    <a href={buttonLink}>
                        {buttonText}
                    </a>
                </Button>
            </div>
        </div>
    )
}

export default Jumbotron;