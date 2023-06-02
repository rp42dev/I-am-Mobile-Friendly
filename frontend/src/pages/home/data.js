import { PenNib, PiggyBank, ArrowClockwise, Devices, ArrowArcRight } from "@phosphor-icons/react";

const hero = [
    {
        title: 'Mobile-Friendly',
        bg: 'bg-base-200',
        subtitle: 'Web Design and Development',
        description: 'Unlock the potential of your business with comprehensive mobile-friendly web design and development services for small businesses and startups. I am a freelance web developer based in Ireland, I can create a mobile-friendly website that perfectly aligns with your unique needs and budget.',
        image: require('../../assets/images/responsive.svg').default,
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
        bg: 'bg-base-200',
        text: 'Key Features of Mobile-Friendly Websites',
        data: [
            {
                id: 1,
                title: 'Enhanced User Experience:',
                text: "Mobile-friendly websites offer smooth navigation and interaction, ensuring a positive user experience."
            },
            {
                id: 2,
                title: 'Increased Mobile Traffic:',
                text: "Catering to mobile users helps attract more traffic and expand your customer base, leading to increased sales."
            },
            {
                id: 3,
                title: 'Improved Search Engine Visibility:',
                text: "Mobile-friendly sites rank higher in search engine results, leading to better visibility and organic traffic."
            },
            {
                id: 4,
                title: 'Faster Page Loading Speed:',
                text: "Optimized for mobile devices, these sites load quickly, reducing bounce rates and enhancing engagement."
            },
            {
                id: 5,
                title: 'Competitive Advantage:',
                text: "Having a mobile-friendly site differentiates you from competitors and positions your brand as customer-centric."
            },
            {
                id: 6,
                title: 'Higher Conversion Rates:',
                text: "Streamlined mobile experiences result in improved conversions, making it easier for users to complete desired actions."
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
        bg: 'bg-base-200',
        description: '',
        steps: [
            {
                id: 1,
                icon: <Devices size={32} />,
                title: "Custom Web Development",
                text: ["I specialize in creating custom websites uniquely tailored to your specific needs using modern technologies like React and Django. I take a personalized approach to each project, ensuring that the final product meets your expectations."],
                link: "/custom-web-development",
                check: false
            },
            {
                id: 2,
                icon: <PiggyBank size={32} />,
                title: "Budget Web Development",
                text: ["I offer cost-effective web development solutions for small businesses. Using platforms like WordPress and existing templates, I create professional websites that are affordable and easy to maintain. e.g. WordPress, cPanel, or existing templates."],
                link: "/budget-web-development",
                check: false
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
                title: "Mobile Web Transformation",
                text: ["f you have a non-mobile-friendly website, I can transform it into a mobile-friendly version. Regardless of the technology stack used (WordPress, Static HTML, etc.), I ensure a smooth transition without compromising functionality or design."
                ],
                link: "/mobile-website-transformation",
                check: false
            },
        ]

    }
]

const benefits = [
    {
        id: 1,
        custom: false,
        bg: 'bg-base-200',
        title: 'Benefits working with me!',
        description: '',
        steps: [
            {
                id: 1,
                check: false,
                icon: <PenNib size={32} />,
                title: "Customized Solutions",
                text: ["I understand that every business is unique, and cookie-cutter solutions won't suffice. I take a personalized approach to each project, ensuring that the final product meets your specific needs and requirements that align with your business goals."],
                link: "",
            },
            {
                id: 2,
                check: false,
                icon: <PiggyBank size={32} />,
                title: "Competitive Pricing",
                text: ["As a freelancer, I understand the importance of affordability. I offer competitive pricing, with minimal upfront costs and no hidden fees. You only pay for the services you need, ensuring that you get the most value for your investment."],
                link: "",
            },
            {
                id: 3,
                check: false,
                icon: <ArrowClockwise size={32} />,
                title: "Fast Turnaround Time",
                text: ["I recognize that time is of the essence. I am committed to delivering your website within a reasonable timeframe. I work diligently to minimize downtime, ensuring that your business can start reaping the benefits of your new website as soon as possible."],
                link: "",
            },
        ]
    }
]

const process = [
    {
        id: 1,
        custom: false,
        title: 'My Approach',
        bg: 'bg-base-200',
        button: 'Get started',
        img: require('../../assets/images/process.svg').default,
        description: '',
        steps: [
            {
                id: 1,
                title: 'Consultation',
                text: "I begin by understanding your website goals and requirements. Through detailed discussions, I gain insights into your business, target audience, and desired functionalities. This allows me to provide you with a customized solution that precisely fits your needs and budget."
            },
            {
                id: 2,
                title: 'Design & Development',
                text: "I will bring your vision to life. Using the latest technologies and following industry best practices, I create a mobile-friendly website that not only looks stunning but also performs exceptionally well. Ensuring that the final product meets your expectations."
            },
            {
                id: 3,
                title: 'Launch',
                text: " Once the development phase is complete, I rigorously test your website to ensure its functionality, responsiveness, and overall user experience. After thorough quality assurance checks, I deploy your mobile-friendly website, making it fully operational and ready for use."
            },
        ]
    }
]

export { hero, mobile, services, benefits, process, faqData }