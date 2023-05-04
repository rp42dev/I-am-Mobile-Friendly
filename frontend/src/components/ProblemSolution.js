import { CheckFat } from "@phosphor-icons/react";

const ProblemSolution = (props) => {

    const { data } = props;

    return (
        <section id="problem" className="container mx-auto bg-base-200 rounded-md shadow-xl py-24">

            <div className="relative px-4 sm:px-6 lg:px-12 xl:px-16">
                <div className="flex flex-wrap content-center">
                    <div className="w-full px-4 lg:w-1/2">
                        <div className="relative space-y-4">
                            <h4 className="text-3xl font-extrabold sm:text-4xl">
                                {data[0].text}
                            </h4>

                            <p className="mt-4 text-lg leading-6">
                                {data[0].description}
                            </p>
                        </div>
                    </div>
                    <div className="w-full px-4 lg:w-1/2">

                        <ul className="gap-6 mt-8 lg:mt-0 md:grid md:grid-cols-2">
                            {data[0].data.map((item) => {
                                return (
                                    <li key={item.id} className="flex items-start lg:col-span-1">
                                        <div className="flex-shrink-0">
                                            <CheckFat size={24} color="green" />
                                        </div>
                                        <p className="ml-3">
                                            {item.text}
                                        </p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ProblemSolution