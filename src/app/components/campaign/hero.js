'use client';

import Link from "next/link";
import {useState} from "react";

export default function CampaignHero({ toggleModal }) {

    const [active, setActive] = useState(false)
    const handleClick = () => setActive(!active)

    return (
        <>
            <section className="flex flex-row relative overflow-hidden h-screen75vh">
                <div className='flex flex-col max-w-7xl mx-auto items-center justify-center'>

                    <video autoPlay muted loop playsInline className="absolute inset-0 object-cover w-full h-full" poster="/image/capture_moment_still.jpg">
                        <source src="/video/capturing_moments.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>

                    <div className="flex flex-col text-center z-10 ">
                        <div className="font-bebasNeue font-bold text-5xl text-bg50">Preserving memories:  Share your story, Your  way!</div>
                        <div className="text-gray.300 text-lg lg:pb-4 pb-2">
                            Let your loved ones' voices be heard through authentic narratives.
                        </div>
                        <div>
                            <Link href=''>
                                <button
                                    onClick={toggleModal}
                                    className="bg-sand hover:bg-sandLight hover:text-bg100 text-xs text-gray.800 uppercase px-4 py-3 rounded-lg md:ml-3 md:mt-0 mt-6">
                                    Contact us
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
