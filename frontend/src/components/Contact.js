import { Calendar } from "@phosphor-icons/react";

import image from '../assets/images/meeting.svg'
import bookingBg from '../assets/images/booking_bg.svg'

const Contact = () => {
    return (
        <div id="contact" className="px-4 bg-base-200 relative">
                <div className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat rounded-xl opacity-70" style={{ backgroundImage: `url(${bookingBg})` }}></div>
            <div className="container mx-auto relative">

                <div className="py-24 grid gap-4 grid-cols-1 lg:grid-cols-2 place-items-center sm:text-center lg:text-left">
                    <div className='space-y-6'>
                        <h2 className="text-3xl font-extrabold sm:text-5xl max-w-2xl">
                            <span className="block text-primary">Let's talk</span>	
                        </h2>
                        <p className="text-lg xl:text-xl lg:z-10 relative mx-auto lg:mx-0 mt-2 max-w-2xl">
                            Schedule a free consultation to discuss your project or ask any questions you may have. I'm here to help you bring your ideas to life.
                        </p>
                        <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2xMsnYixswy0OzkcailfXD_gKqYxXZwAkC_K2MkSqet2b4jb9SpQw_m8PWUou2B773NxLajf-r" target="_blank" rel="noreferrer" className="btn btn-primary btn-md">Book a free consultation<Calendar size={24} weight="light" className='ml-3'/> </a>
                    </div>
                    <div className="grid mt-8 lg:mt-0">
                        <img width="400" height="300" className="object-cover mx-auto my-auto z-0" src={image} alt="Paper plane" />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Contact