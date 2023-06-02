import { PenNib, PiggyBank, ArrowClockwise, Devices, ArrowArcRight } from "@phosphor-icons/react";

const hero = [
    {
        title: 'I\'m Raivis',
        subtitle: 'Web Developer & Designer',
        description: 'I am a freelance web developer based in Ireland, and I take pride in offering mobile-friendly web design and development services. My goal is to help small businesses and individuals establish a strong online presence and unlock the full potential of their business. I can create a mobile-friendly website that perfectly aligns with your unique needs and budget.',
        image: require('../../assets/images/me.svg').default,
        alt: 'Responsive Website Design & Development displaying a Desktop, Tablet, Mobile Devices - Image of me',
        btn: 'Contact me',
        btn2: 'My Vision',
        link: '#contact',
        link2: '#features4'
    }
]

const vision = [
    {
        title: 'My Vision',
        description: 'My vision is to empower businesses and individuals by creating websites that work seamlessly on all devices. I want to contribute to the digital world by making websites accessible, attractive, and optimized for mobile users. I firmly believe that mobile-friendly design is the key to unlocking the true potential of online presence and enhancing user engagement.',
        btn: '',
        link: '',
    }
]

const mission = [
    {
        title: 'My Mission',
        description: 'I am on a mission to make the web a more user-friendly and accessible place, one mobile-friendly website at a time. I want to help businesses and individuals reach their full potential by creating websites that work seamlessly on all devices.',
        btn: '',
        link: '',
    }
]

const mobile = [
    {
        id: 1,
        custom: true,
        text: 'Key Features of Mobile-Friendly Websites',
        description: 'Mobile-friendly websites are designed to fit the small screen of mobile devices and provide a seamless browsing experience. They are optimized for mobile devices and provide a better user experience. They are also optimized for search engines to increase my online visibility.',
        data: [
            {
                id: 1,
                title: 'Responsive Design',
                text: "Seamlessly adapts to different screen sizes and resolutions."
            },
            {
                id: 2,
                title: 'Mobile-Friendly Content',
                text: "Optimized for mobile devices to increase my online visibility."
            },
            {
                id: 3,
                title: 'Enhanced Readability',
                text: "Improved readability for better user engagement and conversion rate."
            },
            {
                id: 4,
                title: 'Fast Loading Speed',
                text: "Optimized for fast loading speed to improve user experience and search engine ranking."
            },
            {
                id: 5,
                title: 'SEO Friendly',
                text: "Optimized for search engines to increase my online visibility"
            },
            {
                id: 6,
                title: 'Improved User Experience',
                text: "Improved user experience for better engagement and conversion rate."
            },
        ]
    }
]

const faqData = [
    {
        question: "What services do you provide?",
        answer: "I offer a comprehensive range of web development services, including custom web development, budget web development, and mobile website transformation.",
    },
    {
        question: "What is custom web development?",
        answer: "Custom web development involves creating unique websites tailored to meet the specific requirements of businesses. I utilize technologies like React and Django to develop highly customized solutions.",
    },
    {
        question: "What is budget web development?",
        answer: "Budget web development focuses on providing cost-effective website solutions without compromising on quality. I utilize platforms like WordPress, cPanel, or existing templates to deliver affordable web development options.",
    },
    {
        question: "What is mobile website transformation?",
        answer: "Mobile website transformation involves converting existing non-mobile-friendly websites into mobile-friendly versions. Regardless of the technology used, I have the expertise to transform my website into a mobile-friendly and responsive platform.",
    },
    {
        question: "Which areas do you cover?",
        answer: "I serve clients in Ireland, specifically in locations such as Drogheda and Dublin. Additionally, I provide remote services to clients worldwide.",
    },
    {
        question: "How do I ensure the quality of custom web development?",
        answer: "I take a personalized and individual approach to each custom web development project, ensuring that the final product meets the client's requirements and adheres to high-quality standards.",
    },
    {
        question: "Can you work with existing website templates?",
        answer: "Yes, as part of my budget web development service, I can utilize existing templates and customize them to suit my branding and business needs.",
    },
    {
        question: "What technologies do you use for custom web development?",
        answer: "I utilize modern technologies like React and Django for custom web development projects, ensuring robust and scalable solutions.",
    },
    {
        question: "How long do it take to transform a non-mobile-friendly website into a mobile-friendly version?",
        answer: "The time required for mobile website transformation depends on the complexity and size of the website. I work efficiently to ensure a smooth transition to a mobile-friendly platform.",
    },
    {
        question: "Can You provide hosting services for websites?",
        answer: "Yes, I offer hosting solutions and can assist you in setting up VPS or dedicated servers to ensure optimal performance and security for your website.",
    },
];


