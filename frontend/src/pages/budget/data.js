import { PenNib, PiggyBank, ArrowClockwise } from "@phosphor-icons/react";


const hero = [
    {
        title: 'Affordable',
        subtitle: 'Website Development',
        description: 'Do you need a cost-effective solution without compromising on quality? Don\'t let limited resources hinder your online presence!',
        image: require('../../assets/images/responsive.webp'),
        alt: 'Hero mobile friendly',
        btn: 'Get started',
        btn2: 'Learn more',
        link: '#contact',
        link2: '#features3'
    }
]

const agitate = [
    {
        id: 1,
        custom: false,
        title: 'Tight Budget and Limited Resources?',
        description: 'Imagine the frustration of overspending on website development, draining your budget for other essential aspects of your business. Don\'t let limited resources hinder your online presence!',
        steps: [
            {
                id: 1,
                text: "Budget-friendly website development services are a great way to get your business online without breaking the bank."
            },
            {
                id: 2,
                text: "WordPress is the most popular content management system (CMS) in the world, with a market share of 64.1%. [Source: W3Techs]"
            },
            {
                id: 3,
                text: "Cost is a significant factor for 70% of small businesses when choosing a website solution. [Source: Weebly]"
            },
        ]
    }
]

const solution = [
    {
        id: 1,
        custom: true,
        text: 'Turn the tables with my budget-friendly website development services!',
        description: ' specialize in using WordPress and pre-made templates to create professional websites at affordable prices. Say goodbye to excessive costs and hello to a high- quality website that fits your budget!',
        data: [
            {
                id: 1,
                title: 'Affordability',
                text: " Get a professional website at a fraction of the cost of custom development, without compromising."
            },
            {
                id: 2,
                title: 'Quick Turnaround',
                text: "Utilize pre-made templates to speed up the development process and launch your website sooner."
            },
            {
                id: 3,
                title: 'User-Friendly CMS',
                text: "Easily update and manage your website content using the intuitive WordPress interface."
            },
            {
                id: 4,
                title: 'Quality Designs',
                text: "Choose from a wide range of pre-designed templates that are visually appealing and modern."
            },
            {
                id: 5,
                title: 'EShared or Managed Hosting',
                text: "Opt for shared hosting or managed WordPress hosting for reliable and cost-effective hosting options."
            },
            {
                id: 6,
                title: 'Scalability',
                text: "Start small and expand your website's features and functionality as your business grows."
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
                text: ["I will work with you to understand your business needs and provide a customized solution that fits your needs and budget."],
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
                text: ["Time is money. I will work hard to ensure that your website is up and running as soon as possible to minimize downtime."],
                link: "",
            },
        ]
    }
]

const faqData = [
    {
        question: "What is budget-friendly mobile-friendly web design?",
        answer: "Budget-friendly mobile-friendly web design involves using cost-effective solutions such as premade templates or platforms like WordPress to create a mobile-friendly website within a limited budget."
    },
    {
        question: "Is budget-friendly mobile-friendly web design of lesser quality?",
        answer: "No, budget-friendly mobile-friendly web design can still produce high-quality websites that are visually appealing and functional on mobile devices."
    },
    {
        question: "What are premade templates?",
        answer: "Premade templates are pre-designed website layouts that can be customized to suit your branding and content, providing a quicker and more affordable web design solution."
    },
    {
        question: "Can I customize a premade template to match my brand?",
        answer: "Yes, premade templates can be customized with your brand's colors, logos, and content to ensure a cohesive and personalized website."
    },
    {
        question: "Is it possible to have a mobile-friendly website on a limited budget?",
        answer: "Absolutely! Budget-friendly mobile-friendly web design options like using premade templates or platforms like WordPress allow for cost-effective mobile optimization."
    },
    {
        question: "Can I manage the content on my budget-friendly mobile-friendly website myself?",
        answer: "Yes, platforms like WordPress provide user-friendly content management systems that allow you to easily update and manage your website content."
    },
    {
        question: "What is the difference between shared hosting and managed WordPress hosting?",
        answer: "Shared hosting is a cost-effective hosting option where multiple websites share the same server resources, while managed WordPress hosting is specifically optimized for WordPress websites, offering additional features, security, and support."
    },
    {
        question: "Can I upgrade my budget-friendly mobile-friendly website in the future?",
        answer: "Yes, budget-friendly mobile-friendly websites can be upgraded and expanded as your business grows and your budget allows. You can add new features and functionalities when needed."
    },
    {
        question: "Will my budget-friendly mobile-friendly website be responsive on all devices?",
        answer: "Yes, budget-friendly mobile-friendly websites are designed to be responsive and adapt to different screen sizes and devices, providing a consistent user experience."
    },
    {
        question: "Can I integrate third-party plugins or tools into my budget-friendly mobile-friendly website?",
        answer: "Yes, platforms like WordPress offer a wide range of plugins and integrations that can enhance the functionality of your budget-friendly mobile-friendly website."
    }
];


const process = [
    {
        id: 1,
        custom: false,
        title: 'Here\'s How Our Process Works',
        button: 'Get started',
        description: 'I\'ll work with you to understand your website goals and needs and provide you with a custom quote for your project based on your requirements and budget.',
        steps: [
            {
                id: 1,
                title: 'Consultation',
                text: "I'll discuss your website goals and needs and provide you with a custom quote for your project based on your requirements and budget."
            },
            {
                id: 2,
                title: 'Design & Development',
                text: "I'll design and develop your website using WordPress or pre-made templates to speed up the development process and launch your website sooner."
            },
            {
                id: 3,
                title: 'Launch',
                text: " I'll launch your mobile-friendly website and ensure it's fully functional and optimized for search engines to increase your online visibility."
            },
        ]
    }
]



export { hero, process, agitate, benefits, solution, faqData }
