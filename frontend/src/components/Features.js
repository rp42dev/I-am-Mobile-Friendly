import Card from "./Card";

const Features = ({ data }) => {
    return (
        <div id="features" className={`py-24 ${data[0].bg}`}>
        <div className="container mx-auto px-4 mb-8">
            <div className="mx-auto">
                <div className="w-full">
                    <h2 className="text-3xl sm:text-center font-extrabold sm:text-4xl">
                        {data[0].title}
                    </h2>
                    <p className="text-xl mt-4 max-w-5xl mx-auto hidden lg:block">
                        {data[0].description}
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                    {data[0].steps.map((item, index) => {
                        return (
                            <Card
                                key={index}
                                title={item.title}
                                description={item.text}
                                icon={item.icon}
                                link={item.link}
                                check={item.check}
                                target={item.target}
                            />
                        )
                    })}
                </div>
            </div>
            </div>
        </div>
    )
}

export default Features