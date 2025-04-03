"use client"; // This is a client component 👈🏽

import Promo from "@/app/components/promo";
import Hero from "@/app/components/hero";
import Service from "@/app/components/service";


export default function Process() {
    return (
        <>
            <section className="mx-auto pb-12">

                <div
                    className="relative text-white h-screen90vh flex items-center justify-center"
                    style={{
                        backgroundImage: `url('/image/background/hero-process.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="absolute z-0 inset-0 bg-darkBlue.600 bg-opacity-80"></div>
                <Hero id={3}/>
                </div>
            <Service type="process"/>
            <Promo id={1}/>
            </section>
        </>
    )
}