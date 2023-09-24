import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"

type HeaderProps = {
    title?: string
}

export default function Header({ title }: HeaderProps) {
    return (
        <header className="sticky text-black border-b-sky-100 border-b py-5">
            <div className="container mx-auto py-4 px-8 flex justify-between items-center">
                <div className="flex items-center">
                    <a href="/" className="flex flex-row">
                        <Image src="/images/logo-black.png" alt="Logo" width={30} height={20} className="mr-3" />
                        {/* <h1 className="text-3xl font-semibold tracking-tight transition-colors first:mt-0" style={{ color: '#586e0d' }}> */}
                        <h1 className="text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                            {title}
                        </h1>
                    </a>
                </div>
                <nav>
                    <ul className="flex space-x-10">
                        <li>
                            <a href="/" className="text-black p-2 hover:text-gray-100 hover:bg-slate-500 transition-all rounded-sm">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/about" className="text-black p-2 hover:text-gray-100 hover:bg-slate-500 transition-all rounded-sm">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="/categories" className="text-black p-2 hover:text-gray-100 hover:bg-slate-500 transition-all rounded-sm">
                                Categories
                            </a>
                        </li>
                        <li>
                            <a href="/recipes" className="text-black p-2 hover:text-gray-100 hover:bg-slate-500 transition-all rounded-sm">
                                Recipes
                            </a>
                        </li>
                        <li>
                            <a href="/recipes/add" className="text-black p-2 hover:text-gray-100 hover:bg-slate-500 transition-all rounded-sm">
                                Add Recipe
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="flex items-center space-x-2">
                    <div className="search-container">
                        <svg
                            className="h-8 w-8 text-black"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            {" "}
                            <path stroke="none" d="M0 0h24v24H0z" /> <circle cx={10} cy={10} r={7} />{" "}
                            <line x1={21} y1={21} x2={15} y2={15} />
                        </svg>
                    </div>

                    <div className="profileIcon">
                        <Button variant="outline" size="sm" className="mr-2">
                            Login
                        </Button>
                        {/* <Avatar>
                            <AvatarImage src="https://avatars.githubusercontent.com/u/5817313?s=400&u=d81411a58668e6cc581154f7de0959feb67108c4&v=4" alt="Profile" />
                            <AvatarFallback>EB</AvatarFallback>
                        </Avatar> */}
                    </div>
                </div>
            </div>
        </header>
    )
}