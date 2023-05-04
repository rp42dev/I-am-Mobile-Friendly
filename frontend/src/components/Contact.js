import image from '../assets/images/paper-plane-path.svg'

import ContactForm from './ContactForm'

const Contact = () => {

    return (
        <div id="contact" className="pb-24">
            <div className="container mx-auto bg-base-200 rounded-md shadow-xl ">
                <div className="px-4 sm:px-6 lg:px-12 xl:px-16 py-24 grid gap-4 grid-cols-1 lg:grid-cols-2 place-items-center">
                    <div>
                        <h2 className="text-3xl font-extrabold sm:text-4xl">
                            Contact Us Today and Get a Free Quote
                        </h2>
                        <p className="z-20 relative mx-auto lg:mx-0 mt-2 max-w-2xl">
                            Please fill out the form below and we will get back to you as soon as possible.
                        </p>

                        <ContactForm />
                    </div>
                    <div className="z-10 grid  hidden lg:block">

                        <img className="object-cover m-auto maw-w-60 py-8 my-auto" src={image} alt="Paper plane" />

                    </div>
                </div>
            </div>
        </div>
    )

}

export default Contact