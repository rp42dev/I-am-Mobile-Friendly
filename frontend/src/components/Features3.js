const Features3 = (props) => {
    const { data } = props;
    return (
        <>
            <section id="features3" className={`${data[0].bg}`}>
                <div className="container mx-auto px-4 py-24 space-y-8">
                    <h2 className="text-3xl font-extrabold sm:text-4xl text-left sm:text-center">
                        {data[0].title}
                    </h2>
                    {data[0].description &&
                    <p className="text-lg xl:text-xl mt-4 max-w-5xl mx-auto text-left sm:text-center">
                        {data[0].description}
                    </p>
                    }
                    <div className="flex flex-wrap space-y-6">
                        <div className="w-full lg:w-1/2 xl:pr-4 sm:text-center md:text-left lg:text-left lg:pr-4 grid place-items-center">
                            <div className="lg:mb-0 lg:pb-0 lg:border-b-0 pb-8">

                                {data[0].img && (
                                    <div>
                                        <img src={data[0].img} alt={data[0].alt} className="object-cover rounded-md xl:w-10/12 mx-auto" />
                                    </div>
                                )}

                            </div>
                        </div>

                        <div className="w-full px-4 lg:w-1/2 xl:pl-4 grid place-items-center">
                            <ul className="ul-border space-y-8">
                                {data[0].steps.map((step, index) => (
                                    <li key={index} className="flex -mx-4">
                                        <div>
                                            <span className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-white rounded-full font-heading bg-primary">
                                                {index + 1}
                                            </span>
                                        </div>
                                        <div className="px-4">
                                            <h3 className="text-lg xl:text-2xl mb-4 font-semibold">
                                                {step.title}
                                            </h3>
                                            <p className="text-sm xl:text-lg">
                                                {step.text}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {data[0].button && (
                        <div className="mt-8 mx-auto lg:w-1/2 text-left sm:text-center">
                            <a href="#contact" className=" btn px-4 py-2 btn-primary border-2 w-full sm:w-60">
                                {data[0].button}
                            </a>
                        </div>
                    )}
                </div>
            </section>
        </>
    )

}

export default Features3