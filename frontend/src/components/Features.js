import { PenNib, PiggyBank, ArrowClockwise } from "@phosphor-icons/react";

const data = [
    {
        id: 1,
        icon: <PenNib size={32} />,
        title: "Customized Solutions",
        text: "We will work closely with you to understand your requirements and design a website that is tailored to your business."
    },
    {
        id: 2,
        icon: <PiggyBank size={32} />,
        title: "Competitive Pricing",
        text: "We offer competitive pricing for our website transformation services, ensuring that our services are affordable for businesses of all sizes."
    },
    {
        id: 3,
        icon: <ArrowClockwise size={32} />,
        title: "Fast Turnaround Time",
        text: "We understand that time is of the essence, and that's why we offer a fast turnaround time for our website transformation services."
    },
]

const Feature = ({ icon, title, text }) => {
    return (
        <div className="w-full px-4 py-4 mt-6 rounded-lg shadow-xl sm:w-1/2 md:w-1/2 lg:w-1/4 bg-base-100 text-center">
            <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-primary rounded-md">
                    {icon}
                </div>
            </div>
            <h3 className="py-4 text-2xl font-semibold sm:text-xl">
                {title}
            </h3>
            <p className="pb-4 text-md">
                {text}
            </p>
        </div>
    )
}

const Features = () => {
    return (

        <div className="text-center container mx-auto bg-base-200 rounded-md shadow-xl py-24">
            <div className="mx-auto">
                <div className="w-full px-4">
                    <h2 className="text-3xl font-extrabold sm:text-4xl">
                        Benefits working with us:
                    </h2>
                    <p className="text-xl mt-4 max-w-5xl mx-auto hidden lg:block">
                        Choosing Im Mobile Friendly for your website transformation services comes with numerous benefits.
                        Here are some of the benefits you can expect:
                    </p>
                </div>
                <div className="sm:flex flex-wrap items-center justify-center gap-8">
                    {data.map((item) => {
                        return <Feature key={item.id} {...item} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Features