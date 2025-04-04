"use client"; // This is a client component 👈🏽

import promoItems from "../data/promoItems";

export default function Promo(props) {

    let filteredItem = promoItems.filter(function (item){
        return item.id === props.id
    });

    return (

        <section className="bg-gray text-center py-12 md:px-12">
            {filteredItem
                .map(filteredItem => (
                    <div
                        key={filteredItem.id}
                        >
                        <section className="flex flex-col mx-auto max-w-5xl md:px-0 px-6">
                            <div className="">
                                <div className='font-bebasNeue text-5xl text-gray.800 uppercase pb-2'>{filteredItem.headline}</div>
                                <div className="font-raleway text-2xl text-gray.700 font-medium pb-2">{filteredItem.title}</div>
                                <div className="text-gray.600 pb-2 max-w-5xl mx-auto">{filteredItem.text}</div>
                                <div className="text-gray.400 text-xs">{filteredItem.source}</div>
                            </div>
                        </section>
                    </div>
                ))}
        </section>

    )
}






