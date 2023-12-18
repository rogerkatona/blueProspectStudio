import Link from "next/link";
import NavBar from "@/app/components/navBar";
import navItems from "@/app/data/navItems";
import Modal from "@/app/components/modal";
import {useState} from "react";
import useModal from "@/app/lib/useModal";

export default function HeroIndex({ children, home }) {

    const [active, setActive] = useState(false)
    const handleClick = () => setActive(!active)

    const {isShowing, toggle} = useModal();


    return (
        <>
        <section className="bg-hero-index bg-cover bg-no-repeat bg-fixed bg-center">
            <div className="flex lg:flex-row flex-col-reverse justify-center lg:items-center lg:mx-auto lg:max-w-8xl h-screen90vh py-6 md:px-0 px-6">
                <div className="text-center">
                    <div>
                        <div className="font-raleway font-bold lg:text-8xl text-5xl text-bg100 ">VIDEO PRODUCTION</div>
                    </div>
                    <div className="lg:text-lg text-xs text-bg200">
                        Crafting Stories, Capturing Moments: Your Vision, Our Passion.
                    </div>
                    <div className="lg:pt-8 pt-4">
                        <Link href=''>
                            <button
                                onClick={toggle}
                                className="bg-yellow900 hover:bg-yellow600 hover:text-bg100 text-xs text-bg100 uppercase px-4 py-3 rounded-lg md:ml-3 md:mt-0 mt-6">
                                Contact us
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <Modal
                isShowing={isShowing}
                hide={toggle}
            />
        </section>
    </>
    )
}


