import { Strategy, ChatCircleDots, Code, CloudArrowUp } from "@phosphor-icons/react";


const metaProps = {
    title: 'Affordable Website Development Services | Mobile-Friendly & Budget-Friendly',
    description: 'Discover affordable web development services that establish a strong online presence without exceeding your budget. Get a mobile-friendly website using WordPress and cPanel. Learn more about our rapid launch process and user-friendly CMS.',
}

const hero = [
    {
        title: 'Website',
        bg: 200,
        subtitle: 'Development Services',
        description: 'Affordable web development services that help you establish a strong online presence without breaking the bank. Get a mobile-friendly website that fits your budget and drives success in the digital world.',
        image: require('../../assets/images/budget.svg').default,       
        alt: 'Budget mobile friendly website development Displaying a responsive website on a desktop, tablet, and mobile phone',
        btn: 'Get started',
        btn2: 'Learn more',
        link: '#contact',
        link2: '#features2'
    }
]

const benefits = [
    {
        id: 1,
        custom: true,
        bg: 300,
        text: 'Benefits of Our Website Development',
        data: [
            {
                id: 1,
                title: 'Affordability:',
                text: "Obtain a professional website at a fraction of the cost of custom development, leveraging tools like WordPress and cPanel for visually appealing websites that align with your goals and budget."
            },
            {
                id: 2,
                title: 'Quick Turnaround:',
                text: "Establish your online presence swiftly with expertise in pre-made templates, minimizing downtime and maximizing business prospects."
            },
            {
                id: 3,
                title: 'User-Friendly CMS:',
                text: "Effortlessly manage your website using intuitive interfaces like WordPress and cPanel, reducing maintenance costs and enhancing independence."
            },
            {
                id: 4,
                title: 'Quality Designs:',
                text: "Stand out with modern, visually appealing website designs using a variety of pre-designed templates that make a lasting impression."
            },
            {
                id: 5,
                title: 'Hosting Options:',
                text: "Choose between shared hosting for cost-effective solutions or managed WordPress hosting for enhanced performance and security tailored to your needs and budget."
            },
            {
                id: 6,
                title: 'Scalability:',
                text: "Start small and expand seamlessly with budget-friendly web development services that enable easy growth and adaptation."
            }
        ]
    }
];

const process = [
    {
        id: 1,
        bg: 200,
        img: require('../../assets/images/process.svg').default,
        title: "Streamlined Development Process",
        description: "",
        button: "Get started",
        steps: [
            {
                id: 1,
                title: 'Consultation',
                icon: <ChatCircleDots size={32} />,
                text: "We start by understanding your website goals and needs through detailed discussions about your business, target audience, and desired features. This process allows us to create a customized solution that matches your requirements and budget.",
                link: ""
            },
            {
                id: 2,
                title: "Planning",
                icon: <Strategy size={32} />,
                text: "We develop a detailed plan that outlines the project scope, timeline, and milestones. We work closely with you to ensure that all aspects of your website are considered and that the plan meets your expectations.",
                link: ""
            },
            {
                id: 3,
                title: 'Design & Development',
                icon: <Code size={32} />,
                text: "We create a visually appealing website using WordPress or other builders, ensuring it reflects your brand identity. It's mobile-friendly, user-friendly, and cost-effective. Throughout, we keep you informed and incorporate your feedback to refine the design.",
                link: ""
            },
            {
                id: 4,
                title: 'Launch',
                icon: <CloudArrowUp size={32} />,
                text: "Once the website is completed, we conduct thorough testing to ensure seamless functionality across various devices. We handle hosting and domain registration for a smooth launch. Your website is now live and ready to attract visitors and support business growth.",
                link: ""
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
                title: "What are the benefits of affordable web development services?",
                text: "Our affordable web development services provide you with a professional website at a fraction of the cost of custom development. We leverage tools like WordPress and cPanel to create visually appealing websites that align perfectly with your goals and budget."
            },
            {
                id: 2,
                title: "How quickly can I establish my online presence with your services?",
                text: "With our expertise in pre-made templates, we can swiftly establish your online presence, allowing you to capitalize on opportunities and stay ahead of competitors. Our rapid launch process minimizes downtime and maximizes business prospects."
            },
            {
                id: 3,
                title: "How user-friendly are the content management systems (CMS) you use?",
                text: "We use intuitive interfaces like WordPress and cPanel, allowing you to effortlessly manage your website. You can make content updates and additions without technical expertise, reducing maintenance costs and enhancing your independence."
            },
            {
                id: 4,
                title: "What kind of designs can I expect for my website?",
                text: "Expect modern and visually appealing designs that help your business stand out. Choose from a variety of pre-designed templates that leave a lasting impression on your target audience and effectively represent your business."
            },
            {
                id: 5,
                title: "What hosting options do you offer for my website?",
                text: "You can opt for shared hosting for cost-effective solutions by sharing server resources. Alternatively, choose managed WordPress hosting for enhanced performance and security tailored to your specific needs and budget."
            },
            {
                id: 6,
                title: "How scalable are your budget-friendly web development services?",
                text: "Our services are designed to help you start small and expand seamlessly. Easily add new features and functionalities as your business grows to meet the demands of your expanding customer base."
            },
            {
                id: 7,
                title: "What is involved in the consultation phase of the development process?",
                text: "We start by thoroughly understanding your website goals, business specifics, target audience, and desired features. This detailed discussion helps us create a tailored solution that perfectly aligns with your requirements and budget."
            },
            {
                id: 8,
                title: "Can you describe the design and development process?",
                text: "We design visually appealing websites using WordPress or other builders, ensuring that your brand identity is reflected in the design. We prioritize mobile-friendliness, user-friendliness, and cost-effectiveness throughout the process."
            },
            {
                id: 9,
                title: "What happens during the website launch phase?",
                text: "After completing the website, we conduct comprehensive testing to ensure seamless functionality across different devices. We also assist with setting up hosting and domain registration for a smooth and successful launch."
            },
            {
                id: 10,
                title: "How will my website attract visitors and facilitate business growth?",
                text: "With our services, your website is now live and optimized to attract visitors. The quality design, user-friendly interface, and efficient hosting options contribute to enhancing your online presence and driving business growth."
            }
        ]
    }
];

export { hero, process, faqData, metaProps, benefits };
