"use client"; // This is a client component 👈🏽

import HeroIndex from "@/app/components/hero_index";
import Quote from "@/app/components/quote";
import FeatureIndex from "@/app/components/feature-index";
import Promo from "@/app/components/promo";
import GridMediaIndex from "@/app/components/grid-media-index";
import ClientLogos from "@/app/components/client-logos";
import Offerings from "@/app/components/offerings";

export default function Home() {
  return (
    <main>
        <HeroIndex/>
        <ClientLogos/>
        <Promo id={0}/>
        <Offerings type="services"/>

        <FeatureIndex  featured="true" type="work"/>
        <Quote id={0}/>
        <FeatureIndex  featured="true" type="process"/>
        <GridMediaIndex type="media"/>
        <Promo id={1}/>
    </main>
  )
}
