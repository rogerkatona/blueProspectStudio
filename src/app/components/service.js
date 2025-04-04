'use client';

import serviceItems from "../data/serviceItems";
import Link from "next/link";

export default function Service(props) {

    let filteredItem = serviceItems.filter(function (item){
        return item.type === props.type
    });

    return (
        <>
                <section className="flex flex-col md:px-12 px-6 bg-white.100 pb-12">
                    {filteredItem
                        .filter(filteredItem => filteredItem.featured === "false")
                        .map(filteredItem => (
                            <section key={filteredItem.id}>
                                <div
                                    className={`flex lg:flex-row flex-col max-w-7xl mx-auto pt-12 ${filteredItem.id % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>

                                    <div>
                                        <img
                                            src={filteredItem.src}
                                            width={1000}
                                            alt={filteredItem.alt}
                                        />
                                    </div>

                                    <div className={`${filteredItem.id % 2 === 0 ? 'lg:pr-12 lg:pt-0 pt-6' : 'lg:pl-12 lg:pt-0 pt-6'} lg:w-4/5 w-full`}>
                                        <div className='font-bebasNeue text-4xl text-gray.500 border-b'>{filteredItem.number}</div>
                                        <div className='font-raleway text-6xl text-gray.900 pt-4'>{filteredItem.title}</div>
                                        <ul className="text-left list-disc pt-2 text-gray.500 pl-4">
                                            {filteredItem.list.map((listItem, index) => (
                                                <li key={`${filteredItem.id}-${index}`}>
                                                    {listItem}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className={`${filteredItem.isButtonActive === 'true' ? 'block' : 'hidden'} pt-0`}>
                                            <Link href={filteredItem.buttonHref}>
              <span className="bg-newYellow.800 hover:bg-newYellow.900 hover:text-gray.100 text-xs text-gray.100 uppercase px-4 py-3 rounded-lg">
                {filteredItem.buttonText}
              </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        ))}

                </section>
        </>
    )
}






