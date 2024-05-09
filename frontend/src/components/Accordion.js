import { CaretUp } from "@phosphor-icons/react";
import React, { useState } from "react";

function Accordion({ icon, title, content }) {
    const [expanded, setExpanded] = useState(false)
    const toggleExpanded = () => {
        setExpanded((current) => !current)
    }

    return (
        <div className="cursor-pointer" onClick={toggleExpanded}>
            <div className="bg-base-200 border border-base-300 rounded-md px-6 py-4 text-left items-center select-none flex justify-between flex-row">
                <h3 className={`flex flex-1 text-md xl:text-lg font-semibold text-left ${expanded ? "text-primary" : ""}`}>
                    {icon && (
                        <span className="mr-3 inline-block text-primary">
                            {icon}
                        </span>
                    )}
                    {title}
                </h3>
                <div className="flex-none pl-2">
                    <label className="btn btn-circle btn-ghost btn-sm">

                        <span data-rotate="true" className={`transition-transform duration-300 ease-in ${expanded ? "rotate-180" : "rotate-0"}`}>
                            <CaretUp size={24} />
                        </span>

                    </label>
                </div>
            </div>
            <div className={`bg-base-200 rounded-md flex-none px-6 pt-0 overflow-hidden transition-[max-height] duration-300 ease-in ${expanded ? "max-h-80" : "max-h-0"}`}>
                <p className="py-4 text-left text-sm sm:text-base">
                    {content}
                </p>
            </div>
        </div>
    )
}

export default Accordion