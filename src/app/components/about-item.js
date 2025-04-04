'use client'; // This is a client component 👈🏽

import aboutItems from "../data/aboutItems";

export default function AboutItem(props) {

    let filteredItem = aboutItems.filter(function (item){
        return item.type === props.type
    });

    return (
        <>
            <section className="pb-12">
            {filteredItem
                .filter(filteredItem => filteredItem.type === props.type)
                .map(filteredItem => (

                    <section
                        key={filteredItem.id}
                        className="md:px-12 px-6 pt-12 bg-white.100">

                        <div className={`flex flex-col max-w-7xl mx-auto ${filteredItem.featuredID % 2 !== 0  ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                            <div className='lg:shrink-0  lg:w-1/2'>
                                <img
                                    src={filteredItem.src}
                                    alt={'Featured Article'}
                                />
                            </div>
                            <div className={`lg:pt-0 pt-6 ${filteredItem.featuredID % 2 !== 0  ? 'lg:pl-6' : 'lg:pr-6'}`}>
                                <div className="">
                                    <div className='font-bebasNeue text-4xl text-gray.600  border-b border-bg-bg50 mb-4'>{filteredItem.number}</div>

                                    <div className='font-raleway text-4xl text-gray.900 py-4'>
                                        {filteredItem.title}
                                    </div>
                                    <div className='text-gray.500 pb-6'>{filteredItem.description}</div>
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
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                ))}
            </section>
        </>
    )
}






