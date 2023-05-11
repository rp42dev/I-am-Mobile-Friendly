import { ArrowBendRightDown } from "@phosphor-icons/react";
import { useContext } from 'react';
import ThemeContext from '../ThemeContext';

const Hero = ({ data }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="home mx-auto pb-24 px-4 sm:px-6">
            <div className="mt-8 container">
                <div className="max-w-full hero-content flex-col xl:flex-row-reverse justify-between mx-auto p-0">
                    <div className="max-w-2xl w-full h-full">
                        <div className="flex justify-center p-0 xl:px-4 py-4 xl:py-0 shadow-inherit max-h-screen">
                            <img src={data.image} alt="Hero mobile friendly" className="hero-img object-contain max-full w-full" />
                        </div>
                    </div>
                    <div className="relative flex-1">
                        <span className="w-20 h-2 mb-12"></span>
                        <h1 className="flex flex-col text-5xl font-black leading-none uppercase font-bebas-neue sm:text-8xl">
                            {data.title}
                            <span className="text-3xl sm:text-5xl max-w-2xl">
                                {data.subtitle}
                            </span>
                        </h1>
                        <p className="py-6 text-xl max-w-2xl text-left">
                            {data.description}
                        </p>
                        <div className="mt-8 mx-auto text-center lg:text-left btn-group">
                            <a href={data.link} className="btn px-4 py-2 btn-primary border-2">
                                Get started
                            </a>
                            <a href={data.link2} className="px-4 py-0 mr-4 btn btn-outline btn-primary text-md ">
                                <div className={`flex items-center justify-center hover:text-white ${theme === 'dark' ? 'text-white' : 'text-primary'}`}>
                                    <span className="mr-2 mt-1">Learn more</span>
                                    <ArrowBendRightDown size={22} weight="bold"></ArrowBendRightDown>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero