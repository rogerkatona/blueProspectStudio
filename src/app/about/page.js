"use client"; // This is a client component 👈🏽

import Hero from "@/app/components/hero";
import AboutItem from "@/app/components/about-item";
import Quote from "@/app/components/quote";


export default function About() {
    return (
        <>
            <section className="mx-auto pb-12 bg-white.100">

                <div
                    className="flex flex-row justify-center items-center bg-cover bg-no-repeat h-80 sm:h-86 md:h-90 lg:h-97 xl:h-112"
                    style={{
                        backgroundImage: `url('/image/background/31.png')`,
                    }}
                >
                    <Hero id={4}/>
                </div>
            <AboutItem type="about"/>
            <Quote id={1}/>

            </section>
        </>
    )
}