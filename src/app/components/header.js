"use client"; // This is a client component 👈🏽

import NavBar from '../components/navBar'
import Link from "next/link";
import { useState} from 'react'
import navItems from "../data/navItems";


export default function Header({ toggleModal }) {

    const [active, setActive] = useState(false)
    const handleClick = () => setActive(!active)

    return (
        <header className="bg-gray.800 sticky top-0 z-20 drop-shadow-md">
            <div className="lg:flex lg:flex-row lg:justify-between lg:items-center lg:mx-auto lg:max-w-7xl py-4 xl:px-0 md:px-8 px-6">
            <section>
                    <Link href='/'>
                        <div>
                            <div className="flex flex-row items-center">
                                <div className="">
                                    <img
                                        src="/image/logo/logo-light@2x 1.png"
                                        width={175}
                                        alt="Blue Prospect Studio - Logo"
                                    />
                                </div>
                            </div>
                        </div>
                    </Link>
                </section>
             <div>
                    <section className="absolute lg:right-10 right-8 top-6">
                        <button
                            className="lg:hidden text-secondary hover:text-primary focus:appearance-none border-none"
                            onClick={handleClick}>
                            <svg
                                className='w-6 h-6 '
                                fill='none'
                                stroke='#fff'
                                viewBox='0 0 24 24'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M4 6h16M4 12h16M4 18h16'
                                />
                            </svg>
                        </button>
                    </section>
                    <section className={`${active ? '' : 'hidden'} lg:flex lg:flex-row lg:my-0 my-2`}>
                            <NavBar navItems={navItems}/>
                             <Link href=''>
                                 <button
                                     onClick={toggleModal}
                                     className="bg-sand hover:bg-sandLight hover:text-bg100 text-xs text-gray.800 uppercase px-4 py-3 rounded-lg md:ml-3 md:mt-0 mt-2">
                                     Contact us
                                 </button>
                            </Link>
                    </section>
                </div>
            </div>
        </header>

    )
}