'use client';
// components/SocialMediaItem.js

import Link from "next/link";

const SocialMedia = props => (
    <div className="filter transition duration-500 ease-in-out hover:brightness-75  px-1 shadow-2xl shrink-0 ">
        <Link
            href={props.path}
            target={props.target}
            rel="noreferrer">
            <span>
                <img
                    src={props.src}
                    height={24}
                    width={24}
                    alt={props.alt}
                />
            </span>
        </Link>
    </div>
);

const SocialMediaItem = props => (
    <>
        {props.socialMediaItems.map(item => (
            <SocialMedia
                key={item.src}
                path={item.path}
                alt={item.alt}
                src={item.src}
            />
        ))}
    </>
);

export default SocialMediaItem;
