"use client"; // This is a client component 👈🏽

import promoItems from "../data/promoItems";

export default function Promo(props) {

    let filteredItem = promoItems.filter(function (item){
        return item.id === props.id
    });

    return (

        <section className="pt-24 md:px-12">
            {filteredItem
                .map(filteredItem => (
                    <div
                        key={filteredItem.id}
                        >
                        <section className="flex flex-col md:px-0 px-6 mx-auto md:max-w-8xl ">
                            <div className="">
                                <div className='font-bebasNeue text-3xl text-bg300'>{filteredItem.headline}</div>
                                <div className="font-raleway text-4xl text-bg100 py-4">{filteredItem.title}</div>
                                <div className="text-bg200 text-lg pb-4">{filteredItem.text}</div>
                                <div className="text-bg300 text-xs ">{filteredItem.source}</div>
                            </div>
                        </section>
                    </div>
                ))}
        </section>

    )
}






