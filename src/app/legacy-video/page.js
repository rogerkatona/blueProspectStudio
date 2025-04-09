'use client'; // This is a client component 👈🏽

import Link from "next/link";
import ConsultationOverlay from "@/app/components/consultation-overlay";
import {useState} from "react";
import dynamic from 'next/dynamic';

// Lazy-load NextSeo and FAQPageJsonLd on the client
const NextSeo = dynamic(() => import('next-seo').then(mod => mod.NextSeo), { ssr: false });
const FAQPageJsonLd = dynamic(() => import('next-seo').then(mod => mod.FAQPageJsonLd), { ssr: false });



export default function Legacy() {

    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
    const toggleOverlay = () => {
        setIsOverlayVisible(!isOverlayVisible);
    };

    return (
        <>
            <NextSeo
                title="Legacy Videos | Capture Family Stories in a Cinematic Film"
                description="Preserve your loved one’s voice, wisdom, and story with a professionally filmed Legacy Video. A timeless gift for generations to come."
                openGraph={{
                    title: 'Legacy Videos | Capture Family Stories in a Cinematic Film',
                    description:
                        "Preserve your loved one’s voice, wisdom, and story with a professionally filmed Legacy Video. A timeless gift for generations to come.",
                    url: 'https://blueprospect.com/legacy-video',
                    type: 'website',
                    images: [
                        {
                            url: 'https://blueprospect.com/image/background/hero-legacy-video.jpg', // replace with your actual share image
                            width: 1200,
                            height: 630,
                            alt: 'Legacy Video cover image',
                        },
                    ],
                }}
            />
            <FAQPageJsonLd
                mainEntity={[
                    {
                        questionName: 'What is a Legacy Video?',
                        acceptedAnswerText:
                            'A Legacy Video is a professionally filmed interview that captures a loved one’s voice, story, and life wisdom to preserve for future generations.',
                    },
                    {
                        questionName: 'Who are Legacy Videos for?',
                        acceptedAnswerText:
                            'Legacy Videos are ideal for families who want to preserve the essence of a parent, grandparent, or elder for future generations.',
                    },
                    {
                        questionName: 'How long is a Legacy Video?',
                        acceptedAnswerText:
                            'Each Legacy Video is typically 20–60 minutes depending on the package and content shared. Custom lengths are available.',
                    },
                ]}
            />
        <section className="mx-auto bg-white.100">
            <section
                className="relative text-white h-screen90vh flex items-center justify-center"
                style={{
                    backgroundImage: `url('/image/background/hero-legacy-video.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-legacy-sepia-600 bg-opacity-60"></div>

                {/* Content */}
                <div className="relative z-10 max-w-3xl text-center px-4 animate-fadeInUp">
                    <h1 className="text-6xl md:text-8xl font-bold mb-4 text-legacy-wheat-500">
                        Preserve Their Story. <br className="hidden md:block" />Pass Down Their Wisdom.
                    </h1>
                    <p className="md:text-xl text text-legacy-rose-300 mb-7 text-center leading-normal">
                        Legacy Videos are personal documentaries that capture the voice, memories, and essence of someone you love—so their story lives on for generations.
                    </p>
                    <Link href=''>
                        <button
                            onClick={toggleOverlay}
                            className="bg-legacy-ivory-400 hover:bg-legacy-rose-700 hover:text-legacy-sepia-100 text-xs text-legacy-sepia-700 uppercase px-4 py-3 rounded-lg md:ml-3 md:mt-0 mt-6 font-bold">
                            Schedule a free consultation
                        </button>
                    </Link>
                </div>
            </section>

            <section className="py-16 px-6 bg-legacy-ivory-200">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-semibold mb-6 text-center my-0">Some Stories Should Never Be Forgotten</h2>
                    <p className="text-lg leading-relaxed">There’s something sacred about hearing a loved one tell their story in their own voice—the laughter, the pauses, the way their eyes light up with a memory. Legacy Videos are more than interviews; they’re time capsules of presence, personality, and love.</p>
                    <p className="text-lg leading-relaxed mt-4">Whether it’s a grandparent sharing life lessons, a parent reflecting on their journey, or a couple celebrating a milestone anniversary, these videos become cherished keepsakes that only grow more meaningful with time.</p>
                </div>
            </section>

            <section className="bg-legacy-ivory-50 py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-semibold mb-6 text-center my-0">How It Works</h2>
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


            <section className="py-16 px-6 bg-legacy-ivory-200">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-semibold mb-10 text-center  my-0">Legacy Video Packages & Pricing</h2>
                    <p className="text-lg text-center">
                        More than just a video—this is a timeless gift, a conversation across generations, a way to keep the heart and soul of a loved one alive forever.
                    </p>
                    <div className="mb-16 text-center">
                        <Link href=''>
                            <button
                                onClick={toggleOverlay}
                                className="bg-legacy-ivory-400 hover:bg-legacy-rose-700 hover:text-legacy-sepia-100 text-xs text-legacy-sepia-700 uppercase px-4 py-3 rounded-lg md:ml-3 md:mt-0 mt-6 font-bold">
                                Schedule a free consultation
                            </button>
                        </Link>
                    </div>

                    <div className="space-y-12">
                        {/* Essential Legacy Film */}
                        <div className="bg-legacy-ivory-50 border p-8 rounded-lg shadow">
                            <h3 className="text-2xl font-bold mb-2">The Essential Legacy Film</h3>
                            <p className="text-lg text-gray-600 mb-4 italic">$3,500 – A heartfelt, intimate video to ensure their story is never lost.</p>
                            <p className="text-lg mb-4">A beautifully intimate, one-of-a-kind film capturing the heart, wisdom, and essence of your loved one, preserving their voice and presence for future generations.</p>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="mr-3 text-lg text-legacy-sepia-800">•</span>
                                    <span className="text-lg text-legacy-sepia-800"><strong>Pre-Filming Connection Time</strong> – Understanding their story and comfort zone</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-lg text-legacy-sepia-800">•</span>
                                    <span className="text-lg text-legacy-sepia-800"><strong>One Full Day of Filming</strong> – In a familiar, relaxed environment</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-lg text-legacy-sepia-800">•</span>
                                    <span className="text-lg text-legacy-sepia-800"><strong>Guided Interview</strong> – Thoughtful questions to draw out reflections</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-lg text-legacy-sepia-800">•</span>
                                    <span className="text-lg text-legacy-sepia-800"><strong>Authentic Moments Captured</strong> – Laughter, expression, and nuance</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-lg text-legacy-sepia-800">•</span>
                                    <span className="text-lg text-legacy-sepia-800"><strong>20–30 Minute Edited Film</strong> – Gentle pacing, soft music, clean transitions</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-lg text-legacy-sepia-800">•</span>
                                    <span className="text-lg text-legacy-sepia-800"><strong>Private Digital Delivery</strong> – A high-quality file ready to share</span>
                                </li>
                            </ul>
                        </div>

                        {/* Timeless Heirloom Film */}
                        <div className="bg-legacy-ivory-50 border p-8 rounded-lg shadow">
                            <h3 className="text-2xl font-bold mb-2">The Timeless Heirloom Film</h3>
                            <p className="text-lg text-gray-600 mb-4 italic">$6,000 – A deeper, more immersive storytelling experience.</p>
                            <p className="text-lg mb-4">An expanded legacy film incorporating rich storytelling, personal artifacts, and a deeper visual experience that connects generations through memory and meaning.</p>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="mr-3 text-lg text-legacy-sepia-800">•</span>
                                    <span className="text-lg text-legacy-sepia-800">Includes everything in <strong>The Essential Legacy Film</strong></span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-lg text-legacy-sepia-800">•</span>
                                    <span className="text-lg text-legacy-sepia-800"><strong>Filming in Two Locations</strong> – Adds visual depth and movement</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-lg text-legacy-sepia-800">•</span>
                                    <span className="text-lg text-legacy-sepia-800"><strong>Photo & Vintage Footage Integration</strong> – Merges past with present</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-lg text-legacy-sepia-800">•</span>
                                    <span className="text-lg text-legacy-sepia-800"><strong>Meaningful Object Close-Ups</strong> – Heirlooms, notes, or mementos</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-lg text-legacy-sepia-800">•</span>
                                    <span className="text-lg text-legacy-sepia-800"><strong>Extended Interview & Bonus Messages</strong> – For future milestones</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-lg text-legacy-sepia-800">•</span>
                                    <span className="text-lg text-legacy-sepia-800"><strong>Custom Titles & Personal Touches</strong> – From handwriting to music</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-lg text-legacy-sepia-800">•</span>
                                    <span className="text-lg text-legacy-sepia-800"><strong>Premium Online Viewing</strong> – Private, password-protected link</span>
                                </li>
                            </ul>
                        </div>

                        {/* Legacy Documentary */}
                        <div className="bg-legacy-ivory-50 border p-8 rounded-lg shadow">
                            <h3 className="text-2xl font-bold mb-2">The Legacy Documentary</h3>
                            <p className="text-lg text-gray-600 mb-4 italic">$9,500 – A cinematic heirloom film that ensures their presence, wisdom, and love live on forever.</p>
                            <p className="text-lg mb-4">A full-scale documentary-style film capturing the essence of a life well-lived. This production weaves together interviews, visuals, and narrative to create something unforgettable.</p>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="mr-3 text-lg text-legacy-sepia-800">•</span>
                                    <span className="text-lg text-legacy-sepia-800">Includes everything in <strong>The Timeless Heirloom Film</strong></span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-lg text-legacy-sepia-800">•</span>
                                    <span className="text-lg text-legacy-sepia-800"><strong>Filming Over Multiple Days</strong> – For a complete portrait</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-lg text-legacy-sepia-800">•</span>
                                    <span className="text-lg text-legacy-sepia-800"><strong>Multi-Camera Setup</strong> – Cinematic angles and movement</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-lg text-legacy-sepia-800">•</span>
                                    <span className="text-lg text-legacy-sepia-800"><strong>Emotional B-Roll & Candid Moments</strong> – Daily life captured with care</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-lg text-legacy-sepia-800">•</span>
                                    <span className="text-lg text-legacy-sepia-800"><strong>Handcrafted Narrative & Music Score</strong> – Deeply personal and evocative</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-lg text-legacy-sepia-800">•</span>
                                    <span className="text-lg text-legacy-sepia-800"><strong>Future Messages</strong> – Personal recordings for weddings, milestones, and more</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-lg text-legacy-sepia-800">•</span>
                                    <span className="text-lg text-legacy-sepia-800"><strong>Deluxe Archival Storage</strong> – USB keepsake, cloud delivery, DVD/Blu-ray upon request</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-16">
                        <h4 className="text-2xl font-semibold mb-4 text-legacy-sepia-700">Optional Enhancements</h4>
                        <dl className="space-y-6 text-legacy-sepia-800 text-lg max-w-5xl mx-auto">
                            <div>
                                <dt className="font-semibold">Custom Hardcover Memory Book <span className="font-normal text-gray-600">(+ $750)</span></dt>
                                <dd>Includes favorite quotes, family photos, and a scannable QR code linking to the video</dd>
                            </div>
                            <div>
                                <dt className="font-semibold">Professional Voiceover <span className="font-normal text-gray-600">(+ $500)</span></dt>
                                <dd>A warm narrative to thread the story together</dd>
                            </div>
                            <div>
                                <dt className="font-semibold">Family Cameo Clips <span className="font-normal text-gray-600">(+ $600)</span></dt>
                                <dd>Short video messages from loved ones</dd>
                            </div>
                            <div>
                                <dt className="font-semibold">Extended Feature-Length Film <span className="font-normal text-gray-600">(+ $1,000)</span></dt>
                                <dd>A longer version with more story depth</dd>
                            </div>
                            <div>
                                <dt className="font-semibold">Custom Music Score <span className="font-normal text-gray-600">(+ $800)</span></dt>
                                <dd>An instrumental based on their favorite song</dd>
                            </div>
                            <div>
                                <dt className="font-semibold">On-Location Family Interviews <span className="font-normal text-gray-600">(+ $1,500)</span></dt>
                                <dd>Multi-generational stories woven in</dd>
                            </div>
                            <div>
                                <dt className="font-semibold">Commemorative Video Book <span className="font-normal text-gray-600">(+ $1,200)</span></dt>
                                <dd>A physical book with a built-in screen that plays the film</dd>
                            </div>
                        </dl>
                    </div>

                </div>
            </section>



            <section className="bg-legacy-rose-700 py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-semibold mb-10 text-center text-legacy-ivory-400 my-0">Frequently Asked Questions</h2>
                    <dl className="space-y-6 text-legacy-ivory-100 text-lg max-w-5xl mx-auto">
                        <div>
                            <dt className="font-semibold">How long does it take?</dt>
                            <dd className="text-legacy-ivory-300">From first conversation to final delivery, typically 3–4 weeks.</dd>
                        </div>
                        <div>
                            <dt className="font-semibold">What if my loved one is camera shy?</dt>
                            <dd className="text-legacy-ivory-300">That’s totally normal. I create a calm, warm environment. Most people open up beautifully once we get started.</dd>
                        </div>
                        <div>
                            <dt className="font-semibold">Do you travel?</dt>
                            <dd className="text-legacy-ivory-300">Yes, I’m based in San Diego, CA, but I’m happy to travel. Let’s talk about the details.</dd>
                        </div>
                        <div>
                            <dt className="font-semibold">Can I be involved in the questions?</dt>
                            <dd className="text-legacy-ivory-300">Absolutely. I’ll work with you to craft thoughtful prompts that bring out meaningful stories.</dd>
                        </div>
                    </dl>
                </div>
            </section>

            <section id="contact" className="py-16 px-6 text-center bg-legacy-ivory-50">
                <div className="max-w-4xl mx-auto ">
                    <h2 className="text-3xl font-semibold mb-4 my-0">Let’s Preserve a Story That Matters</h2>
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
            <ConsultationOverlay isOverlayVisible={isOverlayVisible} toggleOverlay={toggleOverlay} />
        </>
    )
}