import { PenNib, PiggyBank, ArrowClockwise } from "@phosphor-icons/react";

const metaProps = {
    title: 'Custom Web Development in Ireland | Drogheda, Dublin & Remote | I and mobile friendly developer',
    description: 'Custom web development services in Ireland, serving Drogheda and Dublin and beyond, offering remote services to clients worldwide. Utilizing modern technologies such as React, Node, Django, and more.',
}

const mobile = [
    {
        id: 1,
        custom: true,
        text: 'Mobile Friendly Website features',
        description: 'All our websites are designed and developed with the following features to ensure that your website is mobile-friendly and optimized for search engines.',
        data: [
            {
                id: 1,
                text: "Responsive design that adapts to any screen size"
            },
            {
                id: 2,
                text: "Easy navigation for a seamless user experience"
            },
            {
                id: 3,
                text: "Mobile-friendly content to increase your online visibility"
            },
            {
                id: 4,
                text: "Enhanced readability for better user engagement"
            },
            {
                id: 5,
                text: "Optimized for search engines to increase your online visibility"
            },
            {
                id: 6,
                text: "Improved user experience to increase your conversion rate"
            },
        ]
    }
]

const faqData = [
    {
        question: "What is custom mobile-friendly web design?",
        answer: "Custom mobile-friendly web design involves creating a website from scratch, tailored specifically to be responsive and optimized for mobile devices."
    },
    {
        question: "Why is custom mobile-friendly web design important?",
        answer: "Custom mobile-friendly design ensures that your website provides an optimal user experience on mobile devices, leading to higher engagement and conversions."
    },
    {
        question: "How long does it take to develop a custom mobile-friendly website?",
        answer: "The development time can vary depending on the complexity and scope of the project. It is best to discuss the timeline with your web developer."
    },
    {
        question: "What technologies are used in custom mobile-friendly web design?",
        answer: "Custom mobile-friendly websites can be developed using a variety of technologies such as HTML5, CSS3, JavaScript, and frameworks like React or Angular."
    },
    {
        question: "Can I update the content on my custom mobile-friendly website myself?",
        answer: "Yes, most custom mobile-friendly websites come with a content management system (CMS) that allows you to easily update and manage your website content."
    },
    {
        question: "Will my custom mobile-friendly website be compatible with all mobile devices?",
        answer: "Yes, custom mobile-friendly websites are designed to be compatible with a wide range of mobile devices, ensuring a consistent user experience."
    },
    {
        question: "Can I integrate third-party services and tools into my custom mobile-friendly website?",
        answer: "Yes, custom mobile-friendly websites can be integrated with various third-party services and tools to enhance functionality and meet your specific needs."
    },
    {
        question: "Will my custom mobile-friendly website be search engine optimized?",
        answer: "Yes, web developers can implement search engine optimization (SEO) techniques during the development process to ensure your website ranks well in search results."
    },
    {
        question: "Can I request additional features and functionalities for my custom mobile-friendly website?",
        answer: "Yes, one of the advantages of custom web design is the flexibility to add specific features and functionalities tailored to your business requirements."
    },
    {
        question: "How much does custom mobile-friendly web design cost?",
        answer: "The cost of custom mobile-friendly web design varies depending on factors such as the complexity of the project, desired features, and the web developer's rates. It is best to discuss your budget and requirements with your web developer for a personalized quote."
    }
];

const features = [
    {
        id: 1,
        custom: true,
        text: 'Key Features of Custom Mobile-Friendly Websites',
        data: [
            {
                id: 1,
                title: 'Responsive Design',
                text: "Ensure a seamless user experience across all devices and screen sizes with responsive design."
            },
            {
                id: 2,
                title: 'Modern Technologies',
                text: "Development using cutting-edge tools like React and Django for robust functionality and performance."
            },
            {
                id: 3,
                title: 'Customizable Layouts',
                text: "Tailor the design, layout, and features to align with your brand and business objectives."
            },
            {
                id: 4,
                title: 'Optimized Performance',
                text: "Fast loading speeds and efficient coding for a smooth browsing experience on all devices."
            },
            {
                id: 5,
                title: 'Endless Customization',
                text: "With a custom website, you can add any feature you want and customize it to your needs."
            },
            {
                id: 6,
                title: 'Integration Capabilities',
                text: "Seamlessly integrate third-party services and tools for enhanced functionality."
            },
        ]
    }
]

const hero = [
    {
        title: 'Custom',
        subtitle: 'Website Design & Development',
        description: 'I specialize in creating tailor-made, mobile-friendly websites using modern technologies like React and Django. With a focus on mobile-friendly design and user experience.',
        image: require('../../assets/images/responsive.webp'),
        alt: 'Hero mobile friendly',
        btn: 'Get started',
        btn2: 'Learn more',
        link: '#contact',
        link2: '#features2'
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


const process = [
    {
        id: 1,
        custom: false,
        title: 'Here\'s How Our Process Works',
        button: 'Get started',
        description: 'I will work with you to understand your business needs and provide a customized solution that fits your needs and budget. Here\'s how our process works in 3 simple steps:',
        steps: [
            {
                id: 1,
                title: 'Consultation',
                text: "I'll discuss your website goals and needs and provide you with a custom quote for your project based on your requirements and budget."
            },
            {
                id: 2,
                title: 'Design & Development',
                text: "I'll design and develop your website using the latest technologies and best practices to ensure it's mobile-friendly and optimized for search engines."
            },
            {
                id: 3,
                title: 'Launch',
                text: " I'll launch your mobile-friendly website and ensure it's fully functional and optimized for search engines to increase your online visibility."
            },
        ]
    }
]


export { features, faqData, hero, benefits, process, metaProps };
