"use client"; // This is a client component 👈🏽

import Quote from "@/app/components/quote";
import Hero from "@/app/components/hero";
import GridMedia from "@/app/components/grid-media";
import Feature from "@/app/components/feature";

export default function Portfolio() {
    return (
        <section className="mx-auto pb-12">

            <div
                className="relative text-white h-screen90vh flex items-center justify-center"
                style={{
                    backgroundImage: `url('/image/background/hero-ourwork.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute z-0 inset-0 bg-darkBlue.600 bg-opacity-70"></div>
                <Hero id={1}/>
            </div>
            <Feature  id={0} type="work"/>
            <Feature id={1}/>
            <Quote id={1}/>
            <GridMedia type="media"/>

        </section>
    )
}