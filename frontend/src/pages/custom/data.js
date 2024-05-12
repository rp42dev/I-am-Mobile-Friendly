import { PenNib, Strategy, ChatCircleDots, Code, CloudArrowUp, Bug } from "@phosphor-icons/react";

const metaProps = {
    title: 'Custom Web-App Development Services',
    description: 'Discover custom web applications tailored to your unique business needs. Our dynamic, responsive, and user-friendly web apps offer endless customization possibilities to help your business stand out from the competition.',
}

const hero = [
    {
        title: 'Custom',
        bg: 'bg-base-200',
        subtitle: 'Web-app Development',
        description: 'Custom web applications tailored to your unique business needs. Dynamic, responsive, and user-friendly web applications with endless customization possibilities to help you stand out from the competition.',
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
        bg: 'bg-base-200',
        img: require('../../assets/images/prototype.svg').default,
        title: "Streamlined Development Process",
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
        bg: 'bg-base',
        text: "Key Features of Custom Web applications",
        data: [
            {
                id: 1,
                title: "Responsive Design for Seamless User Experience",
                text: "Enjoy optimal viewing and interaction on all devices. Your website will automatically adjust to provide an intuitive and visually appealing experience for every user."
            },
            {
                id: 2,
                title: "Utilizing Modern Technologies for Superior Performance",
                text: "Leverage modern technologies like React, and Django to create dynamic and scalable websites with exceptional functionality and performance."
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

const faqData = [
    {
        question: "What is custom app development?",
        answer: "Custom app development involves creating applications tailored to specific business needs and requirements, offering unique functionalities and features that address particular challenges or goals."
    },
    {
        question: "What are the benefits of custom web app development for my business?",
        answer: "Custom web app development offers numerous benefits, including personalized solutions, enhanced functionality, scalability, and security, ensuring that your app aligns perfectly with your business goals and audience needs."
    },
    {
        question: "How do you ensure that the custom web app aligns with my business goals and audience needs?",
        answer: "We begin with a thorough consultation to understand your business objectives, target audience, and requirements, allowing us to develop a tailored plan and prototype aligned with your vision."
    },
    {
        question: "Can I provide feedback during the development process?",
        answer: "Absolutely! Your input is valuable. We welcome feedback throughout development, including prototyping and testing, to refine the app and meet your expectations."
    },
    {
        question: "What technologies do you use for custom web app development?",
        answer: "We use modern technologies like React, Django, and other frameworks to ensure superior performance, scalability, and security for your custom web app."
    },
    {
        question: "How long does it typically take to develop a custom web app?",
        answer: "The development timeline varies based on project complexity and requirements. We provide transparent timelines during the planning phase to ensure timely delivery without compromising quality."
    },
    {
        question: "Do you handle app deployment and hosting?",
        answer: "Yes, we take care of deploying your custom web app to your chosen hosting environment, ensuring a seamless transition from development to the live environment."
    },
    {
        question: "What measures do you take to ensure the security of custom web apps?",
        answer: "We prioritize app security and implement industry-standard practices like data encryption, secure authentication methods, and regular security audits to protect user data."
    },
    {
        question: "Can you integrate third-party services or APIs into custom web apps?",
        answer: "Absolutely! We have expertise in seamlessly integrating third-party services and tools to enhance your web app's functionality and user experience."
    },
    {
        question: "What support and maintenance services do you offer after the app is deployed?",
        answer: "We provide ongoing support and maintenance post-deployment, addressing issues, implementing updates, and ensuring optimal performance and security for your custom web app."
    },
    {
        question: "How can I get started with custom web app development services?",
        answer: "Feel free to reach out for a consultation! We'll discuss your app ideas, goals, and requirements, guiding you through the development process to bring your vision to life."
    }
];


export default faqData;

export { features, faqData, hero, process, metaProps }
