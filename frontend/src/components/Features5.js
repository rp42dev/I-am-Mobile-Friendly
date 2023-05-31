import CardAccordion from './CardAccordion'

const Features = ({ data }) => {

    return (
        <div id="features" className="text-center container mx-auto px-4 mb-24">
            <div className="mx-auto">
                <div className="w-full px-4 space-y-8">   
                    
                    <h2 className="text-3xl font-extrabold sm:text-4xl">
                        {data[0].title}
                    </h2>
                    <p className="text-xl mt-4 max-w-5xl mx-auto hidden lg:block">
                        {data[0].description}
                    </p>
                </div>
                <div className="flex flex-wrap xl:flex-wrap justify-center gap-8">
                    {data[0].steps.map((item) => {
                        return (
                            <CardAccordion
                                key={item.id}
                                title={item.title}
                                description={item.text}
                                icon={item.icon}
                                check={item.check}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Features