"use client"; // This is a client component 👈🏽

import Hero from "@/app/components/hero";
import AboutItem from "@/app/components/about-item";
import Quote from "@/app/components/quote";


export default function About() {
    return (
        <>
            <section className="mx-auto pb-12">

                <div
                    className="relative text-white h-screen90vh flex items-center justify-center"
                    style={{
                        backgroundImage: `url('/image/background/hero-blog.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="absolute z-0 inset-0 bg-legacy-sepia-700 bg-opacity-70"></div>
                    <Hero id={5}/>
                </div>
            <AboutItem type="about"/>
            <Quote id={1}/>

            </section>
        </>
    )
}