const Features4 = (...data) => {
    const { title, description, button } = data[0].data[0]
    return (
        <section id="features4" className="bg-base pb-24">
            <div className="text-left md:text-center w-full container mx-auto  px-4 sm:px-6 lg:px-12 xl:px-16 ">
                <h2 className="text-3xl font-extrabold sm:text-4xl">
                    {title}
                </h2>
                <p className="text-xl mt-4 max-w-5xl mx-auto">
                    {description}
                </p>
                {button &&
                    <div className="mt-8 max-w-md mx-0 md:mx-auto">
                        <a href="#contact" className="btn px-4 py-2 btn-primary border-2">
                            {button}
                        </a>
                    </div>}
            </div>
        </section>
    )
}

export default Features4