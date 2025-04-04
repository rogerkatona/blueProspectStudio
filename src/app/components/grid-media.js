'use client';

import gridItems from "../data/gridItems";
import Date from "./date";
import Image from "next/image";

export default function GridMedia(props) {

    return (
        <div className="md:px-12 px-6 pt-12 ">
            <section  className="max-w-7xl mx-auto">
                <div>
                    <div className='font-raleway text-4xl text-gray.800'>
                        Check out our work
                    </div>
                </div>
            </section>
            <section>
                <div  className="flex pt-8">
                    <div className="grid xl:grid-cols-3 gap-2 md:grid-cols-2 grid-cols-1 max-w-7xl mx-auto">
                        {gridItems
                            .filter(filteredItem => filteredItem.type === props.type)
                            .sort((a, b) => {
                                if (a.date < b.date) {
                                    return 1
                                } else {
                                    return -1
                                }
                            })
                            .map(gridItems => (

                                <div key={gridItems.id} className="">

                                    <div className="relative group">
                                        <Image
                                            src={gridItems.src}
                                            alt={gridItems.alt}
                                            width={800}
                                            height={600}
                                            className="w-full h-auto transition-transform transform-gpu group-hover:grayscale"
                                        />
                                        {/* Add overlay or other elements for click effect */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 hover:border-raspberry hover:border-b-8">

                                            <div className="absolute bottom-0 bg-raspberryBlack bg-opacity-60 w-full p-4 hover:bg-opacity-80">
                                                <a
                                                    href={gridItems.buttonHref}
                                                    target={gridItems.target}
                                                    rel="noreferrer"
                                                    className="hover:text-bg50">
                                                    <div className="text-bg100">{gridItems.title}</div>

                                                <div className="uppercase text-xs text-bg200">
                                                    <Date dateString={gridItems.date} />
                                                </div>
                                                </a>
                                                </div>

                                        </div>
                                    </div>


                                </div>
                        ))}
                    </div>
                </div>
             </section>
        </div>
    )
}






