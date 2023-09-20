import { PiggyBank, Funnel, Devices } from "@phosphor-icons/react";

const hero = [
    {
        title: "Let's build",
        bg: 'bg-base',
        subtitle: 'your online presence',
        description: 'I offer custom and budget-friendly web development services for small businesses and startups. Whether you need a custom website or a mobile-friendly version of your existing site, I can help. I also offer Funnel Building services for coaching and service-based businesses.',
        image: require('../../assets/images/responsive.svg').default,
        alt: 'Responsive Website Design & Development displaying a Desktop, Tablet, Mobile Devices',
        btn: 'Get started',
        btn2: 'Learn more',
        link: '#contact',
        link2: '#features'
    }
]

const what = [
    {
        id: 1,
        custom: false,
        bg: 'bg-base-200',
        title: 'What is a Mobile-Friendly Website?',
        img: require('../../assets/images/user.svg').default,
        description: 'A mobile-friendly website adapts to various mobile devices, ensuring an optimal user experience. Statistics emphasize the importance of mobile-friendliness:',
        steps: [
            {
                id: 1,
                text: "About 90% of users switch between different devices, like desktop computers, smartphones, and tablets, to accomplish tasks or access information. This underscores the need for websites to be compatible with all these devices to maintain a consistent user experience."
            },
            {
                id: 2,
                text: "Approximately 53% of mobile users will leave a website if it loads too slowly. Mobile users expect quick access to information, and a mobile-friendly website is optimized to load swiftly on smaller screens and slower connections, reducing the risk of users leaving due to slow loading times."
            },
            {
                id: 3,
                text: "Mobile internet usage has surpassed desktop usage, with mobile devices accounting for 54.8% of global web traffic. This shift in user behavior highlights the necessity for websites to prioritize mobile compatibility to reach and engage a significant portion of their audience effectively."
            },
        ]
    }
]

const benefits = [
    {
        id: 1,
        custom: true,
        bg: 'bg-base',
        text: "Benefits of Choosing My Services",
        data: [
            {
                id: 1,
                title: "Direct Communication, No Middleman",
                text: "Work directly with our experts throughout the project. No intermediaries, just clear, efficient communication."
            },
            {
                id: 2,
                title: "Specialized Services for coaching, or service-based business",
                text: "We understand the uniqueness of coaching, or service-based business. Our funnels are designed to meet your specific needs and goals."
            },
            {
                id: 3,
                title: "Affordable Pricing for All Budgets",
                text: "Our transparent pricing ensures coaching, or service-based business of all sizes can benefit from our services."
            },
            {
                id: 4,
                title: "Quick Turnaround Time",
                text: "Quick website development to minimize downtimeWe know time is valuable. Our team works diligently to minimize downtime and maximize your online presence."
            },
            {
                id: 5,
                title: "Continuous Support and Updates",
                text: "Our commitment extends beyond the launch. We provide continuous support, updates, and enhancements to keep your coaching funnel at its best."
            },
            {
                id: 6,
                title: "Mobile-Friendly Design for Seamless User Experience",
                text: "All our funnels are designed to be mobile-friendly, ensuring a seamless user experience across all devices."
            }
        ]
    }
];

