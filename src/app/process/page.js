'use client'; // This is a client component 👈🏽

import Promo from "@/app/components/promo";
import Hero from "@/app/components/hero";
import Service from "@/app/components/service";
import dynamic from 'next/dynamic';

const NextSeo = dynamic(() => import('next-seo').then(mod => mod.NextSeo), { ssr: false });
const FAQPageJsonLd = dynamic(() => import('next-seo').then(mod => mod.FAQPageJsonLd), { ssr: false });



export default function Process() {
    return (
        <>
            <NextSeo
                title="Why Blue Prospect | A Studio That Gets It"
                description="We combine heart, craft, and strategy to deliver digital work that stands out and stands for something. See what sets us apart."
                canonical="https://blueprospect.com/why-blueprospect"
                openGraph={{
                    title: 'Why Blue Prospect | A Studio That Gets It',
                    description: 'We combine heart, craft, and strategy to deliver digital work that stands out and stands for something. See what sets us apart.',
                    url: 'https://blueprospect.com/why-blueprospect',
                    images: [
                        {
                            url: 'https://blueprospect.com/images/why-og.jpg',
                            width: 1200,
                            height: 630,
                            alt: 'Creative process and collaboration at Blue Prospect',
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
                        questionName: 'Why should we choose Blue Prospect over a traditional agency?',
                        acceptedAnswerText:
                            'We’re nimble, passionate, and personal. You get agency-level quality without the red tape or overhead.',
                    },
                    {
                        questionName: 'What kind of clients do you work with?',
                        acceptedAnswerText:
                            'We work with purpose-driven businesses, creative professionals, and families who want meaningful, lasting content.',
                    },
                    {
                        questionName: 'Do you take on small or one-off projects?',
                        acceptedAnswerText:
                            'Yes, we offer flexible engagement options for projects big or small—as long as it’s a good creative fit.',
                    },
                ]}
            />
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