'use client'; // This is a client component 👈🏽

import Promo from "@/app/components/promo";
import Hero from "@/app/components/hero";
import Service from "@/app/components/service";
import dynamic from 'next/dynamic';

const NextSeo = dynamic(() => import('next-seo').then(mod => mod.NextSeo), { ssr: false });
const FAQPageJsonLd = dynamic(() => import('next-seo').then(mod => mod.FAQPageJsonLd), { ssr: false });



export default function Services() {
    return (
        <>
            <NextSeo
                title="Services | Blue Prospect"
                description="From custom websites to cinematic video production and scroll-stopping digital content, we bring your vision to life with creativity and precision."
                canonical="https://blueprospect.com/services"
                openGraph={{
                    title: 'Services | Blue Prospect',
                    description: 'From custom websites to cinematic video production and scroll-stopping digital content, we bring your vision to life with creativity and precision.',
                    url: 'https://blueprospect.com/services',
                    images: [
                        {
                            url: 'https://blueprospect.com/images/services-og.jpg',
                            width: 1200,
                            height: 630,
                            alt: 'Blue Prospect services preview',
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
                        questionName: 'What types of services does Blue Prospect offer?',
                        acceptedAnswerText:
                            'We offer web design and development, video production, digital content creation, and brand storytelling—crafted to connect and convert.',
                    },
                    {
                        questionName: 'Can you handle both design and development?',
                        acceptedAnswerText:
                            'Yes! We deliver end-to-end solutions—from strategy and visual design to responsive, high-performance builds.',
                    },
                    {
                        questionName: 'Do you offer content creation for social media?',
                        acceptedAnswerText:
                            'Absolutely. We create scroll-stopping visuals, videos, and digital assets tailored to your brand and audience.',
                    },
                ]}
            />
            <section className="mx-auto pb-12">
               <div
                className="relative text-white h-screen90vh flex items-center justify-center"
                style={{
                    backgroundImage: `url('/image/background/hero-services.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                >
                <div className="absolute z-0 inset-0 bg-darkBlue.600 bg-opacity-70"></div>
                <Hero id={2}/>
               </div>
                <Service type="service"/>
                <Promo id={1}/>
            </section>
        </>
    )
}