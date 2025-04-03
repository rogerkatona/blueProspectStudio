import quoteItems from "../data/quoteItems";


export default function Quote(props) {

    let filteredItem = quoteItems.filter(function (item){
        return item.id === props.id
    });


    return (

        <>
            <section className="">
            {filteredItem
                .map(filteredItem => (
                    <div
                        key={filteredItem.id}
                        className={`md:px-12 px-6 py-12 pt-20  ${filteredItem.id % 2 === 0  ? 'bg-white.100' : 'bg-gray '}`}>

                            <section className="flex flex-col justify-center items-center lg:px-0 p-6 relative lg:mx-auto lg:max-w-7xl border-2 border-gray.200 ">
                                <div className='flex flex-shrink-0 absolute -top-10 '>
                                    <img
                                        src={filteredItem.src}
                                        height={82}
                                        width={82}
                                        alt={'simple quote graphic'}
                                    />
                                </div>
                                <div className="lg:p-12 py-6">
                                <div className='font-raleway text-4xl text-gray.800 py-4 text-center'>What our customers are saying</div>
                                <div className="text-center text-gray.500 text-lg max-w-5xl">&quot;{filteredItem.text}&quot;</div>
                                <div className="text-center text-gray.500 pt-3"> - {filteredItem.author}, {filteredItem.title}</div>
                            </div>
                        </section>
                    </div>
                ))}
            </section>
        </>

    )
}






