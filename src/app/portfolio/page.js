"use client"; // This is a client component 👈🏽

import Quote from "@/app/components/quote";
import Hero from "@/app/components/hero";
import GridMedia from "@/app/components/grid-media";
import Feature from "@/app/components/feature";

export default function Portfolio() {
    return (
        <section className="mx-auto pb-12 bg-white.100">

            <div
                className="flex flex-row justify-center items-center bg-cover bg-no-repeat h-80 sm:h-86 md:h-90 lg:h-97 xl:h-112"
                style={{
                    backgroundImage: `url('/image/background/30.png')`,
                }}
            >
                <Hero id={1}/>
            </div>
            <Feature  id={0} type="work"/>
            <Feature id={1}/>
            <Quote id={1}/>
            <GridMedia type="media"/>

        </section>
    )
}