const image = require('../assets/images/person.jpeg')


const Testimonials = () => {
    return (
        <div className="w-full py-12">
            <div className="container mx-auto carousel w-full mt-12">
                <div id="item1" className="carousel-item w-full pt-10">

                    <div class="flex items-center justify-center px-5 py-5 mx-auto">
                        <div class="w-full max-w-xl px-5 pt-5 pb-10 mx-auto rounded-lg shadow-lg">
                            <div class="w-full pt-1 pb-5 mx-auto -mt-16 text-center">
                                <a href="#" class="relative block">
                                    <img alt="profil" src={image} class="mx-auto object-cover rounded-full h-20 w-20 " />
                                </a>
                            </div>
                            <div class="w-full mb-10">
                                <div class="h-3 text-3xl leading-tight text-left text-indigo-500">
                                    “
                                </div>
                                <p class="px-5 text-sm text-center">
                                    To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
                                </p>
                                <div class="h-3 -mt-3 text-3xl leading-tight text-right text-indigo-500">
                                    ”
                                </div>
                            </div>
                            <div class="w-full">
                                <p class="font-bold text-center text-indigo-500 text-md">
                                    Tom Hardy
                                </p>
                                <p class="text-xs text-center text-gray-500 dark:text-gray-300">
                                    @thom.hardy
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div id="item2" className="carousel-item w-full">

                    <div class="flex items-center justify-center px-5 py-5 mx-auto">
                        <div class="w-full max-w-xl px-5 pt-5 pb-10 mx-auto rounded-lg shadow-lg">
                            <div class="w-full pt-1 pb-5 mx-auto -mt-16 text-center">
                                <a href="#" class="relative block">
                                    <img alt="profil" src={image} class="mx-auto object-cover rounded-full h-20 w-20 " />
                                </a>
                            </div>
                            <div class="w-full mb-10">
                                <div class="h-3 text-3xl leading-tight text-left text-indigo-500">
                                    “
                                </div>
                                <p class="px-5 text-sm text-center">
                                    To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
                                </p>
                                <div class="h-3 -mt-3 text-3xl leading-tight text-right text-indigo-500">
                                    ”
                                </div>
                            </div>
                            <div class="w-full">
                                <p class="font-bold text-center text-indigo-500 text-md">
                                    Tom Hardy
                                </p>
                                <p class="text-xs text-center text-gray-500 dark:text-gray-300">
                                    @thom.hardy
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div id="item3" className="carousel-item w-full">

                    <div class="flex items-center justify-center px-5 py-5 mx-auto">
                        <div class="w-full max-w-xl px-5 pt-5 pb-10 mx-auto rounded-lg shadow-lg">
                            <div class="w-full pt-1 pb-5 mx-auto -mt-16 text-center">
                                <a href="#" class="relative block">
                                    <img alt="profil" src={image} class="mx-auto object-cover rounded-full h-20 w-20 " />
                                </a>
                            </div>
                            <div class="w-full mb-10">
                                <div class="h-3 text-3xl leading-tight text-left text-indigo-500">
                                    “
                                </div>
                                <p class="px-5 text-sm text-center">
                                    To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
                                </p>
                                <div class="h-3 -mt-3 text-3xl leading-tight text-right text-indigo-500">
                                    ”
                                </div>
                            </div>
                            <div class="w-full">
                                <p class="font-bold text-center text-indigo-500 text-md">
                                    Tom Hardy
                                </p>
                                <p class="text-xs text-center text-gray-500 dark:text-gray-300">
                                    @thom.hardy
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
             
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div>
        </div>
    )
}

export default Testimonials