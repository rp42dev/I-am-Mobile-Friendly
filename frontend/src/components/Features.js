import Card from "./Card";

const Features = ({ data }) => {
    return (
        <div id="features" className="text-center container mx-auto px-4 mb-24">
            <div className="mx-auto">
                <div className="w-full px-4">
                    <h2 className="text-3xl font-extrabold sm:text-4xl">
                        {data[0].title}
                    </h2>
                    <p className="text-xl mt-4 max-w-5xl mx-auto hidden lg:block">
                        {data[0].description}
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                    {data[0].steps.map((item) => {
                        return (
                            <Card
                                key={item.id}
                                title={item.title}
                                description={item.text}
                                icon={item.icon}
                                link={item.link}
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