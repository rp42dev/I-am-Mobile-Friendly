import { PenNib, PiggyBank, ArrowClockwise, Strategy, ChatCircleDots, Code, CloudArrowUp, Bug } from "@phosphor-icons/react";

const metaProps = {
    title: 'Custom Web Design & Development for an Exceptional Online Presenc | Freelance Web Developer',
    description: 'Unlock the potential of your business with customized, mobile-friendly websites created using modern technologies like React and Django. Whether you\'re in Ireland or anywhere in the world, I offer professional services to help you establish a strong online presence.',
}


const faqData = [
    {
        question: "What is custom mobile-friendly web design?",
        answer: "I offer custom mobile-friendly web design services as a freelance developer. It refers to the process of creating websites that are specifically tailored to be visually appealing, highly functional, and user-friendly on mobile devices. I utilize responsive design techniques, modern technologies, and optimized coding practices to ensure seamless user experiences across various screen sizes and devices."
    },
    {
        question: "Why is custom mobile-friendly web design important?",
        answer: "In today's digital landscape, mobile devices have become the primary means of accessing the internet. Having a custom mobile-friendly website is crucial for businesses to reach and engage their target audience effectively. Mobile-friendly websites improve user experience, boost search engine visibility, increase conversion rates, and enhance overall customer satisfaction."
    },
    {
        question: "How long does it take to develop a custom mobile-friendly website?",
        answer: "The development timeline for a custom mobile-friendly website depends on various factors, such as the project's complexity, design requirements, and the scope of functionality. As a freelance developer, I prioritize delivering high-quality websites within reasonable timeframes. After understanding your specific needs, I provide you with an estimated timeline during the initial consultation phase."
    },
    {
        question: "What technologies are used in custom mobile-friendly web design?",
        answer: "As a freelance developer, I leverage modern technologies to create custom mobile-friendly websites that deliver exceptional performance and functionality. Some of the technologies I use include React, a popular JavaScript library for building user interfaces, and Django, a robust and scalable Python web framework. These technologies enable me to develop dynamic and responsive websites that cater to your unique business requirements."
    },
    {
        question: "Can I update the content on my custom mobile-friendly website myself?",
        answer: "Yes, I provide my clients with user-friendly content management systems (CMS) that allow you to update and manage the content on your website effortlessly. I will guide you on how to use the CMS effectively, empowering you to make changes, add new content, and keep your website up-to-date without the need for technical expertise."
    },
    {
        question: "Will my custom mobile-friendly website be compatible with all mobile devices?",
        answer: "Absolutely! I understand the importance of cross-device compatibility in today's mobile-driven world. The custom mobile-friendly websites I create are designed and developed to be compatible with a wide range of mobile devices, including smartphones and tablets. I conduct thorough testing and optimization to ensure that your website functions flawlessly on various platforms, screen sizes, and operating systems."
    },
    {
        question: "Can I integrate third-party services and tools into my custom mobile-friendly website?",
        answer: "Certainly! I offer seamless integration of third-party services and tools to enhance the functionality and capabilities of your custom mobile-friendly website. Whether you need to integrate payment gateways, social media platforms, customer relationship management (CRM) systems, or any other service, I will ensure smooth integration and seamless operation."
    },
    {
        question: "Will my custom mobile-friendly website be search engine optimized?",
        answer: "Yes, search engine optimization (SEO) is an integral part of my web development process. I follow industry best practices and adhere to Google's guidelines to optimize your website for search engines. From optimized code structure and meta tags to keyword research and on-page optimization, I implement strategies that improve your website's visibility and organic search rankings."
    },
    {
        question: "Can I request additional features and functionalities for my custom mobile-friendly website?",
        answer: "Certainly! I encourage my clients to share their specific requirements and ideas for additional features and functionalities. I will carefully evaluate your requests and provide professional recommendations to enhance your website's performance and user experience. I am committed to turning your vision into reality and delivering a website that exceeds your expectations."
    },
    {
        question: "How much does custom mobile-friendly web design cost?",
        answer: "The cost of custom mobile-friendly web design varies depending on several factors, including the project scope, complexity, design requirements, and desired functionalities. As a freelance developer, I believe in fair and transparent pricing. After understanding your specific needs, I provide you with a detailed quote that outlines the costs involved. My pricing structure is designed to be competitive and tailored to the requirements of small businesses."
    }
];

