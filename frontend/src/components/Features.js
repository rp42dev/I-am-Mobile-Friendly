import { PenNib } from "@phosphor-icons/react";

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
                    <div className="w-full px-4 py-4 mt-6 rounded-lg shadow-xl sm:w-1/2 md:w-1/2 lg:w-1/4 bg-base-100">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-primary rounded-md">
                                <PenNib size={32} weight="thin" />
                            </div>
                        </div>
                        <h3 className="py-4 text-2xl font-semibold sm:text-xl">
                            Customized Solutions
                        </h3>
                        <p className="pb-4 text-md">
                            We will work closely with you to understand your requirements and design a website that is tailored to your business.
                        </p>
                    </div>
                    <div className="w-full px-4 py-4 mt-6 rounded-lg shadow-xl sm:w-1/2 md:w-1/2 lg:w-1/4 lg:mt-24 bg-base-100">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-primary rounded-md">
                                <svg width="20" height="20" fill="currentColor" className="w-6 h-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <h3 className="py-4 text-2xl font-semibold sm:text-xl">
                            Competitive Pricing
                        </h3>
                        <p className="pb-4 text-md">
                            We offer competitive pricing for our website transformation services, ensuring that our services are affordable for businesses of all sizes.
                        </p>
                    </div>
                    <div className="w-full px-4 py-4 mt-6 rounded-lg shadow-xl sm:w-1/2 md:w-1/2 lg:w-1/4 bg-base-100">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-primary rounded-md">
                                <svg width="20" height="20" fill="currentColor" className="w-6 h-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <h3 className="py-4 text-2xl font-semibold sm:text-xl">
                            Fast Turnaround Time
                        </h3>
                        <p className="pb-4 text-md">
                            We understand that time is of the essence, and that's why we offer a fast turnaround time for our website transformation services.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features