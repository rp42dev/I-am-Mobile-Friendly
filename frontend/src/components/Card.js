import { Link } from 'react-router-dom'
import { CheckFat } from "@phosphor-icons/react";


const Card = ({ title, description, icon, link, check }) => {
    const content = (
        <div className="relative w-full px-4 py-6 mt-6 text-left bg-base-200/75 rounded-md h-100">

            <div className="flex flex-wrap content-center absolute -left-0 -top-0 px-1 py-2 bg-primary rounded-tl-lg rounded-br-lg w-20 h-16">
                <div className="relative w-full px-4 lg:w-1/2 text-white">
                    {icon}
                </div>
            </div>

            <h3 className="py-4 font-semibold text-lg sm:text-2xl mt-8">
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
                <Link to={link} className='min-w-0 w-full'>
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