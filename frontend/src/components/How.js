const How = () => {
    return (
        <>
            <section className="container mx-auto bg-base-200 rounded-md shadow-lg py-24 mb-24">
                <div className="px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-1/2 xl:pr-4">
                            <div className="lg:mb-0 lg:pb-0 lg:border-b-0 pb-8">
                                <h2 className="text-3xl font-extrabold sm:text-4xl">
                                    Here's How Our Process Works
                                </h2>
                                <p className="text-lg mt-4">
                                    A mobile-friendly website is a website that is designed to work well on mobile devices, such as smartphones and tablets as well as desktop computers.
                                    Our process is simple and effective. Here's how the process works from start to finish in 3 easy steps:
                                </p>

                                <div className="mt-8 mx-auto hidden lg:block">
                                    <a href="#contact" className="btn px-4 py-2 btn-primary border-2">
                                        Get started
                                    </a>
                                </div>
                                
                            </div>
                        </div>

                        <div className="w-full px-4 lg:w-1/2 xl:pl-4">
                            <ul className="space-y-8">
                                <li className="flex -mx-4">
                                    <div>
                                        <span className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-white rounded-full font-heading bg-primary">
                                            1
                                        </span>
                                    </div>
                                    <div className="px-4">
                                        <h3 className="text-xl mb-4 font-semibold">
                                            Consultation:
                                        </h3>
                                        <p className="text-sm">

                                            We'll discuss your website goals and needs and provide you with a custom quote for your project based on your requirements and budget.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex -mx-4">
                                    <div>
                                        <span className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-white rounded-full font-heading bg-primary">
                                            2
                                        </span>
                                    </div>
                                    <div className="px-4">
                                        <h3 className="text-xl mb-4 font-semibold">
                                            Design &amp; Development:
                                        </h3>
                                        <p className="text-sm">

                                            We'll design and develop your website using cutting-edge technology for optimal performance and readability and ensure it's fully functional and mobile friendly.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex -mx-4">
                                    <div>
                                        <span className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-white rounded-full font-heading bg-primary">
                                            3
                                        </span>
                                    </div>
                                    <div className="px-4">
                                        <h3 className="text-xl mb-4 font-semibold">
                                            Launch:
                                        </h3>
                                        <p className="text-sm">

                                            We'll launch your mobile-friendly website and ensure it's fully functional and optimized for search engines so you can start attracting new customers.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                            <div className="mt-12 mx-auto block lg:hidden ">
                                <a href="#contact" className="btn px-4 py-2 btn-primary border-2">
                                    Get started
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )

}

export default How