const faqData = [
    {
        id: 1,
        question: "What is budget-friendly, mobile-friendly web design?",
        answer: "Budget-friendly, mobile-friendly web design refers to the creation of visually appealing and functional websites that are accessible on various mobile devices while being cost-effective for businesses."
    },
    {
        id: 2,
        question: "Is budget-friendly, mobile-friendly web design of lesser quality?",
        answer: "No, it's a misconception that budget-friendly web design compromises on quality. With the right expertise and tools, a mobile-friendly website can be developed within budget without sacrificing visual appeal or functionality."
    },
    {
        id: 3,
        question: "What are pre-made templates?",
        answer: "Pre-made templates are pre-designed website layouts that can be customized to suit your brand and content. They offer a cost-effective solution for website development, as they eliminate the need for extensive design work from scratch."
    },
    {
        id: 4,
        question: "Can I customize a pre-made template to match my brand?",
        answer: "Absolutely! Pre-made templates are highly customizable, allowing you to incorporate your brand colors, logo, and content to create a cohesive online presence that aligns with your brand identity."
    },
    {
        id: 5,
        question: "Is it possible to have a mobile-friendly website on a limited budget?",
        answer: "Yes, it is possible to have a mobile-friendly website on a limited budget. By leveraging budget-friendly web development services, you can ensure that your website is accessible and optimized for mobile devices without overspending."
    },
    {
        id: 6,
        question: "Can I manage the content on my budget-friendly, mobile-friendly website myself?",
        answer: "Yes, one of the advantages of modern content management systems like WordPress and cPanel is their user-friendly interfaces, empowering you to manage and update your website's content independently."
    },
    {
        id: 7,
        question: "What is the difference between shared hosting and managed WordPress hosting?",
        answer: "Shared hosting involves multiple websites sharing server resources, making it a cost-effective option. Managed WordPress hosting, on the other hand, provides a dedicated environment optimized for WordPress websites, offering enhanced performance and security."
    },
    {
        id: 8,
        question: "Can I upgrade my budget-friendly, mobile-friendly website in the future?",
        answer: "Absolutely! As your business grows and your requirements change, your website can be easily upgraded to incorporate new features and functionalities. The scalability of budget-friendly web development ensures that your website can adapt to your evolving needs."
    },
    {
        id: 9,
        question: "Will my budget-friendly, mobile-friendly website be responsive on all devices?",
        answer: "Yes, one of the core principles of mobile-friendly web design is responsiveness. Your website will be optimized to automatically adapt and provide an optimal user experience on various devices, including smartphones, tablets, and desktop computers."
    },
    {
        id: 10,
        question: "Can I integrate third-party plugins or tools into my budget-friendly, mobile-friendly website?",
        answer: "Yes, depending on your specific needs, third-party plugins or tools can be integrated into your website to enhance its functionality and provide additional features. These integrations can be customized to align with your budget-friendly web development project."
    },
    {
        id: 11,
        question: "What is Funnel Building?",
        answer: "Funnel Building is the process of creating automated sales funnels that help you generate leads and convert them into paying customers. It involves a series of steps that guide users through the sales process, from awareness to purchase."
    },
    {
        id: 12,
        question: "What is a sales funnel?",
        answer: "A sales funnel is a marketing concept that describes the process of converting prospects into paying customers. It involves a series of steps that guide users through the sales process, from awareness to purchase."
    },
    {
        id: 13,
        question: "What are the stages of a sales funnel?",
        answer: "The stages of a sales funnel are awareness, interest, decision, and action. At each stage, users are provided with relevant information and guided towards the next step in the sales process."
    },
];


const services = [
    {
        id: 1,
        custom: false,
        title: 'My Services - What I can do for you!',
        bg: 'bg-base-200',
        description: '',
        steps: [
            {
                id: 1,
                icon: <Devices size={32} />,
                title: "Custom Web Development",
                text: ["Embrace innovation with our unique websites crafted using modern technologies like React and Django."],
                link: "/custom-web-development",
                check: false
            },
            {
                id: 2,
                icon: <PiggyBank size={32} />,
                title: "Budget Web Development",
                text: ["Affordable solutions for small businesses, utilizing platforms like WordPress and templates to maintain quality."],
                link: "/budget-web-development",
                check: false
            },
            {
                id: 2,
                icon: <Funnel size={32} />,
                title: "Automated Funnel Building",
                text: ["Streamline your sales process with a custom-built sales funnel, designed to generate leads and convert them into paying customers."],
                link: "/funnels",
                check: false
            },
        ]

    }
]


export { hero, services, faqData, what, benefits }