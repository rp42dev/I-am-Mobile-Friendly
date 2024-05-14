import { AppWindow, Funnel, Devices } from "@phosphor-icons/react";

const hero = [
    {
        title: "Let's build",
        bg: 300,
        subtitle: 'Your Online Presence',
        description: "Whether you need a budget-friendly website, custom app, or want to automate your lead generation process for your online business, I can create a personalized solution tailored to your specific needs and budget.",
        image: require('../../assets/images/responsive.svg').default,
        alt: 'Responsive Website Design & Development displaying a Desktop, Tablet, Mobile Devices',
        btn: 'Book A Call',
        btn2: 'Learn more',
        link: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2xMsnYixswy0OzkcailfXD_gKqYxXZwAkC_K2MkSqet2b4jb9SpQw_m8PWUou2B773NxLajf-r',
        link2: '#features'
    }
]

const services = [
    {
        id: 1,
        custom: false,
        title: 'My Services - What I Can Do for You!',
        bg: 200,
        description: '',
        steps: [
            {
                id: 1,
                icon: <Devices size={32} />,
                title: "Web-App Development",
                text: ["Websites or web applications tailored to your unique needs, featuring custom features and functionalities."],
                link: "/custom-web-development",
                check: false
            },
            {
                id: 2,
                icon: < AppWindow size={32} />,
                title: "Website Development",
                text: ["Solutions for small businesses and startups looking to establish a strong online presence on a budget."],
                link: "/budget-web-development",
                check: false
            },
            {
                id: 2,
                icon: <Funnel size={32} />,
                title: "Lead Generation Automation",
                text: ["Automated funnels, email sequences, and landing pages designed to generate leads for your online business."],
                link: "https://www.coachautomationdone4you.com/",
                target: '_blank',
                check: false
            },
        ]

    }
]

const benefits = [
    {
        id: 1,
        custom: true,
        bg: 300,
        text: "Benefits of Choosing My Services",
        data: [
            {
                id: 1,
                title: "Direct Communication, No Middleman",
                text: "Work directly with me to ensure clear communication and a personalized approach to your project needs and goals."
            },
            {
                id: 2,
                title: "Services for coaching, or service-based business",
                text: "From From website design to lead generation automation, all solutions for coaching and service-based businesses."
            },
            {
                id: 3,
                title: "Affordable Pricing for All Budgets",
                text: "Competitive pricing for small businesses and startups to access quality development services without breaking the bank."
            },
            {
                id: 4,
                title: "Quick Turnaround Time for Delivery",
                text: "Timely delivery of projects to ensure that your website is up and running as soon as possible after development."
            },
            {
                id: 5,
                title: "Continuous Support and Updates",
                text: "Ongoing support and updates keep your website functional and up-to-date with the latest technologies and trends."
            },
            {
                id: 6,
                title: "Mobile-Friendly Design for All Devices",
                text: "Mobile compatibility ensures your website is accessible for various devices, including smartphones and tablets."
            }
        ]
    }
];

const faqData = [
    {
        bg: 300,
        text: 'Frequently Asked Questions',
        data: [
            {
                id: 1,
                title: "Why should I choose your website development services?",
                text: "By choosing my services, you get direct communication and a personalized approach tailored to your project needs and goals."
            },
            {
                id: 2,
                title: "What types of businesses can benefit from your services?",
                text: "My services are ideal for coaching and service-based businesses, offering tailored solutions from website design to lead generation automation."
            },
            {
                id: 3,
                title: "Are your website development solutions affordable for startups and small businesses?",
                text: "Yes, I provide budget-friendly options that allow startups and small businesses to establish a strong online presence without exceeding their budget."
            },
            {
                id: 4,
                title: "How quickly can I expect my project to be delivered?",
                text: "I ensure timely project delivery so that your website is operational as soon as possible after development is completed."
            },
            {
                id: 5,
                title: "Do you offer ongoing support and updates after the website launch?",
                text: "Absolutely! You'll receive continuous support and updates to keep your website functional and up-to-date with the latest technologies and trends."
            },
            {
                id: 6,
                title: "Is my website design optimized for mobile devices?",
                text: "Yes, I prioritize mobile-friendly design to ensure your website is accessible and user-friendly on smartphones, tablets, and other devices."
            },
            {
                id: 7,
                title: "What kind of custom solutions do you offer for website development?",
                text: "I specialize in custom web-app development, creating websites or applications with unique features and functionalities tailored to your specific needs."
            },
            {
                id: 8,
                title: "How can lead generation automation benefit my online business?",
                text: "With automated funnels, email sequences, and landing pages, you can efficiently generate leads and grow your online business."
            },
            {
                id: 9,
                title: "How can I schedule a consultation or book your services?",
                text: "You can book a call directly through my calendar [here](https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2xMsnYixswy0OzkcailfXD_gKqYxXZwAkC_K2MkSqet2b4jb9SpQw_m8PWUou2B773NxLajf-r) or learn more about my services by clicking 'Learn more'."
            },
            {
                id: 10,
                title: "What features are included in your budget website development services?",
                text: "My budget website development services offer affordable solutions tailored for small businesses and startups, focusing on establishing a strong online presence."
            }
        ]
    }
];

export default faqData;

export { hero, services, faqData, benefits }