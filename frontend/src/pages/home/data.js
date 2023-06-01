import { PenNib, PiggyBank, ArrowClockwise, Devices, ArrowArcRight } from "@phosphor-icons/react";

const hero = [
    {
        title: 'Responsive',
        subtitle: 'Website Design & Development.',
        description: 'Unlock the potential of your business with comprehensive web development services for small businesses and individuals. I offer custom web development, budget web development, and mobile website transformation services in Ireland and worldwide.',
        image: require('../../assets/images/responsive.webp'),
        alt: 'Responsive Website Design & Development displaying a Desktop, Tablet, Mobile Devices',
        btn: 'Get started',
        btn2: 'Learn more',
        link: '#contact',
        link2: '#features'
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
        title: 'Web development services!',
        description: '',
        steps: [
            {
                id: 1,
                icon: <Devices size={32} />,
                title: "Custom Web Development",
                text: ["Custom design tailored to my specific needs",
                    "Development using modern technologies like React and Django"],
                link: "/custom-web-development",
                check: true
            },
            {
                id: 2,
                icon: <PiggyBank size={32} />,
                title: "Budget Web Development",
                text: ["Cost-effective solution to establish my online presence",
                    "Website Development using WordPress or existing templates"],
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
                text: ["Convert existing non-mobile-friendly website into a mobile-friendly version.",
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
        custom: false,
        title: 'Benefits working with me!',
        description: '',
        steps: [
            {
                id: 1,
                check: false,
                icon: <PenNib size={32} />,
                title: "Customized Solutions",
                text: ["I will work with you to understand my business needs and provide a customized solution that fits my needs and budget."],
                link: "",
            },
            {
                id: 2,
                check: false,
                icon: <PiggyBank size={32} />,
                title: "Competitive Pricing",
                text: ["Affordable pricing for small businesses. Minimal upfront costs and no hidden fees. Pay only for what you need and use."],
                link: "",
            },
            {
                id: 3,
                check: false,
                icon: <ArrowClockwise size={32} />,
                title: "Fast Turnaround Time",
                text: ["Time is money. I will work hard to ensure that my website is up and running as soon as possible to minimize downtime."],
                link: "",
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

export { hero, mobile, services, benefits, process, faqData }