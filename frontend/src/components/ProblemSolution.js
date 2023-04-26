import { CheckFat } from "@phosphor-icons/react";

const data = [
    {
        id: 1,
        text: "Responsive design that adapts to any screen size"
    },
    {
        id: 2,
        text: "Easy navigation for a seamless user experience"
    },
    {
        id: 3,
        text: "Mobile-friendly content to increase your online visibility"
    },
    {
        id: 4,
        text: "Enhanced readability for better user engagement"
    },
    {
        id: 5,
        text: "Optimized for search engines to increase your online visibility"
    },
    {
        id: 6,
        text: "Improved user experience to increase your conversion rate"
    },
]


const ProblemSolution = () => {
    return (

        <section id="problem" className="container mx-auto bg-base-200 rounded-md shadow-xl py-24">

            <div className="relative px-4 sm:px-6 lg:px-12 xl:px-16">
                <div className="flex flex-wrap content-center">
                    <div className="w-full px-4 lg:w-1/2 text-center lg:text-left">
                        <div className="relative space-y-4">
                            <h4 className="text-3xl font-extrabold sm:text-4xl">
                                <span className="text-primary">Mobile-Friendly</span> website transformation service
                            </h4>

                            <p className="mt-4 text-lg leading-6">
                                Our mobile-friendly website transformation service will help you to increase your website's visibility and improve your search engine ranking.
                                Some of the Features of our Mobile-friendly website transformation service include:
                            </p>
                        </div>
                    </div>
                    <div className="w-full px-4 lg:w-1/2">
                    
                        <ul className="gap-6 mt-8 lg:mt-0 md:grid md:grid-cols-2">
                            {data.map((item) => {
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