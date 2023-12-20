import serviceItems from "../data/serviceItems";
import Link from "next/link";
import Date from "@/app/components/date";

export default function FeatureIndex(props) {

    let filteredItem = serviceItems.filter(function (item){
        return item.featured === props.featured
    });

    return (
        <>
                {filteredItem
                    .filter(filteredItem => filteredItem.type === props.type)
                    .map(filteredItem => (

                        <section
                            key={filteredItem.id}
                            className="md:px-12 px-6 pt-24 bg-bg500">

                            <div className={`flex flex-col max-w-8xl mx-auto ${filteredItem.featuredID % 2 !== 0  ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                                <div className=' '>
                                    <img
                                        src={filteredItem.src}
                                        width={1750}
                                        alt={'Featured Article'}
                                    />
                                </div>
                                <div className={`lg:pt-0 pt-12 ${filteredItem.featuredID % 2 !== 0  ? 'lg:pl-6' : 'lg:pr-6'}`}>
                                    <div className="">
                                        <div className='text-yellow500'>
                                            <Link href={filteredItem.featuredHREF}>
                                                <span className='hover:underline uppercase text-xs'>{filteredItem.featuredURL}</span>
                                            </Link>
                                        </div>
                                        <div className='font-bebasNeue text-3xl text-bg300'>
                                            {filteredItem.featuredHeader}
                                        </div>
                                        <div className='font-raleway text-4xl text-bg100 py-4'>
                                            {filteredItem.title}
                                        </div>
                                        <div className="uppercase text-xs text-bg300">
                                            <Date dateString={filteredItem.date} />
                                        </div>
                                        <div className='text-bg200 text-lg pb-6'>{filteredItem.description}</div>
                                        <div className="flex flex-row">
                                            <div className={`${filteredItem.isButtonActive === 'true'  ? 'block' : 'hidden'}  pr-2`}>
                                                <a
                                                    target={"_blank"}
                                                    href={filteredItem.featuredHREF}>
                                                    <button className="hover:bg-yellow600 hover:text-bg500 text-xs text-yellow500 uppercase px-4 py-3 border border-yellow500 rounded-lg">
                                                        {filteredItem.featuredButtonLabel}
                                                    </button>
                                                </a>
                                            </div>
                                            <div className="">
                                                <Link href={filteredItem.buttonHref}>
                                                    <button className="hover:bg-yellow600 hover:text-bg500 text-xs text-yellow500 uppercase px-4 py-3 border border-yellow500 rounded-lg">
                                                        {filteredItem.buttonText}
                                                    </button>
                                                </Link>
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






