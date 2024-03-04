import offeringItems from "../data/offeringItems";


export default function Offerings(props) {

    let filteredItem = offeringItems.filter(function (item){
        return item.type === props.type
    });

    return (
        <>
        <section className="py-16 bg-white.100 px-6">
            <div className='font-bebasNeue text-6xl uppercase text-gray.800 flex flex-row justify-center pb-8'>What we offer</div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {filteredItem.map(filteredItem => (
                        <div key={filteredItem.id} className="bg-gray p-6">
                                <div className="">
                                    <div className="font-bebasNeue text-3xl text-gray.800">{filteredItem.label}</div>
                                    <div className="text-xl leading-tight pt-2 text-gray.700">{filteredItem.description}</div>
                                    <ul className="text-left list-disc pt-2 pl-4 text-sm text-gray.600">
                                        {filteredItem.list.map((list) =>
                                        <li key={list.list}>
                                            {list}
                                        </li>
                                        )}
                                    </ul>
                                </div>
                        </div>
                    ))}
                </div>
        </section>
        </>
    )
}






