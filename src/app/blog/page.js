'use client'; // This is a client component 👈🏽

import Promo from "@/app/components/promo";
import Hero from "@/app/components/hero";
import BlogItem from "@/app/components/blogItem";

export default function Blog() {
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
                    <div className="absolute z-0 inset-0 bg-darkBlue.600 bg-opacity-70"></div>
                    <Hero id={4}/>
                </div>
                <BlogItem type="blog"/>
                <Promo id={2}/>
            </section>
        </>
    )
}