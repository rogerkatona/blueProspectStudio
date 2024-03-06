"use client"; // This is a client component 👈🏽

import useSWR from 'swr';
import { usePathname } from 'next/navigation';
import Link from "next/link";
import Date from "@/app/components/date";
import SocialMediaItem from "@/app/components/social-media-items";
import socialMediaItems from "@/app/data/socialMediaItems";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function PostPage() {
    const pathname = usePathname();
    const slug = pathname.split('/').pop(); // Assuming the slug is the last part of the path
    const { data: post, error } = useSWR(slug ? `/api/posts/${slug}` : null, fetcher);

    if (error) return <div>Failed to load the post.</div>;
    if (!post) return <div>Loading...</div>;

    return (
        <article>
            <div className="bg-white.100">
                <section className=''>
                    <section className="">
                        <div className="max-w-7xl mx-auto py-12 xl:px-0 px-6">
                            <section className="">
                                <div className='font-bebasNeue text-5xl text-gray.800'>{post.title}</div>
                                <div className='text-gray.500 uppercase text-sm '>
                                    <Date dateString={post.date} />
                                </div>
                                <div className="text-gray.500 pt-2"> {post.description} </div>
                                <div className="pt-2">
                                    <span className="font-bold pr-2 text-gray.500">Tags:</span>
                                    <span>{post.tag}</span>
                                </div>
                                <hr/>

                                <section className='flex xl:flex-row flex-col justify-between '>
                                    <div className='flex flex-row items-center'>
                                        <div className='pr-4 shrink-0'>
                                            <img
                                                className=""
                                                src={post.authorImageSource}
                                                height={80}
                                                width={80}
                                                alt="author image - Roger Katona"
                                            />
                                        </div>
                                        <div className=''>
                                            <div className='font-raleway text-xl text-gray.800 font-bold '>{post.author}</div>
                                            <div className='pb-2 text-gray.500'>{post.authorDescription}</div>
                                            <div className='flex flex-row items-center'>
                                                <SocialMediaItem socialMediaItems={socialMediaItems}/>
                                            </div>
                                        </div>
                                    </div>


                                </section>
                                <section>
                                    <div className='mt-6'>
                                        <img
                                            className="lg:block hidden"
                                            src={post.imageSource}
                                            alt={post.alt}
                                        />
                                        <img
                                            className="lg:hidden block"
                                            src={post.imageSource}
                                            alt={post.alt}
                                        />
                                    </div>
                                </section>
                                <section className='my-12 '>
                                    <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
                                </section>
                            </section>
                        </div>
                    </section>

                </section>
            </div>
        </article>
    );
}


