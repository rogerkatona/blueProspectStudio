'use client'; // This is a client component 👈🏽

import blogItems from "../data/blogItems";
import Date from "@/app/components/date";

export default function BlogItem(props) {

    let filteredItem = blogItems.filter(function (item){
        return item.type === props.type
    });
    return (
        <>
                <section className="flex flex-col md:px-12 px-6 bg-white.100 pb-12">
                    {
                        filteredItem
                            .sort((a, b) => {
                                if (a.date < b.date) {
                                    return 1
                                } else {
                                    return -1
                                }
                            })
                            .map(item => (
                                <section key={item.id}>
                                    <div
                                        className={`flex lg:flex-row flex-col max-w-7xl mx-auto pt-12 ${item.id % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>

                                        <div className="">
                                            <img
                                                className=""
                                                src={item.src}
                                                width={1000}
                                                alt={item.alt}
                                            />
                                        </div>
                                        <div className={`${item.id % 2 === 0 ? 'lg:pr-12 lg:pt-0 pt-12' : 'lg:pl-12 lg:pt-0 pt-12'} lg:w-4/5 w-full `}>
                                            <div className='font-bebasNeue text-4xl text-gray.500 border-b'>{item.number}</div>
                                            <div className='font-raleway text-4xl text-gray.900 pt-4'>{item.title}</div>
                                            <div className='text-gray.500 uppercase text-xs pt-2 '>
                                                <Date dateString={item.date} />
                                            </div>
                                            <div className='font-raleway text-gray.500 py-4'>{item.description}</div>
                                            <div className={`${item.isButtonActive === 'true' ? 'block' : 'hidden'} pt-0`}>
                                                <a
                                                    href={item.buttonHref}>
                                                    <button className="hover:bg-raspberryBlack hover:text-sand text-xs text-raspberryBlack uppercase px-4 py-3 border border-raspberryBlack rounded-lg">
                                                        {item.buttonText}
                                                    </button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            ))
                    }

                </section>
        </>
    )
}






