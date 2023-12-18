"use client"; // This is a client component 👈🏽

import Link from "next/link";
import useModal from "../lib/useModal";
import Modal from "./modal";
import promoItems from "../data/promoItems";

export default function Promo(props) {

    let filteredItem = promoItems.filter(function (item){
        return item.id === props.id
    });

    const {isShowing, toggle} = useModal();

    return (

        <>
            {filteredItem
                .map(filteredItem => (
                    <div
                        key={filteredItem.id}
                        className="flex flex-row bg-bg500">

                        <section className="flex flex-col xl:px-0 px-6 mt-24 lg:mx-auto lg:max-w-8xl">
                            <div className={`lg:bg-cover bg-no-repeat lg:p-12 lg:px-24 px-6 py-24 ${filteredItem.id % 2 !== 0  ? 'bg-banner-02 bg-left' : 'bg-banner-01 bg-right'}`}>
                                <div className='font-bebasNeue text-2xl text-bg300'>{filteredItem.headline}</div>
                                <div className="font-raleway text-3xl text-bg100 pb-4 ">{filteredItem.title}</div>
                                <div className="text-bg200">{filteredItem.text}</div>
                                <div className="text-bg300 text-xs ">{filteredItem.source}</div>
                            </div>
                        </section>
                        <section>
                            <Modal
                                isShowing={isShowing}
                                hide={toggle}
                            />
                        </section>
                    </div>
                ))}
        </>

    )
}






