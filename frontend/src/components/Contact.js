import image from '../assets/images/letter.svg'
import { LinkedinLogo } from "@phosphor-icons/react";

import ContactForm from './ContactForm'

const Contact = () => {

    return (
        <div id="contact" className="pb-24 px-4">
            <div className="container mx-auto bg-base-200/75 rounded-md shadow-lg ">
                <div className="px-4 sm:px-6 lg:px-12 xl:px-16 py-24 grid gap-4 grid-cols-1 lg:grid-cols-2 place-items-center">
                    <div>
                        <h2 className="text-3xl font-extrabold sm:text-4xl">
                            Contact me Today and Get a Free Quote
                        </h2>
                        <p className="lg:z-10 relative mx-auto lg:mx-0 mt-2 max-w-2xl">
                            Fill out the form below and I will get back to you as soon as possible. Or you can Contact me on linked in. Thank you!
                            <a href="https://www.linkedin.com/in/rp42/" target="_blank" rel="noreferrer" className="text-primary hover:text-primary-focus inline-block -mb-4 ml-2"> <LinkedinLogo size={42} weight="light" /></a>
                        </p>

                        <ContactForm />
                    </div>
                    <div className="z-10 grid  hidden lg:block">

                        <img width="300" height="100" className="object-cover m-auto my-auto" src={image} alt="Paper plane" />

                    </div>
                </div>
            </div>
        </div>
    )

}

export default Contact