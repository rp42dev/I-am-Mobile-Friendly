import { PenNib, PiggyBank, Funnel, ArrowClockwise, Devices, ArrowArcRight } from "@phosphor-icons/react";

const hero = [
    {
        title: 'Responsive',
        bg: 'bg-base-200',
        subtitle: 'Mobile-Friendly Web Design & Development Services',
        description: 'Unlock the potential of your business with comprehensive mobile-friendly web design and development services for small businesses and startups. I am a freelance web developer based in Ireland, I can create a mobile-friendly website that perfectly aligns with your unique needs and budget.',
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
        bg: 'bg-base-300',
        title: 'What is a Mobile-Friendly Website?',
        img: require('../../assets/images/user.svg').default,
        description: 'A mobile-friendly website is a website that is designed to provide an optimal user experience on various mobile devices, including smartphones and tablets. Mobile-friendly websites are responsive, meaning that they automatically adapt to the screen size of the device, ensuring that users can easily navigate and interact with the site. Here are some statistics that highlight the importance of mobile-friendly websites:',
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

const mobile = [
    {
        id: 1,
        custom: true,
        bg: 'bg-base-200',
        text: 'Key Features of Mobile-Friendly Websites',
        data: [
            {
                id: 1,
                title: "Enhanced User Experience",
                text: "Mobile-friendly websites are designed to provide smooth navigation, intuitive interactions, and easy access to information. Users can have a positive experience while browsing your site on their mobile devices.",
            },
            {
                id: 2,
                title: "Increased Mobile Traffic",
                text: "With the growing number of mobile users, having a mobile-friendly website helps you reach a larger audience. By catering to mobile users, you can attract more traffic and expand your customer base.",
            },
            {
                id: 3,
                title: "Improved Search Engine Visibility",
                text: "Search engines like Google prioritize mobile-friendly websites in their search results. Having a mobile-friendly site increases your chances of ranking higher, leading to better visibility and attracting organic traffic.",
            },
            {
                id: 4,
                title: "Faster Page Loading Speed",
                text: "Mobile-friendly websites are optimized for mobile devices, ensuring faster loading times. This helps reduce bounce rates and keeps users engaged, as they don't have to wait for slow-loading pages.",
            },
            {
                id: 5,
                title: "Competitive Advantage",
                text: "In today's digital landscape, having a mobile-friendly website is essential for staying ahead of the competition. A mobile-friendly site showcases your commitment to providing a seamless user experience, which differentiates you from competitors and positions your brand as customer-centric.",
            },
            {
                id: 6,
                title: "Higher Conversion Rates",
                text: "Streamlined mobile experiences make it easier for users to navigate your site, find information, and complete desired actions such as making a purchase or submitting a form. This can lead to improved conversion rates and better business outcomes.",
            },
        ]
    }
]

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
                text: ["I specialize in creating custom websites uniquely tailored to your specific needs using modern technologies like React and Django. I take a personalized approach to each project, ensuring that the final product meets your expectations."],
                link: "/custom-web-development",
                check: false
            },
            {
                id: 2,
                icon: <PiggyBank size={32} />,
                title: "Budget Web Development",
                text: ["I offer cost-effective web development solutions for small businesses. Using platforms like WordPress and existing templates, I create professional websites that are affordable and easy to maintain without compromising on quality."],
                link: "/budget-web-development",
                check: false
            },
            {
                id: 2,
                icon: <Funnel size={32} />,
                title: "Automated Funnel Building",
                text: ["I offer Funnel Building services for coaching, consulting, and service-based businesses I create automated sales funnels that help you generate leads and convert them into paying customers."],
                link: "/funnels",
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
                text: ["If you have a non-mobile-friendly website, I can transform it into a mobile-friendly version. Regardless of the technology stack used (WordPress, Static HTML, etc.), I ensure a smooth transition without compromising functionality or design."
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
        title: 'Streamlined Development Process',
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

export { hero, mobile, services, benefits, process, faqData, what }