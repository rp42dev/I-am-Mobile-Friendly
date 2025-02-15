import { ArrowBendRightDown, CalendarDots } from "@phosphor-icons/react";
import { useContext } from 'react';
import ThemeContext from '../ThemeContext';

import patternImage from '../assets/images/patern.webp';

const Hero = ({ data }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`home min-h-dvh grid place-items-center py-24 px-4 relative bg-base-${data.bg}`}>
            <img src={patternImage} alt="pattern" className="absolute inset-0 object-cover w-full h-full z-0 opacity-50" />
            <div className="container mx-auto mt-8">
                <div className="max-w-full hero-content flex-col xl:flex-row-reverse justify-between mx-auto p-0">
                    <div className="max-w-2xl w-full h-full">
                        <div className="p-0 xl:px-4 py-4 xl:py-0">
                            <img width="1500" height="1200" src={data.image} alt={data.alt} className="slide-in-right hero-img object-contain max-full w-full" />
                        </div>
                    </div>
                    <div className="relative flex-1 fade-in sm:text-center xl:text-left">
                        <span className="w-20 h-2 mb-12"></span>
                        <h1 className="flex flex-col text-5xl font-black leading-none font-bebas-neue sm:text-8xl text-primary uppercase">
                            {data.title}
                            <span className="text-3xl sm:text-5xl max-w-3xl text-base-content font-bold mt-2">
                                {data.subtitle}
                            </span>
                        </h1>
                        <p className="py-6 text-lg xl:text-xl max-w-3xl">
                            {data.description}
                        </p>
                        {data.btn && (
                            <div className="mt-8 mx-auto xl:mx-0 join flex grid grid-cols-2 w-full sm:w-8/12">
                                <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2xMsnYixswy0OzkcailfXD_gKqYxXZwAkC_K2MkSqet2b4jb9SpQw_m8PWUou2B773NxLajf-r" target='_blank' className="btn px-4 py-2 btn-primary border-2 join-item">
                                    Book A Call
                                    <CalendarDots size={32} />
                                </a>
                                <a href={data.link2} className="px-4 py-0 btn btn-outline btn-primary text-md join-item">
                                    <div className={`flex items-center justify-center`}>
                                        <span className="mr-2 mt-1">{data.btn2 ? data.btn2 : "Learn more"}</span>
                                        <ArrowBendRightDown size={22} weight="bold"></ArrowBendRightDown>
                                    </div>
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero