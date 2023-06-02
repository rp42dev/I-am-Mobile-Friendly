import { ArrowBendRightDown } from "@phosphor-icons/react";
import { useContext } from 'react';
import ThemeContext from '../ThemeContext';

const Hero = ({ data }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`home min-h-screen grid place-items-center py-24 px-4 ${data.bg}`}>
            <div className="mt-8 container mx-auto">
                <div className="max-w-full hero-content flex-col xl:flex-row-reverse justify-between mx-auto p-0">
                    <div className="max-w-2xl w-full h-full">
                        <div className="flex justify-center p-0 xl:px-4 py-4 xl:py-0 max-h-screen">
                            <img width="1500" height="1200" src={data.image} alt={data.alt} className="slide-in-right hero-img object-contain max-full w-full" />
                        </div>
                    </div>
                    <div className="relative flex-1 fade-in text-center xl:text-left">
                        <span className="w-20 h-2 mb-12"></span>
                        <h1 className="flex flex-col text-5xl font-black leading-none font-bebas-neue sm:text-8xl">
                            {data.title}
                            <span className="text-3xl sm:text-5xl max-w-3xl text-base-content font-bold">
                                {data.subtitle}
                            </span>
                        </h1>
                        <p className="py-6 sm:text-xl max-w-3xl">
                            {data.description}
                        </p>
                        {data.btn  && (
                            <div className="mt-8 mx-auto xl:mx-0 btn-group flex grid grid-cols-2 w-full sm:w-8/12">
                            <a href={data.link} className="btn px-4 py-2 btn-secondary border-2">
                                {data.btn ? data.btn : "Learn more"}
                            </a>
                                <a href={data.link2} className="px-4 py-0 btn btn-outline btn-primary text-md">
                                <div className={`flex items-center justify-center hover:text-white ${theme === 'dark' ? 'text-white' : 'text-primary'}`}>
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