const services = [
    {
        id: 1,
        custom: false,
        title: 'My Services',
        description: '',
        steps: [
            {
                id: 1,
                icon: <Devices size={32} />,
                title: "Custom Web Development",
                text: ["Custom design tailored to my specific needs",
                    "Development using modern technologies like React and Django",
                    "Hosting options: VPS or dedicated servers."],
                link: "/custom-web-development",
                check: true
            },
            {
                id: 2,
                icon: <PiggyBank size={32} />,
                title: "Budget Web Development",
                text: ["Cost-effective solution to establish my online presence",
                    "Website Development using WordPress or existing templates",
                    "Hosting options: shared or cloud hosting"],
                link: "/budget-web-development",
                check: true
            },
            {
                id: 3,
                icon:
                    <div className="relative">
                        <div className="absolute left-0 -top-3">
                            <ArrowArcRight size={28} weight="light" />
                        </div>
                        <div>
                            <Devices size={32} weight="light" />
                        </div>
                    </div>
                ,
                title: "Mobile Website Transformation",
                text: ["Convert my existing non-mobile-friendly website into a mobile-friendly version.",
                    "Regardless of the underlying technology stack (WordPress, Static HTML, etc.)"
                ],
                link: "/mobile-website-transformation",
                check: true
            },
        ]

    }
]

const benefits = [
    {
        id: 1,
        custom: true,
        text: 'Benefits of choosing me!',
        description: 'As a freelance web developer, I offer a range of benefits to my clients, some of which include:',
        data: [
            {
                id: 1,
                title: 'No middleman',
                text: "I will be your sole point of contact throughout the project, ensuring clear communication and a streamlined process."
            },
            {
                id: 2,
                title: 'Customized Solutions',
                text: "I will work with you to understand your business needs and provide a customized solution that fits your needs and budget."
            },
            {
                id: 3,
                title: 'Competitive Pricing',
                text: "Affordable pricing for small businesses. Minimal upfront costs and no hidden fees. Pay only for what you need and use."
            },
            {
                id: 4,
                title: 'Fast Turnaround Time',
                text: "Time is money. I will work hard to ensure that your website is up and running as soon as possible to minimize downtime."
            },
            {
                id: 5,
                title: 'Aftercare Support',
                text: "I will provide ongoing support and maintenance to ensure your website is always up-to-date and running smoothly."
            },
            {
                id: 6,
                title: 'Mobile-Friendly Design',
                text: "All websites are designed to be mobile-friendly and responsive to ensure a seamless user experience across all devices."
            },

        ]
    }
]

const process = [
    {
        id: 1,
        custom: false,
        title: 'Here\'s How my Process Works',
        button: 'Get started',
        description: 'I\'ll work with you to create a website that meets my needs and budget. Here are the three simple steps from start to finish.',
        steps: [
            {
                id: 1,
                title: 'Consultation',
                text: "I'll discuss my website goals and needs and provide you with a custom quote for my project based on my requirements and budget."
            },
            {
                id: 2,
                title: 'Design & Development',
                text: "I'll design and develop my website using the latest technologies and best practices to ensure it's mobile-friendly and optimized for search engines."
            },
            {
                id: 3,
                title: 'Launch',
                text: " I'll launch my mobile-friendly website and ensure it's fully functional and optimized for search engines to increase my online visibility."
            },
        ]
    }
]

const metaProps = {
    title: 'About Me - web developer | web designer | mobile friendly websites',
    description: 'I\'m a freelance web developer based in Ireland. I design and build mobile friendly websites for small businesses and individuals. I also provide Transformation to mobile friendly websites for existing websites.',
}

export { hero, mobile, services, benefits, process, faqData, vision, mission, metaProps }