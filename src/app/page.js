"use client"; // This is a client component 👈🏽

import HeroIndex from "@/app/components/hero_index";
import Quote from "@/app/components/quote";
import FeatureIndex from "@/app/components/feature-index";
import Promo from "@/app/components/promo";
import GridMediaIndex from "@/app/components/grid-media-index";
import ClientLogos from "@/app/components/client-logos";
import Offerings from "@/app/components/offerings";
import ContactOverlay from "@/app/components/contact-overlay";
import {useState} from "react";

export default function Home() {

    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
    const toggleOverlay = () => {
        setIsOverlayVisible(!isOverlayVisible);
    };

  return (
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
  )
}
