import image from '../assets/images/letter.svg'
import { LinkedinLogo, Calendar } from "@phosphor-icons/react";

import ContactForm from './ContactForm'

const Contact = () => {

    return (
        <div id="contact" className="px-4 bg-base-200 ">
            <div className="container mx-auto">
                <div className="py-24 grid gap-4 grid-cols-1 lg:grid-cols-2 place-items-center sm:text-center lg:text-left">
                    <div className='space-y-6'>
                        <h2 className="text-3xl font-extrabold sm:text-5xl max-w-2xl">
                            <span className="block text-primary">Let's talk</span>	
                        </h2>
                        <p className="text-lg xl:text-xl lg:z-10 relative mx-auto lg:mx-0 mt-2 max-w-2xl">
                            Book a 30 minute consultation to discuss your project for free.
                        </p>

                        <a href="https://calendly.com/i-am-mobile-friendly/30min" target="_blank" rel="noreferrer" className="btn btn-primary btn-md">Book a free consultation<Calendar size={24} weight="light" className='ml-3'/> </a>

                        <p className="text-lg xl:text-xl lg:z-10 relative mx-auto lg:mx-0 mt-2 max-w-2xl">
                            Or send me a message if you prefer. I'll get back to you within 24 hours.
                        </p>

                        <ContactForm />
                    </div>
                    <div className="z-10 grid  hidden lg:block">

                        <img width="300" height="100" className="object-cover mx-auto my-auto" src={image} alt="Paper plane" />

                    </div>
                </div>
            </div>
        </div>
    )

}

export default Contact