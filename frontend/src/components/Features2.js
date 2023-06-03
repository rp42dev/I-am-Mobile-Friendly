import { CheckFat, } from "@phosphor-icons/react";

const Features2 = (props) => {
    const { data } = props;

    return (
        <section id="features2" className={`${data[0].bg} relative mx-auto`}>
            <div className="container mx-auto py-24 px-4">
                <div className="relative">
                    <div className="flex flex-wrap space-y-6">
                        <div className="w-full xl:pr-2">
                            <div className="relative space-y-4">
                                <h4 className="text-3xl font-extrabold sm:text-4xl sm:text-center">
                                    {data[0].text}
                                </h4>
                                {data[0].description &&
                                    <p className="text-lg sm:text-2xl sm:text-center max-w-7xl mx-auto">
                                        {data[0].description}
                                    </p>
                                }
                            </div>
                        </div>
                        <div className="w-full xl:pl-2">
                            <ul className="md:grid md:grid-cols-2 gap-y-4 md:gap-y-0 md:gap-x-8">
                                {data[0].data.map((item) => {
                                    return (
                                        <li key={item.id} className="my-4 flex items-start lg:col-span-1">
                                            <div className="flex-shrink-0">
                                                <CheckFat size={24} color="green" />
                                            </div>
                                            <div className="ml-3 flex flex-col space-y-2">
                                                <h3 className="text-lg font-semibold xl:text-xl">
                                                    {item.title}
                                                </h3>
                                                <p className="text-sm xl:text-lg">
                                                    {item.text}
                                                </p>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    )
}

export default Features2