const features = [
    {
        id: 1,
        custom: true,
        bg: 'bg-base-200',
        text: "Key Features of My Custom Mobile-Friendly Websites",
        data: [
            {
                id: 1,
                title: "Responsive Design for Seamless User Experience",
                text: "Enjoy optimal viewing and interaction on all devices. Your website will automatically adjust to provide an intuitive and visually appealing experience for every user."
            },
            {
                id: 2,
                title: "Utilizing Modern Technologies for Superior Performance",
                text: "Leverage modern technologies like React, Node, and Django to create dynamic and scalable websites with exceptional functionality and performance."
            },
            {
                id: 3,
                title: "Customizable Layouts Aligned with Your Brand",
                text: "Have complete control over the design, layout, and features of your website. Tailor the aesthetics to perfectly align with your unique brand identity."
            },
            {
                id: 4,
                title: "Optimized Performance for Speed and Efficiency",
                text: "Ensure fast loading speeds and efficient resource utilization. Deliver a lightning-fast browsing experience that keeps visitors engaged."
            },
            {
                id: 5,
                title: "Endless Customization to Suit Your Needs",
                text: "Add any desired feature or functionality. Tailor your website to meet your unique requirements and stand out from the competition."
            },
            {
                id: 6,
                title: "Seamless Integration Capabilities",
                text: "Enhance your website's functionality by seamlessly integrating third-party services and tools. Create a comprehensive online presence."
            }
        ]
    }
];

const hero = [
    {
        title: 'Custom web',
        bg: 'bg-base-300',
        subtitle: 'Design & Development for an Exceptional Online Presence',
        description: 'Unlock the potential of your business with customized, mobile-friendly websites created using modern technologies like React and Django. Whether you\'re in Ireland or anywhere in the world, I offer professional services to help you establish a strong online presence.',
        image: require('../../assets/images/custom.svg').default,
        alt: 'Custom Website Design & Development displaying responsive design',
        btn: 'Get started',
        btn2: 'Learn more',
        link: '#contact',
        link2: '#features2'
    }
]

const process = [
    {
        id: 1,
        bg: 'bg-base',
        img: require('../../assets/images/process2.svg').default,
        title: "Streamlined Development Process",
        description: "",
        steps: [
            {
                id: 1,
                title: "Consultation",
                icon: <ChatCircleDots size={32} />,
                text: ["We begin by understanding your business goals, target audience, and specific requirements. This consultation phase helps us align our development strategy with your vision."],
                link: ""
            },
            {
                id: 2,
                title: "Planning",
                icon: <Strategy size={32} />,
                text: ["I create a detailed plan that outlines the project scope, timeline, and milestones. We collaborate closely to ensure that all aspects of your website are considered."],
                link: ""
            },
            {
                id: 3,
                title: "Prototyping",
                icon: <PenNib size={32} />,
                text: ["I develop interactive prototypes that give you a visual representation of the website's layout, features, and user flow. This step allows you to provide feedback and make informed decisions about the design and functionality."],
                link: ""
            },
            {
                id: 4,
                title: "Development",
                icon: <Code size={32} />,
                text: ["I bring your website to life, employing the latest technologies and coding practices to ensure optimal performance and functionality."],
                link: ""
            },
            {
                id: 5,
                title: "Deployment",
                icon: <CloudArrowUp size={32} />,
                text: ["Once the development phase is complete, I deploy your website to the hosting environment of your choice, ensuring a seamless transition from development to the live environment."],
                link: ""
            },
            {
                id: 6,
                title: "Testing",
                icon: < Bug size={ 32} />,
                text: ["I conduct comprehensive testing to ensure that your website functions flawlessly across different devices, browsers, and operating systems. This testing phase guarantees that your website is ready for a smooth user experience."],
                link: ""
            }
        ]
    }
];

const benefits = [
    {
        id: 1,
        custom: true,
        bg: 'bg-base-200',
        text: "Benefits of Choosing My Services",
        data: [
            {
                id: 1,
                title: "Direct Communication, No Middleman",
                text: "Experience clear and efficient communication by directly working with me throughout the project. Eliminate intermediaries for a personalized experience and better understanding of your needs."
            },
            {
                id: 2,
                title: "Customized Solutions for Your Business",
                text: "Tailor-made solutions that understand the uniqueness of your business. I work closely with you to create a custom website that aligns perfectly with your brand and helps you achieve your goals."
            },
            {
                id: 3,
                title: "Competitive Pricing for Small Businesses",
                text: "Accessible and affordable web development pricing for small businesses. Enjoy transparent pricing with no hidden fees, ensuring exceptional value for your investment."
            },
            {
                id: 4,
                title: "Fast Turnaround Time, Minimal Downtime",
                text: "Quick website development to minimize downtime and maximize your online presence. My dedicated team works diligently to ensure your website is up and running as soon as possible."
            },
            {
                id: 5,
                title: "Ongoing Support and Maintenance",
                text: "Comprehensive support and maintenance services beyond the initial development phase. I provide updates, enhancements, and address concerns to keep your website functioning smoothly."
            },
            {
                id: 6,
                title: "Mobile-Friendly Design for Seamless User Experience",
                text: "Prioritize mobile responsiveness in all custom web development projects. Your website will seamlessly adapt to various mobile devices, ensuring a user-friendly experience for all visitors."
            }
        ]
    }
];

export { features, faqData, hero, benefits, process, metaProps }
