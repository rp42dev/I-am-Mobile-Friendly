import CardAccordion from './CardAccordion'

const Features5 = ({ data }) => {

    return (
        <div id="features" className={`py-24 ${data[0].bg}`}>
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-extrabold sm:text-4xl text-center">
                    {data[0].title}
                </h2>
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2 lg:pr-4">
                        <div className="lg:mb-0 lg:pb-0 lg:border-b-0 pb-8">
                            {data[0].img && (
                                <div className="mt-8">
                                    <img src={data[0].img} alt={data[0].alt} className="object-cover rounded-md" />
                                </div>
                            )}
                            <p className="text-lg mt-4">
                                {data[0].description}
                            </p>
                            {data[0].button && (
                                <div className="mt-8 max-w-md mx-0 hidden lg:block">
                                    <a href="#contact" className="btn py-2 btn-secondary border-2">
                                        {data[0].button}
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 lg:pl-4 grid place-items-center space-y-8">
                        <div className="grid grid-cols-1 gap-4">
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
            </div>
        </div>
    )
}

export default Features5