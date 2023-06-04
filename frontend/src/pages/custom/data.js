import { PenNib, Strategy, ChatCircleDots, Code, CloudArrowUp, Bug } from "@phosphor-icons/react";

const metaProps = {
    title: 'Custom Web Design & Development for an Exceptional Online Presenc | Freelance Web Developer',
    description: 'Unlock the potential of your business with customized, mobile-friendly websites created using modern technologies like React and Django. Whether you\'re in Ireland or anywhere in the world, I offer professional services to help you establish a strong online presence.',
}

const hero = [
    {
        title: 'Custom web',
        bg: 'bg-base-200',
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
        img: require('../../assets/images/prototype.svg').default,
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

const faqData = [
    {
        question: "What is custom mobile-friendly web design?",
        answer: "I provide custom mobile-friendly web design services as a freelance developer. This involves creating visually appealing, highly functional, and user-friendly websites specifically designed for mobile devices. I use responsive design techniques, modern technologies, and optimized coding practices to ensure seamless user experiences across different screen sizes and devices."
    },
    {
        question: "Why is custom mobile-friendly web design important?",
        answer: "In today's digital landscape, mobile devices have become the primary means of accessing the internet. Custom mobile-friendly websites are crucial for businesses to effectively reach and engage their target audience. They improve user experience, increase search engine visibility, boost conversion rates, and enhance overall customer satisfaction."
    },
    {
        question: "How long does it take to develop a custom mobile-friendly website?",
        answer: "The development timeline for a custom mobile-friendly website depends on factors such as project complexity, design requirements, and functionality scope. As a freelance developer, I prioritize delivering high-quality websites within reasonable timeframes. During the initial consultation, I provide an estimated timeline based on your specific needs."
    },
    {
        question: "What technologies are used in custom mobile-friendly web design?",
        answer: "As a freelance developer, I utilize modern technologies like React, a popular JavaScript library for building user interfaces, and Django, a robust and scalable Python web framework. These technologies enable me to create dynamic and responsive custom mobile-friendly websites that cater to your unique business requirements."
    },
    {
        question: "Can I update the content on my custom mobile-friendly website myself?",
        answer: "Yes, I offer user-friendly content management systems (CMS) that allow you to effortlessly update and manage your website's content. I provide guidance on effectively using the CMS, empowering you to make changes, add new content, and keep your website up-to-date without requiring technical expertise."
    },
    {
        question: "Will my custom mobile-friendly website be compatible with all mobile devices?",
        answer: "Absolutely! I understand the importance of cross-device compatibility in today's mobile-driven world. The custom mobile-friendly websites I create are designed and developed to be compatible with a wide range of mobile devices, including smartphones and tablets. Thorough testing and optimization ensure flawless functionality on various platforms, screen sizes, and operating systems."
    },
    {
        question: "Can I integrate third-party services and tools into my custom mobile-friendly website?",
        answer: "Certainly! I offer seamless integration of third-party services and tools to enhance the functionality and capabilities of your custom mobile-friendly website. Whether it's integrating payment gateways, social media platforms, or customer relationship management (CRM) systems, I ensure smooth integration and seamless operation."
    },
    {
        question: "Will my custom mobile-friendly website be search engine optimized?",
        answer: "Yes, search engine optimization (SEO) is an integral part of my web development process. I follow industry best practices and adhere to Google's guidelines to optimize your website for search engines. From optimized code structure and meta tags to keyword research and on-page optimization, I implement strategies that improve your website's visibility and organic search rankings."
    },
    {
        question: "Can I request additional features and functionalities for my custom mobile-friendly website?",
        answer: "Certainly! I encourage clients to share specific requirements and ideas for additional features and functionalities. I carefully evaluate your requests and provide professional recommendations to enhance your website's performance and user experience. I am committed to turning your vision into reality and delivering a website that exceeds your expectations."
    },
    {
        question: "How much does custom mobile-friendly web design cost?",
        answer: "The cost of custom mobile-friendly web design varies depending on factors such as project scope, complexity, design requirements, and desired functionalities. As a freelance developer, I believe in fair and transparent pricing. After understanding your specific needs, I provide a detailed quote outlining the costs involved. My pricing structure is competitive and tailored to the requirements of small businesses."
    }
];

const what = [
    {
        id: 1,
        custom: false,
        title: 'What is Custom Web Development?',
        img: require('../../assets/images/modern.svg').default,
        description: 'Custom web development involves the creation of unique and tailored online solutions that cater specifically to the needs and goals of your business. As a freelance web developer, I specialize in designing and building custom websites using modern technologies such as React and Django',
        steps: [
            {
                id: 1,
                title: 'Uniqueness and Personalization:',
                text: "Custom web development allows for complete control over the design and functionality of your website. Every aspect can be tailored to reflect your brand identity, ensuring a unique and personalized online presence that resonates with your target audience."
            },
            {
                id: 2,
                title: 'Scalability and Future-Proofing:',
                text: "Custom websites are built with scalability in mind, allowing for easy expansion and addition of new features as your business grows. By leveraging modern technologies, your website remains adaptable and future-proof, ensuring long-term success."
            },
            {
                id: 3,
                title: 'Enhanced Performance and User Experience:',
                text: "Custom web development allows for optimized coding practices and performance enhancements, resulting in a website that loads quickly, is highly responsive, and provides a seamless user experience. This translates to higher engagement, increased conversions, and improved customer satisfaction."
            },
        ]
    }
]

export { features, faqData, hero, benefits, process, metaProps, what }
