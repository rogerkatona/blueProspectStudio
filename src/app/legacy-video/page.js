"use client"; // This is a client component 👈🏽

import Link from "next/link";
import ContactOverlay from "@/app/components/contact-overlay";
import {useState} from "react";

export default function Legacy() {

    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
    const toggleOverlay = () => {
        setIsOverlayVisible(!isOverlayVisible);
    };

    return (
        <>
        <section className="mx-auto pb-12 bg-white.100">

            <section
                className="relative bg-legacy-sepia-600 text-white h-screen80vh flex items-center justify-center"
                style={{
                    backgroundImage: `url('/image/background/hero-legacy-video.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-legacy-sepia-600 bg-opacity-70"></div>

                {/* Content */}
                <div className="relative z-10 max-w-3xl text-center px-4">
                    <h1 className="text-8xl md:text-7xl font-bold mb-6 text-legacy-wheat-500">
                        Preserve Their Story. <br className="hidden md:block" />Pass Down Their Wisdom.
                    </h1>
                    <p className="md:text text-xl text-legacy-rose-500 mb-8 text-center leading-normal">
                        Legacy Videos are personal documentaries that capture the voice, memories, and essence of someone you love—so their story lives on for generations.
                    </p>
                    <Link href=''>
                        <button
                            onClick={toggleOverlay}
                            className="bg-legacy-ivory-400 hover:bg-legacy-rose-700 hover:text-legacy-sepia-100 text-xs text-legacy-sepia-700 uppercase px-4 py-3 rounded-lg md:ml-3 md:mt-0 mt-6">
                            Schedule a free consultation
                        </button>
                    </Link>
                </div>
            </section>

            <section className="py-20 px-6 bg-legacy-ivory-200">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-semibold mb-6 text-center">Some Stories Should Never Be Forgotten</h2>
                    <p className="text-lg leading-relaxed">There’s something sacred about hearing a loved one tell their story in their own voice—the laughter, the pauses, the way their eyes light up with a memory. Legacy Videos are more than interviews; they’re time capsules of presence, personality, and love.</p>
                    <p className="text-lg leading-relaxed mt-4">Whether it’s a grandparent sharing life lessons, a parent reflecting on their journey, or a couple celebrating a milestone anniversary, these videos become cherished keepsakes that only grow more meaningful with time.</p>
                </div>
            </section>

            <section className="bg-legacy-ivory-50 py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-semibold mb-10 text-center">How It Works</h2>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold">1. Discovery Call</h3>
                            <p className="mt-2 text-lg">We start with a short, pressure-free conversation to understand your goals and who the video is for.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">2. Interview & Filming</h3>
                            <p className="mt-2 text-lg">I guide the conversation with warmth and curiosity. The filming happens in a relaxed setting—usually their home—so they feel comfortable and natural.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">3. Editing & Delivery</h3>
                            <p className="mt-2 text-lg">The footage is carefully edited into a polished video that highlights their personality, voice, and story. You'll receive a digital version and, if desired, a keepsake copy.</p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-20 px-6 bg-legacy-ivory-200">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-semibold mb-10 text-center">Legacy Video Packages & Pricing</h2>
                    <p className="text-lg text-center mb-16">
                        More than just a video—this is a timeless gift, a conversation across generations, a way to keep the heart and soul of a loved one alive forever.
                    </p>

                    <div className="space-y-16">

                        <div className="bg-legacy-ivory-50 border p-8 rounded-lg shadow">
                            <h3 className="text-2xl font-bold mb-2">The Essential Legacy Film</h3>
                            <p className="text-lg text-gray-600 mb-4 italic">$2,500 – A heartfelt, intimate video to ensure their story is never lost.</p>
                            <p className="text-lg mb-4">A beautifully intimate, one-of-a-kind film capturing the heart, wisdom, and essence of your loved one, preserving their voice and presence for future generations.</p>
                            <ul className="list-disc list-inside text-lg space-y-2 text-legacy-sepia-800">
                                <li><strong>Pre-Filming Connection Time</strong> – Understanding their story and comfort zone</li>
                                <li><strong>One Full Day of Filming</strong> – In a familiar, relaxed environment</li>
                                <li><strong>Guided Interview</strong> – Thoughtful questions to draw out reflections</li>
                                <li><strong>Authentic Moments Captured</strong> – Laughter, expression, and nuance</li>
                                <li><strong>20–30 Minute Edited Film</strong> – Gentle pacing, soft music, clean transitions</li>
                                <li><strong>Private Digital Delivery</strong> – A high-quality file ready to share</li>
                            </ul>
                        </div>

                        <div className="bg-legacy-ivory-50 border p-8 rounded-lg shadow">
                            <h3 className="text-2xl font-bold mb-2">The Timeless Heirloom Film</h3>
                            <p className="text-lg text-gray-600 mb-4 italic">$4,500 – A deeper, more immersive storytelling experience.</p>
                            <p className="text-lg mb-4">An expanded legacy film incorporating rich storytelling, personal artifacts, and a deeper visual experience that connects generations through memory and meaning.</p>
                            <ul className="list-disc list-inside text-lg space-y-2 text-legacy-sepia-800">
                                <li>Includes everything in <strong>The Essential Legacy Film</strong></li>
                                <li><strong>Filming in Two Locations</strong> – Adds visual depth and movement</li>
                                <li><strong>Photo & Vintage Footage Integration</strong> – Merges past with present</li>
                                <li><strong>Meaningful Object Close-Ups</strong> – Heirlooms, notes, or mementos</li>
                                <li><strong>Extended Interview & Bonus Messages</strong> – For future milestones</li>
                                <li><strong>Custom Titles & Personal Touches</strong> – From handwriting to music</li>
                                <li><strong>Premium Online Viewing</strong> – Private, password-protected link</li>
                            </ul>
                        </div>

                        <div className="bg-legacy-ivory-50 border p-8 rounded-lg shadow">
                            <h3 className="text-2xl font-bold mb-2">The Legacy Documentary</h3>
                            <p className="text-lg text-gray-600 mb-4 italic">$7,500 – A cinematic heirloom film that ensures their presence, wisdom, and love live on forever.</p>
                            <p className="text-lg mb-4">A full-scale documentary-style film capturing the essence of a life well-lived. This production weaves together interviews, visuals, and narrative to create something unforgettable.</p>
                            <ul className="list-disc list-inside text-lg space-y-2 text-legacy-sepia-800">
                                <li>Includes everything in <strong>The Timeless Heirloom Film</strong></li>
                                <li><strong>Filming Over Multiple Days</strong> – For a complete portrait</li>
                                <li><strong>Multi-Camera Setup</strong> – Cinematic angles and movement</li>
                                <li><strong>Emotional B-Roll & Candid Moments</strong> – Daily life captured with care</li>
                                <li><strong>Handcrafted Narrative & Music Score</strong> – Deeply personal and evocative</li>
                                <li><strong>Future Messages</strong> – Personal recordings for weddings, milestones, and more</li>
                                <li><strong>Deluxe Archival Storage</strong> – USB keepsake, cloud delivery, DVD/Blu-ray upon request</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-20">
                        <h4 className="text-2xl font-semibold mb-4 text-legacy-sepia-700">Optional Enhancements</h4>
                        <ul className="list-disc list-inside text-lg space-y-2 max-w-5xl mx-auto text-legacy-sepia-800">
                            <li><strong>Custom Hardcover Memory Book</strong> (+$750) – Includes favorite quotes, family photos, and a scannable QR code linking to the video</li>
                            <li><strong>Professional Voiceover</strong> (+$500) – A warm narrative to thread the story together</li>
                            <li><strong>Family Cameo Clips</strong> (+$600) – Short video messages from loved ones</li>
                            <li><strong>Extended Feature-Length Film</strong> (+$1,000) – A longer version with more story depth</li>
                            <li><strong>Custom Music Score</strong> (+$800) – An instrumental based on their favorite song</li>
                            <li><strong>On-Location Family Interviews</strong> (+$1,500) – Multi-generational stories woven in</li>
                            <li><strong>Commemorative Video Book</strong> (+$1,200) – A physical book with a built-in screen that plays the film</li>
                        </ul>
                    </div>
                </div>
            </section>



            <section className="bg-legacy-rose-700 py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-semibold mb-10 text-center text-legacy-ivory-400">Frequently Asked Questions</h2>
                    <div className="space-y-6 text-lg leading-snug">
                        <div>
                            <p className="font-medium text-legacy-ivory-100 mb-0">How long does it take?</p>
                            <p className="text-legacy-ivory-400">From first conversation to final delivery, typically 3–4 weeks.</p>
                        </div>
                        <div>
                            <p className="font-medium text-legacy-ivory-100 mb-0">What if my loved one is camera shy?</p>
                            <p className="text-legacy-ivory-400">That’s totally normal. I create a calm, warm environment. Most people open up beautifully once we get started.</p>
                        </div>
                        <div>
                            <p className="font-medium text-legacy-ivory-100 mb-0">Do you travel?</p>
                            <p className="text-legacy-ivory-400">Yes, I’m based in San Diego, CA, but I’m happy to travel. Let’s talk about the details.</p>
                        </div>
                        <div>
                            <p className="font-medium text-legacy-ivory-100 mb-0">Can I be involved in the questions?</p>
                            <p className="text-legacy-ivory-400">Absolutely. I’ll work with you to craft thoughtful prompts that bring out meaningful stories.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="py-20 px-6 text-center bg-legacy-ivory-50">
                <div className="max-w-4xl mx-auto ">
                    <h2 className="text-3xl font-semibold mb-4">Let’s Preserve a Story That Matters</h2>
                    <p className="text-lg mb-6 text-center">These videos are gifts—not just for now, but for decades to come. If someone in your life has a story worth telling (and they do), let’s capture it together.</p>
                    <Link href=''>
                        <button
                            onClick={toggleOverlay}
                            className="bg-legacy-ivory-800 hover:bg-legacy-rose-400 hover:text-legacy-sepia-900 text-xs text-legacy-sepia-50 uppercase px-4 py-3 rounded-lg md:ml-3 md:mt-0 mt-6">
                            Start the Conversation
                        </button>
                    </Link>
                </div>
            </section>

    </section>
            <ContactOverlay isOverlayVisible={isOverlayVisible} toggleOverlay={toggleOverlay} />
        </>
    )
}