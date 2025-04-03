import heroItems from "../data/heroItems";


export default function Hero(props) {

    let filteredItem = heroItems.filter(function (item){
        return item.id === props.id
    })

    return (
        <>
            <section className="flex flex-row max-w-4xl mx-auto relative z-10 animate-fadeInUp">
            {filteredItem.map(filteredItem => (
                <section
                    key={filteredItem.id}
                    className="flex flex-col justify-center items-center xl:px-0 px-6 text-center">
                    <div>
                        <div className={`${filteredItem.background === 'dark'  ? 'text-bg100' : 'text-lightBlue.500'} font-bebasNeue md:text-7xl text-6xl uppercase mb-4 text-legacy-wheat-600`}>{filteredItem.label}</div>
                        <div className={`${filteredItem.background === 'dark'  ? 'text-bg100' : 'text-lightBlue.500'} max-w-3xl leading-normal text-xl text-legacy-taupe-200`}>{filteredItem.description}</div>
                    </div>
                </section>
            ))}
        </section>
            </>
    )
}