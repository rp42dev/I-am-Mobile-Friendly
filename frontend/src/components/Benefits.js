import { CheckFat, } from "@phosphor-icons/react";
import Accordion from "./Accordion";

const Benefits = (props) => {
    const { data } = props;

    return (
        <section id="features2" className={`bg-base-${data[0].bg} relative mx-auto`}>
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
                            <ul className={`grid ${data[0].text === 'Frequently Asked Questions' ? 'max-w-4xl mx-auto' : 'lg:grid-cols-2'} gap-4`}>
                                {data[0].data.map((item) => {
                                    return (
                                        <Accordion key={item.id} icon={<CheckFat size={24} color="green" />} title={item.title} content={item.text} bg={data[0].bg} />
                                        
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

export default Benefits