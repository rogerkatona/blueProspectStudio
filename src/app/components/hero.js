import heroItems from "../data/heroItems";


export default function Hero(props) {

    let filteredItem = heroItems.filter(function (item){
        return item.id === props.id
    })

    return (
        <>
            <section className="flex flex-row max-w-7xl mx-auto ">
            {filteredItem.map(filteredItem => (
                <section
                    key={filteredItem.id}
                    className="flex flex-col justify-center xl:px-0 px-6">
                    <div>
                        <div className={`${filteredItem.background === 'dark'  ? 'text-bg100' : 'text-lightBlue.500'} font-bebasNeue md:text-7xl text-6xl uppercase`}>{filteredItem.label}</div>
                        <div className={`${filteredItem.background === 'dark'  ? 'text-bg100' : 'text-lightBlue.500'}  md:w-4/5`}>{filteredItem.description}</div>
                    </div>
                </section>
            ))}
        </section>
            </>
    )
}