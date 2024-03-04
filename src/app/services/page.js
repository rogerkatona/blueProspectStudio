"use client"; // This is a client component 👈🏽

import Quote from "@/app/components/quote";
import Promo from "@/app/components/promo";
import Hero from "@/app/components/hero";
import Service from "@/app/components/service";


export default function Services() {
    return (
        <>
            <section className="mx-auto pb-12">

               <div
                className="flex flex-row justify-center items-center bg-cover bg-no-repeat h-80 sm:h-86 md:h-90 lg:h-97 xl:h-112"
                style={{
                    backgroundImage: `url('/image/background/30.png')`,
                }}
                >
                <Hero id={2}/>
               </div>
                <Service type="service"/>
                <Promo id={1}/>
            </section>
        </>
    )
}