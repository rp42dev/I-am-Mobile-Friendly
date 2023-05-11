import { PenNib, PiggyBank, ArrowClockwise, Devices, ArrowArcRight } from "@phosphor-icons/react";

const hero = [
    {
        title: 'Responsive Website Design & Development',
        description: 'I design and develop mobile-friendly websites that look great on any device. I offer custom solutions for every budget and timeline so you can get back to running your business without worrying about the technical details.',
        image: require('../../assets/images/responsive.webp'),
        alt: 'Hero mobile friendly',
        btn: 'Get started',
        btn2: 'Learn more',
        link: '#contact',
        link2: '#services'
    }
]

const mobile = [
    {
        id: 1,
        custom: true,
        text: 'Key Features of Mobile-Friendly Websites',
        description: 'Mobile-friendly websites are designed to fit the small screen of mobile devices and provide a seamless browsing experience. They are optimized for mobile devices and provide a better user experience. They are also optimized for search engines to increase your online visibility.',
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

const services = [
    {
        id: 1,
        custom: false,
        title: 'Web development services!',
        description: 'I offer a wide range of web development services for small businesses, and startups. I will work with you to create a website that meets your needs and budget.',
        steps: [
            {
                id: 1,
                icon: <Devices size={32} />,
                title: "Custom Web Development",
                text: ["Custom design tailored to your specific needs",
                    "Development using modern technologies like React and Django",
                    "Hosting options: VPS or dedicated servers."],
                link: "/custom-web-development",
                check: true
            },
            {
                id: 2,
                icon: <PiggyBank size={32} />,
                title: "Budget Web Development",
                text: ["Cost-effective solution to establish your online presence",
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
                text: ["Convert your existing non-mobile-friendly website into a mobile-friendly version.",
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
        description: 'I\'ll work with you to create a website that meets your needs and budget. Here are the three simple steps from start to finish.',
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

export { hero, mobile, services, benefits, process }