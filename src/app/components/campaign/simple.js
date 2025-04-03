import campaignItems from "@/app/data/campaign";


export default function Simple(props) {

    let filteredItem = campaignItems.filter(function (item){
        return item.type === props.type
    });

    return (
        <>
            <section className="">
                {filteredItem.map(filteredItem => (
                    <section
                        key={filteredItem.id}
                        className={` ${filteredItem.id % 2 === 0 ? 'bg-gray.300' : 'bg-gray.900'}`}>
                        <div className="flex flex-col max-w-7xl mx-auto md:px-12 px-6 py-12">
                            <div className={`${filteredItem.id % 2 === 0  ? 'text-gray.700' : 'text-gray.300'} font-raleway text-4xl py-4 text-gray.300`}>{filteredItem.header}</div>
                            <div className={`${filteredItem.id % 2 === 0  ? 'text-gray.500' : 'text-gray.400'} pb-6`}>{filteredItem.description}</div>
                            <ul className={`${filteredItem.id % 2 === 0  ? 'text-gray.500' : 'text-gray.400'} text-left list-disc text-gray.400 pl-4`}>
                                {filteredItem.list.map((list) =>
                                    <li key={`${filteredItem.id}-${filteredItem.listID}`}>
                                        {list}
                                    </li>
                                )}
                            </ul>
                        </div>
                    </section>
                ))}
            </section>
        </>
    )
}






