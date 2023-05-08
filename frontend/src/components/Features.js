import { PenNib, PiggyBank, ArrowClockwise } from "@phosphor-icons/react";

const data = [
    {
        id: 1,
        icon: <PenNib size={32} />,
        title: "Customized Solutions",
        text: "We will work with you to understand your business needs and provide a customized solution that fits your needs and budget."
    },
    {
        id: 2,
        icon: <PiggyBank size={32} />,
        title: "Competitive Pricing",
        text: "Affordable pricing for small businesses. Minimal upfront costs and no hidden fees. Pay only for what you need and use."
    },
    {
        id: 3,
        icon: <ArrowClockwise size={32} />,
        title: "Fast Turnaround Time",
        text: "Time is money. We will work hard to ensure that your website is up and running as soon as possible to minimize downtime."
    },
]

const Feature = ({ icon, title, text }) => {
    return (
        <div className="w-full px-4 mt-6 sm:w-1/2 md:w-1/2 lg:w-1/4 text-center">
            <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-primary rounded-md">
                    {icon}
                </div>
            </div>
            <h3 className="py-4 text-xl font-semibold sm:text-2xl">
                {title}
            </h3>
            <p className="pb-4 text-sm lg:text-md">
                {text}
            </p>
        </div>
    )
}

const Features = () => {
    return (

        <div className="text-center container mx-auto bg-base-200 rounded-md shadow-lg py-24">
            <div className="mx-auto">
                <div className="w-full px-4">
                    <h2 className="text-3xl font-extrabold sm:text-4xl">
                        Benefits working with us
                    </h2>
                    <p className="text-xl mt-4 max-w-5xl mx-auto hidden lg:block">
                        
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