import Meta from "../../components/Meta";

const NotFound = () => {
    return (
        <>
            <Meta title='404 Not Found | Mobile friendly websites, Web design, Web development in Ireland | Drogheda, Dublin & Remote | I am Mobile Friendly' />
            <div className="relative min-h-screen overflow-hidden -z-1">

                <div className="absolute inset-0 grid place-content-center">
                    <div className="container relative flex flex-col text-center justify-items-center h-screen justify-center mt-40">
                            <h1 className="mt-4 text-5xl font-extrabold leading-tight text-center font-mono mb-12">
                                You&#x27;re alone here
                            </h1>
                            <p className="font-extrabold text-8xl animate-bounce">
                                404
                            </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default NotFound