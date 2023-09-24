type FooterProps = {
    title?: string;
}

export default function Footer({ title }: FooterProps) {
    return (
        <footer className="flex bg-slate-100">
            <div className="container mx-auto py-20">
                <div className="flex justify-between">
                    <div className="w-full md:w-1/3 sm:w-full">
                        <h3 className="text-2xl font-bold mb-4 text-gray-700">{title}</h3>
                        <p className="text-gray-700 italic">
                            Welcome to Recipe Share, your go-to destination for all things delicious and culinary. We&apos;re passionate about bringing people together through the love of food. Our platform is a hub for food enthusiasts, both seasoned cooks and kitchen newcomers, to explore, create, and share the flavors of the world.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="flex justify-between">
                            <div>
                                <h3 className="text-1xl font-bold mb-4 text-gray-700">Share Recipe</h3>
                                <ul>
                                    <li className="my-2"><a href="#" className="text-gray-600">About us</a></li>
                                    <li className="my-2"><a href="#" className="text-gray-600">Careers</a></li>
                                    <li className="my-2"><a href="#" className="text-gray-600">Contact Us</a></li>
                                    <li className="my-2"><a href="#" className="text-gray-600">Feedback</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-1xl font-bold mb-4 text-gray-700">Legal</h3>
                                <ul>
                                    <li className="my-2"><a href="#" className="text-gray-600">Terms</a></li>
                                    <li className="my-2"><a href="#" className="text-gray-600">Conditions</a></li>
                                    <li className="my-2"><a href="#" className="text-gray-600">Cookies</a></li>
                                    <li className="my-2"><a href="#" className="text-gray-600">Copyright</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-1xl font-bold mb-4 text-gray-700">Follow</h3>
                                <ul>
                                    <li className="my-2"><a href="#" className="text-gray-600">Facebook</a></li>
                                    <li className="my-2"><a href="#" className="text-gray-600">Twitter</a></li>
                                    <li className="my-2"><a href="#" className="text-gray-600">Instagram</a></li>
                                    <li className="my-2"><a href="#" className="text-gray-600">YouTube</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}