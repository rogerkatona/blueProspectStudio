import serviceItems from "../data/serviceItems";
import Link from "next/link";

export default function Service(props) {

    let filteredItem = serviceItems.filter(function (item){
        return item.type === props.type
    });

    return (
        <>
                <section className="flex flex-col md:px-12 px-6 bg-white.100 pb-12">
                    {filteredItem
                        .filter(filteredItem => filteredItem.featured === "false")
                        .map(filteredItem => (
                            <section>
                                <div
                                    key={filteredItem.id}
                                    className={`flex lg:flex-row flex-col max-w-7xl mx-auto pt-12  ${filteredItem.id % 2 === 0  ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>

                                    <div className="">
                                        <img
                                            className=""
                                            src={filteredItem.src}
                                            width={1000}
                                            alt={filteredItem.alt}
                                        />
                                    </div>
                                    <div className={`${filteredItem.id % 2 === 0  ? 'lg:pr-12 lg:pt-0 pt-6' : 'lg:pl-12 lg:pt-0 pt-6'} lg:w-4/5 w-full `}>
                                        <div className='font-bebasNeue text-4xl text-gray.500 border-b'>{filteredItem.number}</div>
                                        <div className='font-raleway text-4xl text-gray.900 pt-4'>{filteredItem.title}</div>
                                        <ul className="text-left list-disc pt-2 text-gray.500 pl-4">
                                            {filteredItem.list.map((list) =>
                                                <li key={`${filteredItem.id}-${filteredItem.featuredID}`}>
                                                    {list}
                                                </li>
                                            )}
                                        </ul>
                                        <div className={`${filteredItem.isButtonActive === 'true'  ? 'block' : 'hidden'} pt-0`}>
                                            <Link href={filteredItem.buttonHref}>
                                                <span
                                                    className="bg-newYellow.800 hover:bg-newYellow.900 hover:text-gray.100 text-xs text-gray.100 uppercase px-4 py-3 rounded-lg">
                                                    {filteredItem.buttonText}
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </section>
                    ))}
                </section>
        </>
    )
}






