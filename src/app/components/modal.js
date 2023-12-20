import React from 'react';
import ReactDOM from 'react-dom';
import  { Form } from "./form";



const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(

    <>
        <div className="relative" aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className="w-full h-full z-10 bg-banner-01 fixed top-0 left-0 flex flex-row">

                <section className="fixed right-0">
                    <div className="modal-close cursor-pointer z-10 p-4">
                        <button type="button" className="text-bg50" data-dismiss="modal" aria-label="Close" onClick={hide}>
                            <span aria-hidden="true">
                                <svg className="fill-bg100 text-bg100" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                     viewBox="0 0 18 18">
                                    <path
                                        d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                </section>

                <section className="max-w-8xl mx-auto pt-12 ">
                    <div className="lg:p-12 p-6 h-full">
                        <div className="font-bebasNeue text-6xl text-bg100  flex flex-row  pb-4 ">
                            Contact
                        </div>
                        <div className="text-bg200 flex flex-row pb-8">
                            <div className="" >
                                We value your feedback, inquiries, and suggestions. Our dedicated support team is ready to provide you with the information and assistance you need. Feel free to reach out to us via the contact form below, and we'll get back to you as soon as possible. Thank you for choosing Blue Prospect – where customer satisfaction is our priority.
                            </div>
                        </div>
                        <Form/>
                    </div>
                </section>

            </div>
        </div>
    </>, document.body
) : null;

export default Modal;
