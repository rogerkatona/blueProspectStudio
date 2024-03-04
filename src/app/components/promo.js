"use client"; // This is a client component 👈🏽

import promoItems from "../data/promoItems";

export default function Promo(props) {

    let filteredItem = promoItems.filter(function (item){
        return item.id === props.id
    });

    return (

        <section className="py-12 md:px-12 bg-gray text-center">
            {filteredItem
                .map(filteredItem => (
                    <div
                        key={filteredItem.id}
                        >
                        <section className="flex flex-col md:px-0 px-6 mx-auto">
                            <div className="">
                                <div className='font-bebasNeue text-4xl text-gray.800 pb-4 uppercase'>{filteredItem.headline}</div>
                                <div className="text-gray.600 text-lg ">{filteredItem.text}</div>
                                <div className="text-gray.400 text-xs ">{filteredItem.source}</div>
                            </div>
                        </section>
                    </div>
                ))}
        </section>

    )
}






