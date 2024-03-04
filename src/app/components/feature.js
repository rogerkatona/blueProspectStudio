import serviceItems from "../data/serviceItems";
import Link from "next/link";
import Date from "@/app/components/date";

export default function Feature(props) {

    let filteredItem = serviceItems.filter(function (item){
        return item.type === props.type
    });

    return (
        <>
                {filteredItem
                    .filter(filteredItem => filteredItem.type === props.type)
                    .map(filteredItem => (

                        <section
                            key={filteredItem.id}
                            className="md:px-12 px-6 pt-12 bg-white.100">

                            <div className={`flex flex-col max-w-7xl mx-auto ${filteredItem.featuredID % 2 !== 0  ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                                <div className=' '>
                                    <img
                                        src={filteredItem.src}
                                        width={1750}
                                        alt={'Featured Article'}
                                    />
                                </div>
                                <div className={`lg:pt-0 pt-6 ${filteredItem.featuredID % 2 !== 0  ? 'lg:pl-6' : 'lg:pr-6'}`}>
                                    <div className="">
                                        <div className='font-bebasNeue text-4xl text-gray.500 border-b'>{filteredItem.number}</div>
                                        <div className='font-raleway text-4xl text-gray.900 pt-4'>{filteredItem.title}</div>
                                        <div className="uppercase text-xs text-bg300">
                                            <Date dateString={filteredItem.date} />
                                        </div>
                                        <div className='text-gray.500 pb-6'>{filteredItem.description}</div>
                                        <div className="flex flex-row">
                                            <div className={`${filteredItem.isButtonActive === 'true'  ? 'block' : 'hidden'}  pr-2`}>
                                                <a
                                                    target={"_blank"}
                                                    href={filteredItem.featuredHREF}>
                                                    <button className="hover:bg-raspberryBlack hover:text-sand text-xs text-raspberryBlack uppercase px-4 py-3 border border-raspberryBlack rounded-lg">
                                                        {filteredItem.featuredButtonLabel}
                                                    </button>
                                                </a>
                                            </div>
                                         </div>
                                    </div>

                                </div>
                            </div>
                        </section>
                    ))}
        </>
    )
}






