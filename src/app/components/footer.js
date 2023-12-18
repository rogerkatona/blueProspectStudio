"use client"; // This is a client component 👈🏽

import Link from "next/link";
import NavBar from "./navBar";
import navItems from "../data/navItems";
import useModal from "../lib/useModal";
import Modal from "./modal";
import SocialMediaItem from "@/app/components/social-media-items";
import socialMediaItems from "@/app/data/socialMediaItems";


export default function Footer() {
    const {isShowing, toggle} = useModal();

    return (
        <footer className="flex flex-col justify-center md:items-center md:px-0 px-6 bg-bg800 py-48 space-y-6 mt-24">
         <section>
            <div>
                <div className="flex flex-row items-center ">
                    <Link href='/'>
                        <div>
                            <img
                                src="/image/logo/logo-light@2x 1.png"
                                width={200}
                                alt='Blue Prospect Logo'
                            />
                        </div>
                    </Link>
                </div>
            </div>
        </section>

            <div className='flex md:flex-row flex-col'>
                <NavBar navItems={navItems}/>
            </div>
            <div className="flex flex-col md:justify-center md:items-center ">
                <div className='flex flex-row pb-8'>
                    <SocialMediaItem socialMediaItems={socialMediaItems}/>
                </div>
                <Link href=''>
                    <button
                        onClick={toggle}
                        className="hover:bg-yellow600 hover:text-bg500 text-xs text-yellow500 uppercase px-4 py-3 border border-yellow500 rounded-lg">
                        Contact us
                    </button>
                </Link>

            </div>



            <section>
                <Modal
                    isShowing={isShowing}
                    hide={toggle}
                />
            </section>
        </footer>
    )
}