import { CheckFat, } from "@phosphor-icons/react";

const Features2 = (props) => {
    const { data } = props;

    return (
        <section id="problem-solution" className="container relative mx-auto px-4">
            <div className="bg-base-200 border-base-100 rounded-lg shadow-lg py-24 mb-24 px-4 sm:px-6 lg:px-12 xl:px-16">
                <div className="relative">
                    <div className="flex flex-wrap content-center">
                        <div className="w-full xl:pr-2">
                            <div className="relative space-y-4">
                                <h4 className="text-3xl font-extrabold sm:text-4xl mb-8">
                                    {data[0].text}
                                </h4>
                            </div>
                        </div>
                        <div className="w-full xl:pl-2">
                            <ul className="gap-6 mt-8 lg:mt-0 md:grid md:grid-cols-2">
                                {data[0].data.map((item) => {
                                    return (
                                        <li key={item.id} className="flex items-start lg:col-span-1">
                                            <div className="flex-shrink-0">
                                                <CheckFat size={24} color="green" />
                                            </div>
                                            <div className="ml-3 flex flex-col space-y-2">
                                                <h3 className="text-lg font-medium">
                                                    {item.title}
                                                </h3>
                                                <p className="text-sm">
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