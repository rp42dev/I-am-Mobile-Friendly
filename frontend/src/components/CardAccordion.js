import { Link } from 'react-router-dom'
import React, { useState } from "react";
import { DotOutline } from "@phosphor-icons/react";

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
                                <DotOutline size={20} color="green" />
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
            <Accordion icon={icon} title={title} content={content} />
        </>
    )
}

export default CardAccordion