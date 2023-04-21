import image from '../assets/images/paper-plane-path.svg'

const Subscribe = () => {

    return (

        <div class="container mx-auto bg-base-200 mt-12 rounded-md shadow-xl">
            <div class="overflow-visible relative px-4 py-6 overflow-hidden sm:px-6 sm:py-8 lg:p-12 xl:p-16 text-center lg:text-left">
                <h2 class="z-20 relative text-2xl font-semibold font-display sm:text-3xl">
                    We&#x27;ve got more coming...
                </h2>
                <p class="z-20 relative mx-auto lg:mx-0 mt-2 max-w-xl">
                    Want to hear from us when we add new components? Sign up for our newsletter and we&#x27;ll email you every time we release a new batch of components.
                </p>
                <form>
                    <div class="z-20 relative mt-6 sm:flex justify-center lg:justify-stretch">
                        <div className="place-items-stretch">
                            <div className="form-control w-80 mx-auto lg:mx-0">
                                <label className="label">
                                    <span className="label-text">Enter your email address</span>
                                </label>
                                <div className="z-2 relative">
                                    <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                                    <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <div class="z-10 absolute grid inset-y-0 right-0 lg:left-2/3 xl:left-1/2 hidden lg:block">

                    <img class="object-cover m-auto maw-w-60 py-8 " src={image} alt="Paper plane" />

                </div>
            </div>
        </div>
    )

}

export default Subscribe