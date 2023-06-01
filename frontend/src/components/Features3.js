const Features3 = (props) => {
    const { data } = props;
    return (
        <>
            <section id="features3" className="container mx-auto px-4">
                <div className="px-4 sm:px-6 lg:px-12 xl:px-16 bg-base-200/75 rounded-md shadow-lg py-24 mb-24">
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-1/2 xl:pr-4">
                            <div className="lg:mb-0 lg:pb-0 lg:border-b-0 pb-8">
                                <h2 className="text-3xl font-extrabold sm:text-4xl">
                                    {data[0].title}
                                </h2>
                                <p className="text-lg mt-4">
                                    {data[0].description}
                                </p>
                                {data[0].button && (
                                    <div className="mt-8 max-w-md mx-0 hidden lg:block">
                                        <a href="#contact" className="btn px-4 py-2 btn-primary border-2">
                                            {data[0].button}
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="w-full px-4 lg:w-1/2 xl:pl-4">
                            <ul className="ul-border space-y-8">
                                {data[0].steps.map((step, index) => (
                                    <li key={index} className="flex -mx-4">
                                        <div>
                                            <span className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-white rounded-full font-heading bg-primary">
                                                {index + 1}
                                            </span>
                                        </div>
                                        <div className="px-4">
                                            <h3 className="text-xl mb-4 font-semibold">
                                                {step.title}
                                            </h3>
                                            <p className="text-sm">
                                                {step.text}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            {data[0].button && (
                                <div className="mt-8 max-w-md mx-0 block lg:hidden">
                                    <a href="#contact" className="btn px-4 py-2 btn-primary border-2">
                                        {data[0].button}
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}

export default Features3