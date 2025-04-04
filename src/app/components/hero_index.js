'use client';

import Link from "next/link";
import {useState} from "react";

export default function HeroIndex({ toggleModal }) {

    const [active, setActive] = useState(false)
    const handleClick = () => setActive(!active)

    return (
        <>
        <section
            className="relative flex flex-row justify-center items-center relative overflow-hidden bg-gray-900 h-screen90vh ">

            <video autoPlay muted loop playsInline className="absolute inset-0 object-cover w-full h-full" poster="/image/background-hero-index.gif">
                <source src="/image/background-hero-index.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-darkBlue.600 bg-opacity-70"></div>

            <div className="flex flex-col text-center z-10 animate-fadeInUp">
                <h2 className="text-8xl md:text-7xl font-bold  text-legacy-wheat-50 font-bebasNeue mt-0">
                    Stories That Stick.<br className="hidden md:block" /> Visuals That Speak.
                </h2>
                <h1 className="hidden">Legacy Video & Creative Production Studio | Blue Prospect</h1>
                <div className="text-legacy-rose-100 text-lg lg:pb-4 pb-2">
                    We turn your vision into moments that move—story-first, heart-led, always original.
                </div>
                    <div>
                        <Link href=''>
                            <button
                                onClick={toggleModal}
                                className="bg-sand hover:bg-sandLight hover:text-bg100 text-xs text-gray.800 uppercase px-4 py-3 rounded-lg md:ml-3 md:mt-0 mt-6 font-bold">
                                Contact us
                            </button>
                        </Link>
                    </div>
                </div>
        </section>
    </>
    )
}


