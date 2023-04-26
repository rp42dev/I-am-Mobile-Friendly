import React, { useState } from 'react';
import { CaretUp } from "@phosphor-icons/react";

const data = [
    {
        "question": "What is a mobile-friendly website?",
        "answer": "A mobile-friendly website is a website that is optimized for mobile devices, such as smartphones and tablets. It is designed to fit the small screen of mobile devices and provides a seamless browsing experience."
    },
    {
        "question": "Why is it important to have a mobile-friendly website?",
        "answer": "Having a mobile-friendly website is important because more and more people are using smartphones and tablets to browse the internet. If your website is not mobile-friendly, you could lose potential customers and revenue."
    },
    {
        "question": "How do I know if my website is mobile-friendly?",
        "answer": "You can use Google's Mobile-Friendly Test to check if your website is mobile-friendly. If your website is not mobile-friendly, you can contact us to build a mobile-friendly website for you."
    },
    {
        "question": "How can we help to transform my website?",
        "answer": "We offer website transformation services to help businesses like yours achieve a mobile-friendly website. Our team of experts will work with you to understand your business requirements and design a website that is mobile-friendly."
    },
    {
        "question": "How much does it cost to transform my website?",
        "answer": "The cost of transforming your website depends on the complexity of your website and the number of pages. We offer a free consultation to discuss your website requirements and provide you with a custom quote for your project."
    },
    {
        "question": "How long does it take to transform my website?",
        "answer": "The time it takes to transform your website depends on the complexity of your website and the number of pages. We offer a free consultation to discuss your website requirements and provide you with a custom quote for your project."
    },
    {
        "question": "What is the process of transforming my website?", 
        "answer": "The process of transforming your website involves the following steps: 1. We will analyze your website and provide you with a free consultation. 2. We will design a mobile-friendly website for you. 3. We will develop the website and test it on different devices."
    },
    {
        "question": "What are the benefits of transforming my website?",
        "answer": "The benefits of transforming your website include: 1. Increased traffic 2. Improved user experience 3. Increased conversion rate 4. Improved search engine ranking 5. Increased revenue"
    },
    {
        "question": "Can my website be transformed into a mobile-friendly website?",
        "answer": "Generally, yes. However, it depends on platform your website is built on. We work with a wide range of platforms. If you are not sure if your website can be transformed into a mobile-friendly website, please contact us for a free consultation."
    },
    {
        "question": "Is responsive design the same as mobile-friendly design?",
        "answer": "Responsive design is a type of mobile-friendly design. It is a design approach that allows a website to adapt to different screen sizes and devices. We deploy responsive design for all our websites. This ensures that your website will look great on all devices."
    },
]


function Accordion({ title, content }) {
    const [expanded, setExpanded] = useState(false)
    const toggleExpanded = () => {
        setExpanded((current) => !current)
        
    }

    return (
        <div className="my-4 md:my-6 cursor-pointer bg-base-200 rounded-md shadow-lg" onClick={toggleExpanded}>
            <div className="px-6 text-left items-center h-20 select-none flex justify-between flex-row">
                <h5 className={`flex-1 text-lg font-semibold text-left ${expanded ? "text-primary" : ""}`}>
                    {title}
                </h5>
                <div className="flex-none pl-2">
                    <label className="btn btn-circle btn-ghost btn-sm">

                        <span data-rotate="true" className={`transition-transform duration-300 ease-in ${expanded ? "rotate-180" : "rotate-0"}`}>
                            <CaretUp size={24} />
                        </span>
                    
                    </label>
                </div>
            </div>
            <div className={`px-6 pt-0 overflow-hidden transition-[max-height] duration-300 ease-in ${expanded ? "max-h-60" : "max-h-0"}`}>
                <p className="py-4 text-left border-t border-base-100">
                    {content}
                </p>
            </div>
        </div>
    )
}

const Faq = () => {
    return (
        <div className="container mx-auto mb-24" id="accordion">
            <h2 className="text-3xl font-bold text-center text-base-content">Frequently Asked Questions</h2>
            <div className="w-full px-4 lg:w-1/2 mx-auto">
                {data.map((item, index) => (
                    <Accordion key={index} title={item.question} content={item.answer} />
                ))}
            </div>
        </div>
    );
}

export default Faq;