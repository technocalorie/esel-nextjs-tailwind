import React from 'react'
import Image from "next/image";
// import Link from 'next/link' !dont need it because we are using Custom "AcitveLink.js" 
import Link from './ActiveLink';

// let btn = document.querySelector('mobile-menu-button');
// let menu = document.querySelector('.mobile-menu');
    
    
//     btn.addEventListener('click',() => {
//         menu.classList.toggle("hidden");
//     });

const Navbar = () => {

    return (
        <>

        {/* logo */}
        <div className="flex p-4 bg-green-100 justify-between">
            <div className="cursor-pointer">
                <Link href="/">
                    <Image 
                    src="/logo.svg"
                    alt="Energy Solution Company Logo"
                    width={350}
                    height={60}
                    />
                </Link>   
            </div>

            {/* NavItem */}
            <div className="flex items-center p-2">
            <div className="hidden md:flex ml-8 hover:text-gray-500">
                <Link activeClassName="text-gray-500" href="/portfolio">
                <a>Portfolio</a>
                </Link>
            </div>
            <div className="hidden md:flex ml-8 hover:text-gray-500">
                <Link activeClassName="text-blue-700" href="/contact">
                <a>Contact</a>
                </Link>
            </div>
            <div className="hidden md:flex ml-8 hover:text-gray-500">
                <Link activeClassName="text-gray-500" href="/partners">
                <a>Partners</a>
                </Link>
            </div>
            <div className="hidden md:flex ml-8 hover:text-gray-500">
                <Link activeClassName="text-gray-500" href="/about">
                <a>About</a>
                </Link>
            </div>
            <div className="hidden md:flex">
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white ml-8 py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    +880222226118
                </button>
            </div>
            </div>
            
            <div className="md:hidden flex items-center">
                <button className="mobile-menu-button">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            </button>
            </div>

            {/* Mobile Menu */}
            <div className="mobile-menu hidden md:hidden">
            <div className=" py-2">
                <Link href="/portfolio">
                <a>Portfolio</a>
                </Link>
            </div>
            <div className="py-2">
                <Link href="/contact">
                <a>Contact</a>
                </Link>
            </div>
            <div className="py-2">
                <Link href="/partners">
                <a>Partners</a>
                </Link>
            </div>
            <div className="py-2">
                <Link href="/about">
                <a>About</a>
                </Link>
            </div>
            </div>
        </div>
        
        </>
    )
    
    
}

export default Navbar
