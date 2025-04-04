'use client'; // This is a client component 👈🏽

import Quote from "@/app/components/quote";
import Hero from "@/app/components/hero";
import GridMedia from "@/app/components/grid-media";
import Feature from "@/app/components/feature";
import dynamic from 'next/dynamic';

const NextSeo = dynamic(() => import('next-seo').then(mod => mod.NextSeo), { ssr: false });
const FAQPageJsonLd = dynamic(() => import('next-seo').then(mod => mod.FAQPageJsonLd), { ssr: false });


export default function Portfolio() {
    return (
        <>
            <NextSeo
                title="Our Work | Blue Prospect Portfolio"
                description="Explore our portfolio of brand stories, web experiences, and cinematic content. We create digital work that connects and leaves an impression."
                canonical="https://blueprospect.com/ourwork"
                openGraph={{
                    title: 'Our Work | Blue Prospect Portfolio',
                    description: 'Explore our portfolio of brand stories, web experiences, and cinematic content. We create digital work that connects and leaves an impression.',
                    url: 'https://blueprospect.com/ourwork',
                    images: [
                        {
                            url: 'https://blueprospect.com/images/portfolio-og.jpg',
                            width: 1200,
                            height: 630,
                            alt: 'Preview of Blue Prospect projects',
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
                        questionName: 'What kind of projects are featured in your portfolio?',
                        acceptedAnswerText:
                            'You’ll find a mix of brand videos, web experiences, storytelling pieces, and visual campaigns created across industries.',
                    },
                    {
                        questionName: 'Can I see examples of a project similar to mine?',
                        acceptedAnswerText:
                            'Definitely—just reach out and we’ll share work relevant to your goals or industry.',
                    },
                    {
                        questionName: 'Are all the projects on your site recent?',
                        acceptedAnswerText:
                            'We showcase a mix of recent and standout past projects to highlight our style, range, and growth over time.',
                    },
                ]}
            />
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
        </>
    )
}