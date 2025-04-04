'use client'; // This is a client component 👈🏽

import Hero from "@/app/components/hero";
import AboutItem from "@/app/components/about-item";
import Quote from "@/app/components/quote";
import dynamic from 'next/dynamic';

const NextSeo = dynamic(() => import('next-seo').then(mod => mod.NextSeo), { ssr: false });
const FAQPageJsonLd = dynamic(() => import('next-seo').then(mod => mod.FAQPageJsonLd), { ssr: false });



export default function About() {
    return (
        <>
            <NextSeo
                title="About Us | Blue Prospect"
                description="We’re a creative studio based in San Diego, blending passion and professionalism to create digital experiences that connect, inspire, and last."
                canonical="https://blueprospect.com/about"
                openGraph={{
                    title: 'About Us | Blue Prospect',
                    description: 'We’re a creative studio based in San Diego, blending passion and professionalism to create digital experiences that connect, inspire, and last.',
                    url: 'https://blueprospect.com/about',
                    images: [
                        {
                            url: 'https://blueprospect.com/images/about-og.jpg',
                            width: 1200,
                            height: 630,
                            alt: 'Team working at Blue Prospect',
                        },
                    ],
                }}
                twitter={{
                    handle: '@blueprospect',
                    site: '@blueprospect',
                    cardType: 'summary_large_image',
                }}
            />
            <FAQPageJsonLd
                mainEntity={[
                    {
                        questionName: 'Where is Blue Prospect located?',
                        acceptedAnswerText:
                            'We’re based in sunny San Diego, California—but we collaborate with clients across the U.S.',
                    },
                    {
                        questionName: 'What makes Blue Prospect different?',
                        acceptedAnswerText:
                            'We blend deep creative experience with a human-centered approach. Every project gets heart, craft, and strategic thinking.',
                    },
                    {
                        questionName: 'Who is behind Blue Prospect?',
                        acceptedAnswerText:
                            'Blue Prospect is led by Roger Katona, a creative with a background in storytelling, digital design, and meaningful media.',
                    },
                ]}
            />
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
                    <Hero id={5}/>
                </div>
            <AboutItem type="about"/>
            <Quote id={1}/>

            </section>
        </>
    )
}