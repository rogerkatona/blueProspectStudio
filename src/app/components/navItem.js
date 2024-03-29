"use client"; // This is a client component 👈🏽

// components/NavItem.js
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function NavItem (props) {

    const pathname = usePathname();

    return (
        <div className="pb-3 flex flex-row items-center lg:pb-0 ">
            <Link href={props.path}>
                <span className={`${pathname.startsWith(props.path)  ? 'text-sand underline ' : ''} font-roboto md:mx-3 pt-6 lg:py-0 text-xs  uppercase hover:text-yellow300 text-gray.300`}>{props.label}</span>
            </Link>
        </div>
    )
}

