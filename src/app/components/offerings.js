import offeringItems from "../data/offeringItems";


export default function Offerings(props) {

    let filteredItem = offeringItems.filter(function (item){
        return item.type === props.type
    });

    return (
        <>
        <section className="py-16 bg-white.100 md:px-12 px-6 ">
            <div className='font-bebasNeue text-4xl uppercase text-gray.800 flex flex-row justify-center pb-4'>What we offer</div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
                    {filteredItem.map((item) => (
                        <div key={item.id} className="bg-gray-100 p-6"> {/* Corrected className */}
                            <div>
                                <div className="font-bebasNeue text-2xl text-gray-600">{item.label}</div>
                                <ul className="text-left list-disc pt-2 pl-4 text-lg text-gray-500">
                                    {item.list.map((listItem, index) => ( // Assuming item.list is an array of strings
                                        <li key={index}> {/* Using index as a key; ensure list items are unique or consider a better key */}
                                            {listItem} {/* Directly display listItem if it's a string */}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
        </section>
        </>
    )
}






