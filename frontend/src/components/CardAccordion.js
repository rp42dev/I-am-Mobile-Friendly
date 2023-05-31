import { Link } from 'react-router-dom'
import React, { useState } from "react";
import { CheckFat, CaretUp } from "@phosphor-icons/react";

import Accordion from './Accordion';


const CardAccordion = ({ title, description, icon, link, check }) => {
    const [expanded, setExpanded] = useState(false)
    const toggleExpanded = () => {
        setExpanded((current) => !current)
    }

    const content = (

        <ul className="text-base text-left">
            {description.map((item, index) => {
                return (
                    <li key={index} className="flex items-start lg:col-span-1 space-y-1">
                        {check &&
                            <div className="flex-shrink-0">
                                <CheckFat size={20} color="green" />
                            </div>}
                        <p className="ml-2 text-sm">
                            {item}
                        </p>
                    </li>
                )
            })}
        </ul>

    )

    return (
        <>
            <div className="relative min-w-0 w-full h-full lg:min-w-0 lg:w-1/3 xl:w-1/4 py-6 text-left bg-base-200/75 rounded-md shadow-lg">

                <div className="flex flex-wrap content-center absolute -left-0 -top-0 px-1 py-2 bg-primary rounded-tl-lg rounded-br-lg w-20 h-16">
                    <div className="relative w-full px-4 lg:w-1/2 text-white">
                        {icon}
                    </div>
                </div>

                <div className="pt-6">
                    <Accordion title={title} content={content} />
                </div>
            </div>
        </>
    )
}

export default CardAccordion