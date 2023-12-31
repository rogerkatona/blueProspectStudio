"use client"; // This is a client component 👈🏽

import NavBar from '../components/navBar'
import Link from "next/link";
import { useState} from 'react'
import navItems from "../data/navItems";
import Modal from "./modal";
import useModal from "../lib/useModal";


export default function Header() {

    const [active, setActive] = useState(false)
    const handleClick = () => setActive(!active)

    const {isShowing, toggle} = useModal();

    return (
        <header className="bg-bg500 sticky top-0">
            <div className="lg:flex lg:flex-row lg:justify-between lg:items-center lg:mx-auto lg:max-w-8xl py-6 xl:px-0 md:px-12 px-6">
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
                                stroke='#424548'
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
                    <section className={`${active ? '' : 'hidden'} lg:flex lg:flex-row lg:my-0 my-4`}>
                            <NavBar navItems={navItems}/>
                             <Link href=''>
                                 <button
                                     onClick={toggle}
                                     className="bg-yellow900 hover:bg-yellow600 hover:text-bg100 text-xs text-bg100 uppercase px-4 py-3 rounded-lg md:ml-3 md:mt-0 mt-6">
                                     Contact us
                                 </button>
                            </Link>
                    </section>
                </div>
            </div>
            <section>
                <Modal
                    isShowing={isShowing}
                    onClose={toggle}
                />
            </section>
        </header>

    )
}