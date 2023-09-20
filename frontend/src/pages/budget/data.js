import { PenNib, PiggyBank, ArrowClockwise } from "@phosphor-icons/react";


const metaProps = {
    title: 'Budget-Friendly Web Design Services | Raivis',
    description: 'I specialize in affordable budget web development services. I can help you create a mobile-friendly website that not only fits your budget but also drives success in the digital world.',
}

const hero = [
    {
        title: 'Affordable',
        bg: 'bg-base-200',
        subtitle: 'Website Development Services',	
        description: 'I specialize in affordable budget web development services. I can help you create a mobile-friendly website that not only fits your budget but also drives success in the digital world.',
        image: require('../../assets/images/budget.svg').default,       
        alt: 'Budget mobile friendly website development Displaying a responsive website on a desktop, tablet, and mobile phone',
        btn: 'Get started',
        btn2: 'Learn more',
        link: '#contact',
        link2: '#features2'
    }
]

const solution = [
    {
        id: 1,
        custom: true,
        bg: 'bg-base',
        text: 'Benefits of Budget-Friendly Web Design',
        data: [
            {
                id: 1,
                title: 'Affordability:',
                text: "Professional Websites at Lower Costs Obtain a professional website at a fraction of the cost of custom development, all while maintaining quality.Utilize tools like WordPress and cPanel for visually appealing websites that meet your goals within your budget."
            },
            {
                id: 2,
                title: 'Quick Turnaround:',
                text: "Establish your online presence quickly to seize opportunities and outpace competitors. With expertise in pre-made templates, we'll get your website up and running in no time, minimizing downtime and maximizing business prospects."
            },
            {
                id: 3,
                title: 'User-Friendly CMS:',
                text: "Manage your website effortlessly with intuitive interfaces like WordPress and cPanel. Make content updates and additions without technical expertise. Say goodbye to costly maintenance fees and hello to independence."
            },
            {
                id: 4,
                title: 'Quality Designs:',
                text: "Stand out with visually appealing and modern website designs. Choose from a range of pre-designed templates that leave a lasting impression on your target audience, representing your business effectively."
            },
            {
                id: 5,
                title: 'Quality Designs:',
                text: "Opt for shared hosting or managed WordPress hosting. Shared hosting offers cost-effective solutions by sharing server resources. Managed WordPress hosting provides enhanced performance and security. Find the best hosting option to suit your needs and budget."
            },
            {
                id: 6,
                title: 'Scalability:',
                text: "Start small and scale effortlessly. Our budget-friendly web development services ensure easy expansion. Add new features and functionalities as your business grows, staying equipped to meet the demands of your expanding customer base."
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
    }
];


const process = [
    {
        id: 1,
        custom: false,
        title: 'My Development Process',
        bg: 'bg-base-200',
        button: 'Get started',
        img: require('../../assets/images/process.svg').default,
        description: '',
        steps: [
            {
                id: 1,
                title: 'Consultation',
                text: "I start by understanding your website goals and needs. Through detailed discussions, I learn about your business, target audience, and desired features. This helps me create a tailored solution that fits your requirements and budget."
            },
            {
                id: 2,
                title: 'Design & Development',
                text: "I offer competitive pricing, with minimal upfront costs and no hidden fees. You only pay for the services you need, ensuring you get the most value for your investment."
            },
            {
                id: 3,
                title: 'Launch',
                text: "I thoroughly test your website to ensure it works smoothly, adapts to different devices, and provides an excellent user experience. I launch your mobile-friendly website, making it fully functional and ready for use."
            },
        ]
    }
]

export { hero, process, solution, faqData, metaProps }
