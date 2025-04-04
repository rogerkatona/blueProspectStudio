"use client";

import faqItems from "../data/faqItems";
import Link from "next/link";

export default function FAQ({ type = "default", toggleModal = () => {} }) {
    const filteredItems = faqItems.filter((item) => item.type === type);

    return (
        <section className="bg-gray py-12 md:px-12">
                {filteredItems.map(item => (
                    <div key={item.id} className="max-w-5xl mx-auto">

                        {/* Section Title */}
                        <h2 className="font-bebasNeue text-5xl text-gray.800 uppercase pb-6 text-center m-0">
                            FAQs
                        </h2>

                        {/* Questions List - left aligned */}
                        <div className="text-left space-y-6 px-4 sm:px-0">
                            {item.questions.map((q, index) => (
                                <div key={index}>
                                    <h3 className="font-raleway text-2xl text-gray.700 font-medium">
                                        {q.question}
                                    </h3>
                                    <p className="text-gray.600">{q.answer}</p>
                                </div>
                            ))}
                        </div>

                        {/* Call to action */}
                        <div className="text-center mt-10">
                            <p className="font-raleway text-xl text-gray.700 font-bold text-center">{item.actionText}</p>
                            <button
                                onClick={toggleModal}
                                className="bg-darkBlue.500 hover:bg-darkBlue.200 hover:text-legacy-ivory-300 text-xs text-legacy-ivory-100 uppercase px-4 py-3 rounded-lg font-bold "
                            >
                                {item.buttonLabel}
                            </button>
                        </div>
                    </div>
                ))}
        </section>
    );
}
