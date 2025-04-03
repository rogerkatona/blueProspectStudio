"use client"; // This is a client component 👈🏽

import Link from "next/link";
import {useState} from "react";
import ContactOverlay from "@/app/components/contact-overlay";
import Simple from "@/app/components/campaign/simple";
import CampaignHero from "@/app/components/campaign/hero";

export default function capturingMoments() {

    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
    const toggleOverlay = () => {
        setIsOverlayVisible(!isOverlayVisible);
    };

    return (
        <>
            <div>
                <CampaignHero toggleModal={toggleOverlay} />
                <Simple type="campaign"/>
                <ContactOverlay isOverlayVisible={isOverlayVisible} toggleOverlay={toggleOverlay} />
            </div>
        </>
    )
}