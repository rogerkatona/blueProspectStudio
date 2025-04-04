'use client'; // This is a client component 👈🏽

import HeroIndex from "@/app/components/hero_index";
import Quote from "@/app/components/quote";
import FeatureIndex from "@/app/components/feature-index";
import Promo from "@/app/components/promo";
import GridMediaIndex from "@/app/components/grid-media-index";
import ClientLogos from "@/app/components/client-logos";
import Offerings from "@/app/components/offerings";
import ContactOverlay from "@/app/components/contact-overlay";
import {useState} from "react";
import dynamic from 'next/dynamic';

// Lazy-load SEO components on the client
const NextSeo = dynamic(() => import('next-seo').then(mod => mod.NextSeo), { ssr: false });
const FAQPageJsonLd = dynamic(() => import('next-seo').then(mod => mod.FAQPageJsonLd), { ssr: false });
const LogoJsonLd = dynamic(() => import('next-seo').then(mod => mod.LogoJsonLd), { ssr: false });


export default function Home() {

    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
    const toggleOverlay = () => {
        setIsOverlayVisible(!isOverlayVisible);
    };

  return (
      <>
          <NextSeo
              title="Blue Prospect | Web Design, Video Production & Legacy Storytelling"
              description="Creative services built to connect — from custom websites and cinematic video to deeply meaningful Legacy Videos. Based in San Diego, serving nationwide."
              canonical="https://blueprospect.com"
              openGraph={{
                  title: 'Blue Prospect | Web Design, Video Production & Legacy Storytelling',
                  description:
                      'Creative services built to connect — from custom websites and cinematic video to deeply meaningful Legacy Videos. Based in San Diego, serving nationwide.',
                  url: 'https://blueprospect.com',
                  type: 'website',
                  images: [
                      {
                          url: 'https://blueprospect.com/images/home-og.jpg',
                          width: 1200,
                          height: 630,
                          alt: 'Blue Prospect homepage hero image',
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
                      questionName: 'What services does Blue Prospect offer?',
                      acceptedAnswerText:
                          'Blue Prospect offers custom web design, cinematic video production, and emotional storytelling through Legacy Videos. We help clients bring ideas to life across digital platforms.',
                  },
                  {
                      questionName: 'Where is Blue Prospect based?',
                      acceptedAnswerText:
                          'Blue Prospect is based in San Diego, California — but we work with clients across the U.S. for both digital and video-based services.',
                  },
                  {
                      questionName: 'What is a Legacy Video?',
                      acceptedAnswerText:
                          'A Legacy Video is a professionally filmed interview that captures the voice, memories, and life story of a loved one to preserve for future generations.',
                  },
              ]}
          />
          <LogoJsonLd
              logo="https://blueprospect.com/image/logo/logo-blueprospect.com" // use your actual logo URL
              url="https://blueprospect.com"
          />
        <main>
            <HeroIndex toggleModal={toggleOverlay} />
            <ClientLogos/>
            <Promo id={0}/>
            <Offerings type="services"/>
            <FeatureIndex  featured="true" type="work"/>
            <Quote id={0}/>
            <FeatureIndex  featured="true" type="process"/>
            <GridMediaIndex type="media"/>
            <Promo id={1}/>
            <ContactOverlay isOverlayVisible={isOverlayVisible} toggleOverlay={toggleOverlay} />
        </main>
      </>
  )
}
