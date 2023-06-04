import { Users, MagnifyingGlass, DeviceMobile, PenNib, PiggyBank, ArrowClockwise } from "@phosphor-icons/react";

const metaProps = {
    title: 'Transform your non-mobile-friendly website into a mobile-friendly version',
    description: 'Don\'t let outdated design hinder your success in the digital world. I specialize in transforming unresponsive websites into stunning mobile-friendly experiences. Whether you are based in Ireland or anywhere else in the world.',
}

const hero = [
    {
        title: 'Transform',
        subtitle: 'to a mobile-friendly website.',
        description: 'Don\'t let outdated design hinder your success in the digital world. I specialize in transforming unresponsive websites into stunning mobile-friendly experiences. Whether you are based in Ireland or anywhere else in the world, I offer mobile website transformation services that can help you reach a wider audience and boost your online presence.',
        image: require('../../assets/images/transform.svg').default,
        alt: 'Transform non-mobile-friendly website to mobile-friendly website displaying a desktop to mobile devices transformation',
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
        bg: 'bg-base-200',
        title: 'The Importance of Mobile-Friendly Websites',
        img: require('../../assets/images/user.svg').default,
        description: 'In today\'s fast- paced world, more and more users rely on mobile devices to access information on the go. If your website is not optimized for mobile devices, you risk losing potential customers and missing out on valuable opportunities.Consider these statistics: ',
        steps: [
            {
                id: 1,
                text: "90% of users switch between devices to accomplish a goal [Source: Google]: Users expect a seamless experience across multiple devices. If your website is not mobile-friendly, users may abandon it in search of a more accessible alternative."
            },
            {
                id: 2,
                text: "53% of mobile users abandon websites that take longer than three seconds to load [Source: Google]: Mobile users have little patience for slow-loading websites. A non-mobile-friendly website may result in high bounce rates and lost conversions."
            },
            {
                id: 3,
                text: "Mobile internet usage surpassed desktop usage, accounting for 54.8% of global web traffic [Source: Statista]: The majority of web traffic now comes from mobile devices. To stay relevant and tap into this vast user base, a mobile-friendly website is essential."
            },
        ]
    }
]

const process = [
    {
        id: 1,
        custom: false,
        title: 'Mobile Website Transformation Process',
        button: 'Get started',
        bg: 'bg-base-200',
        img: require('../../assets/images/process.svg').default,
        description: '',
        steps: [
            {
                id: 1,
                title: 'Consultation',
                text: "We start by understanding your website goals, target audience, and specific requirements. Through in-depth discussions, we gain insights into your business and develop a tailored solution that aligns with your needs and budget.."
            },
            {
                id: 2,
                title: 'Design & Development',
                text: "Using the latest technologies and best practices, we design and develop a mobile-friendly website that not only looks great but also performs exceptionally well. We prioritize collaboration throughout the process, ensuring that the final product meets your expectations."
            },
            {
                id: 3,
                title: 'Launch',
                text: "After rigorous testing and quality assurance checks, we deploy your mobile-friendly website, making it fully operational and ready for use. We provide support during the launch process and address any questions or concerns you may have."
            },
        ]
    }
]

const solution = [
    {
        id: 1,
        custom: false,
        title: 'Mobile Website Transformation Solutions',
        description: 'With my mobile website transformation services, I can help you overcome the challenges posed by a non-mobile-friendly website. By embracing mobile-friendliness, you can unlock a range of benefits for your business:',
        steps: [
            {
                id: 1,
                title: 'Boosted User Engagement:',
                icon: <Users size={32} weight="light" />,
                link: '',
                text: ["A mobile-friendly website ensures seamless engagement across devices, leading to longer visits, improved conversions, and increased revenue."],
                check: false
            },
            {
                id: 2,
                title: 'Improved Search Rankings:',
                icon: <MagnifyingGlass size={32} weight="light" />,
                link: '',
                text: ["Transforming your website into a mobile-friendly version enhances your chances of ranking higher in search results, driving more organic traffic and visibility."],
                check: false
            },
            {
                id: 3,
                title: 'Expanded Reach:',
                icon: <DeviceMobile size={32} weight="light" />,
                link: '',
                text: ["Reach billions of potential customers worldwide by tapping into the vast mobile user base. Responsive design enables connection with your target audience."],
                check: false
            },
        ]
    }
]

