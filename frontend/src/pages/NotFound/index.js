import Meta from "../../components/Meta";

const NotFound = () => {
    return (
        <>
            <Meta title='404 Not Found | Mobile friendly websites, Web design, Web development in Ireland | Drogheda, Dublin & Remote | I am Mobile Friendly' />
            <div className="relative h-full overflow-hidden -z-1">

                <div className="grid place-content-center h-full">
                    <div className="container relative flex flex-col text-center justify-items-center h-full justify-center my-20">
                           
                        <img src={require('../../assets/images/not-found.svg').default} alt="404 Not Found" className="h-3/5 my-auto animate-bounce" />
                        
                    </div>
                </div>

            </div>
        </>
    )
}

export default NotFound