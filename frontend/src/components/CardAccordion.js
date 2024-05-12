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
            <li className="flex items-start">
                <DotOutline size={24} />
                <p className="ml-2">{description}</p>
            </li>
        </ul>

    )

    return (
        <>
            <Accordion icon={icon} title={title} content={content} />
        </>
    )
}

export default CardAccordion