const faqData = [
    {
        id: 1,
        question: "What is a mobile-friendly website?",
        answer: "A mobile-friendly website is designed and optimized to provide an optimal user experience on mobile devices, such as smartphones and tablets. It adapts to different screen sizes and ensures easy navigation, readability, and functionality."
    },
    {
        id: 2,
        question: "Why is it important to have a mobile-friendly website?",
        answer: "Having a mobile-friendly website is crucial because an increasing number of users access the internet through mobile devices. A mobile-friendly website ensures that your content is accessible, readable, and engaging, leading to better user experiences, higher engagement, and improved conversion rates."
    },
    {
        id: 3,
        question: "How do I know if my website is mobile-friendly?",
        answer: "You can use Google's Mobile-Friendly Test or various online tools to check if your website is mobile-friendly. These tools analyze your website and provide insights into its mobile-friendliness, highlighting any issues that need to be addressed."
    },
    {
        id: 4,
        question: "How can you help me transform my website?",
        answer: "At I Am Mobile Friendly, I specialize in transforming non-mobile-friendly websites into mobile-friendly versions. I follow a comprehensive process that involves consultation, design, development, and launch. My goal is to create a mobile-friendly website that aligns with your business objectives and delivers exceptional user experiences."
    },
    {
        id: 5,
        question: "How much does it cost to transform my website?",
        answer: "The cost of transforming your website depends on various factors, including the size and complexity of the website, the desired features and functionality, and your specific requirements. I provide customized quotes based on your needs and budget. Get in touch with me for a free quote and consultation."
    },
    {
        id: 6,
        question: "How long does it take to transform my website?",
        answer: "The duration of the transformation process depends on the scope and complexity of your website. I strive to complete the transformation within a reasonable timeframe, ensuring minimal disruption to your online presence. During the consultation phase, I can provide you with an estimated timeline based on your specific project."
    },
    {
        id: 7,
        question: "What is the process of transforming my website?",
        answer: "My transformation process involves a consultation phase, where I understand your goals and requirements, followed by the design and development phase, where I create a mobile-friendly website using the latest technologies and best practices. Finally, I launch your website and ensure it's fully functional and optimized for search engines."
    },
    {
        id: 8,
        question: "What are the benefits of transforming my website?",
        answer: "Transforming your non-mobile-friendly website into a mobile-friendly version brings several benefits, including boosted user engagement, improved search engine rankings, and expanded reach. A mobile-friendly website allows you to engage your audience on any device, attract more organic traffic, and tap into the vast mobile user base."
    },
    {
        id: 9,
        question: "Can my website be transformed into a mobile-friendly website?",
        answer: "In most cases, existing websites can be transformed into mobile-friendly versions. However, the complexity of the transformation process may vary depending on the current design and structure of your website. I assess your website during the consultation phase to determine the feasibility of transformation."
    },
    {
        id: 10,
        question: "Is responsive design the same as mobile-friendly design?",
        answer: "Responsive design is a key aspect of mobile-friendly design. It involves creating a website layout that automatically adjusts and adapts to different screen sizes and devices. A mobile-friendly design encompasses responsive design principles, ensuring that your website delivers a seamless user experience across all devices."
    }
];



const features = [
    {
        id: 1,
        custom: true,
        text: 'Key Features of Mobile-Friendly Websites',
        description: 'Mobile-friendly websites are designed to fit the small screen of mobile devices and provide a seamless browsing experience.',
        data: [
            {
                id: 1,
                title: 'Responsive Design',
                text: "Seamlessly adapts to different screen sizes and resolutions."
            },
            {
                id: 2,
                title: 'Mobile-Friendly Content',
                text: "Optimized for mobile devices to increase your online visibility."
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
                text: "Optimized for search engines to increase your online visibility"
            },
            {
                id: 6,
                title: 'Improved User Experience',
                text: "Improved user experience for better engagement and conversion rate."
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



export { agitate, faqData, hero, solution, features, process, benefits, metaProps }
