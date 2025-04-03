import React, { useEffect, useRef } from 'react';
import Script from 'next/script';

const ConsultationOverlay = ({ isOverlayVisible, toggleOverlay }) => {
    const calendlyContainerRef = useRef(null);

    useEffect(() => {
        if (isOverlayVisible && typeof window !== 'undefined') {
            // Remove Calendly iframe if it already exists
            const existingIframe = calendlyContainerRef.current?.querySelector('iframe');
            if (existingIframe) {
                existingIframe.remove();
            }

            // Re-init Calendly after DOM is ready
            const timeout = setTimeout(() => {
                if (window.Calendly && typeof window.Calendly.initInlineWidgets === 'function') {
                    window.Calendly.initInlineWidgets();
                }
            }, 300);

            return () => clearTimeout(timeout);
        }
    }, [isOverlayVisible]);

    if (!isOverlayVisible) return null;

    return (
        <div className="fixed inset-0 bg-gray.800 bg-opacity-100 overflow-y-auto h-full w-full z-50">
            <div className="relative mx-auto p-5 max-w-7xl">

                <Script
                    src="https://assets.calendly.com/assets/external/widget.js"
                    strategy="afterInteractive"
                />

                <section className="fixed right-0 top-0 pr-2 pt-2">
                    <div className="modal-close cursor-pointer z-10 p-4">
                        <button
                            type="button"
                            className="text-bg50"
                            aria-label="Close"
                            onClick={toggleOverlay}
                        >
              <span aria-hidden="true">
                <svg className="fill-white.100 text-platinum" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 18 18">
                  <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
                </svg>
              </span>
                        </button>
                    </div>
                </section>

                <section className="max-w-4xl mx-auto">
                    <div className="lg:p-12 p-6 h-full flex flex-col items-center text-center">

                        <div className="font-bebasNeue text-6xl text-bg100 pb-4">
                            Let’s Chat
                        </div>

                        <div className="pb-8">
                            <div className="flex flex-col items-center text-center space-y-1">
                <span className="text-gray.300 leading-snug text-center">
                  Have a story to tell or just want to talk ideas? We’re all ears. Use the form below to grab a time that works for you—we’ll take care of the rest.
                </span>
                                <span className="text-gray.300">
                  Whether you're just curious or ready to roll, we're here to help you bring your vision to life.
                </span>
                            </div>
                        </div>

                        {/* Calendly Inline Embed */}
                        <div
                            ref={calendlyContainerRef}
                            className="calendly-inline-widget w-full max-w-3xl mx-auto"
                            data-url="https://calendly.com/roger-katona-blueprospect/30min"
                            style={{ minWidth: '320px', height: '700px' }}
                        ></div>
                        <noscript>
                            <p className="text-gray-400 text-sm text-center mt-4">
                                If the booking form doesn’t load,{' '}
                                <a
                                    href="https://calendly.com/roger-katona-blueprospect/30min"
                                    className="underline text-legacy-wheat"
                                >
                                    click here to book directly
                                </a>.
                            </p>
                        </noscript>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ConsultationOverlay;
