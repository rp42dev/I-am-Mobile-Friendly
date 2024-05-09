
import React from 'react';

const Badge = ({ img, link, alt, title, subtitle, description, btn }) => {
    return (
        <div className="bg-base-200 rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
                <img src={img} alt={alt} className="w-16 h-16 rounded-full mr-4" />
                <div>
                    <a href={link} className="text-xl font-bold text-blue-600 hover:underline">{title}</a>
                    <div className="">{subtitle}</div>
                </div>
            </div>
            <div className="mb-4">{description}</div>
            <a href={btn.link} className="inline-block px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700">{btn.text}</a>
        </div>
    );
}

export default Badge;