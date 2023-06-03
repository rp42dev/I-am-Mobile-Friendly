import { PenNib, PiggyBank, ArrowClockwise, Devices, ArrowArcRight } from "@phosphor-icons/react";

const hero = [
    {
        title: 'I\'m Raivis',
        subtitle: 'Web Developer & Designer - Empowering Businesses with Mobile-Friendly Web Solutions',
        bg: 'bg-base',
        description: 'As a freelance web developer based in Ireland, I am dedicated to helping small businesses and individuals establish a strong online presence. With my expertise, you can expect a mobile-friendly website that perfectly aligns with your unique needs and budget. Let\'s dive into the details of how I can transform your online presence and drive your business forward..',
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
        title: 'My Vision: Unlocking the Power of Mobile-Friendly Design',
        bg: 'bg-base-200',
        description: 'my vision is to empower businesses and individuals by creating websites that work seamlessly on all devices. In today\'s digital landscape, having a mobile- friendly website is crucial for success.It ensures that your audience can access your content and engage with your brand, regardless of the device they are using.By making websites accessible, attractive, and optimized for mobile users, I strive to contribute to the digital world and enhance user engagement..',
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
        id: 1,
        question: "What services do you provide?",
        answer: "I provide a range of web development and design services, including custom web development, budget web development, and mobile web transformation. I cater to the unique needs of businesses and individuals, ensuring a personalized approach and tailored solutions."
    },
    {
        id: 2,
        question: "What is custom web development?",
        answer: "Custom web development involves creating a website from scratch, specifically designed to meet the unique requirements of your business. It utilizes modern technologies and frameworks to ensure a highly customized and feature-rich online platform."
    },
    {
        id: 3,
        question: "What is budget web development?",
        answer: "Budget web development offers cost-effective solutions for small businesses with limited budgets. By utilizing platforms like WordPress and existing templates, I create professional websites that are affordable, easy to maintain, and maintain high quality."
    },
    {
        id: 4,
        question: "What is mobile website transformation?",
        answer: "Mobile website transformation involves converting a non-mobile-friendly website into a mobile-friendly version. This process ensures that your website is fully responsive and optimized for mobile devices, providing an enhanced user experience across all screen sizes."
    },
    {
        id: 5,
        question: "Which areas do you cover?",
        answer: "While I am based in Ireland, I provide web development services to clients worldwide. Whether you are located locally or internationally, I am equipped to cater to your needs remotely, ensuring efficient and effective communication throughout the project."
    },
    {
        id: 6,
        question: "How do I ensure the quality of custom web development?",
        answer: "I prioritize the quality of my custom web development projects by taking a personalized approach and closely collaborating with you. Throughout the development process, I provide regular updates, seek your feedback, and make necessary adjustments to ensure the final product meets your expectations."
    },
    {
        id: 7,
        question: "Can you work with existing website templates?",
        answer: "Absolutely. If you already have a website template that you'd like to utilize, I can work with it to create a customized and unique website that aligns with your brand. By leveraging the strengths of existing templates, I can tailor them to your specific requirements."
    },
    {
        id: 8,
        question: "What technologies do you use for custom web development?",
        answer: "I employ modern technologies and frameworks like React and Django for custom web development. These technologies offer robust functionality, scalability, and flexibility, ensuring a seamless user experience and future-proofing your website."
    },
    {
        id: 9,
        question: "How long does it take to transform a non-mobile-friendly website into a mobile-friendly version?",
        answer: "The timeframe for transforming a non-mobile-friendly website into a mobile-friendly version depends on various factors, such as the complexity of the website and the desired features. However, I strive to minimize downtime and ensure a smooth transition, delivering the mobile-friendly version as quickly as possible."
    },
    {
        id: 10,
        question: "Can you provide hosting services for websites?",
        answer: "While I specialize in web development and design, I don't directly provide hosting services. However, I can guide you through the process of selecting a reliable hosting provider and assist you in setting up your website on the chosen hosting platform."
    }
];

const services = [
    {
        id: 1,
        custom: false,
        title: 'My Services: Tailored Solutions for Your Business',
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
    title: 'About Me - Providing Reliable Tech Solutions: Your Leading Web Developer and Designer',
    description: 'Freelance web developer based in Ireland, I am dedicated to helping small businesses and individuals establish a strong online presence. With my expertise, you can expect a mobile-friendly website that perfectly aligns with your unique needs and budget.',
}

export { hero, mobile, services, benefits, process, faqData, vision, mission, metaProps }