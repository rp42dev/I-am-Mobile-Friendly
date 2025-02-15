import { Link } from 'react-router-dom'
import { CheckFat } from "@phosphor-icons/react";

import cardBg from '../assets/images/card-bg.svg'


const Card = ({ title, description, icon, link, check, target }) => {
    const content = (
        <div className="relative w-full px-4 py-6 mt-6 text-left bg-base-100/50 hover:bg-base-200/50 rounded-xl h-100 min-h-full ease-in-out duration-300 shadow-md hover:shadow-lg ">
            <div className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat rounded-xl opacity-70" style={{ backgroundImage: `url(${cardBg})` }}></div>

            <div className="flex flex-wrap content-center absolute -left-0 -top-0 px-1 py-2 bg-primary rounded-tl-lg rounded-br-lg w-20 h-16">
                <div className="relative w-full px-4 lg:w-1/2 text-base-100">
                    {icon}
                </div>
            </div>


            <h3 className="py-4 px-2 font-semibold text-lg sm:text-2xl mt-8">
                {title}
            </h3>

            <ul className="text-base text-left">
                {description.map((item, index) => {
                    return (
                        <li key={index} className="flex items-start lg:col-span-1 space-y-1">
                            {check &&
                                <div className="flex-shrink-0">
                                    <CheckFat size={20} color="green" />
                                </div>}
                            <p className="ml-2 text-sm xl:text-lg">
                                {item}
                            </p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )

    return (
        <>
            {link ? (
                <Link to={link} target={target} className='min-w-0 w-full'>
                    {content}
                </Link>
            ) : (
                <div className='min-w-0 w-full'>
                    {content}
                </div>
            )}
        </>
    )
}

export default Card