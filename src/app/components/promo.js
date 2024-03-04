"use client"; // This is a client component 👈🏽

import promoItems from "../data/promoItems";

export default function Promo(props) {

    let filteredItem = promoItems.filter(function (item){
        return item.id === props.id
    });

    return (

        <section className="py-16 md:px-12 bg-gray text-center">
            {filteredItem
                .map(filteredItem => (
                    <div
                        key={filteredItem.id}
                        >
                        <section className="flex flex-col md:px-0 px-6 mx-auto md:max-w-4xl ">
                            <div className="">
                                <div className='font-bebasNeue text-3xl text-gray.800'>{filteredItem.headline}</div>
                                <div className="text-gray.600 text-lg pb-0">{filteredItem.text}</div>
                                <div className="text-bg300 text-xs ">{filteredItem.source}</div>
                            </div>
                        </section>
                    </div>
                ))}
        </section>

    )
}






