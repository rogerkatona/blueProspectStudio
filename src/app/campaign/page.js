import Head from 'next/head'
import  { Form } from "../components/form";
import {useEffect, useRef, useState} from "react";


export default function Campaign01() {

    const initialRef = useRef()
    return (
        <>
            <div>
                <header className="w-full bg-campaign.500 xl:px-0 md:px-12 px-6 xl:py-24 py-12">
                    <section className='flex lg:flex-row flex-col justify-between items-center max-w-7xl mx-auto'>
                        <div className=''>
                            <div className='font-roboto text-6xl tracking-tighter text-white.100'>User Experience Audit</div>
                            <div className='text-tan.500 text-xl md:py-2 py-6'>Invest in your users.  They deserve it.</div>
                            <div className="md:my-10  bg-campaignLight w-full flex flex-col justify-center">
                                <Form initialRef={initialRef} />
                            </div>

                        </div>

                    </section>
                </header>
            </div>
        </>
    )
}