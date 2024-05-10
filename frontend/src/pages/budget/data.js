const metaProps = {
    title: 'Affordable Website Development Services | Mobile-Friendly & Budget-Friendly',
    description: 'Discover affordable web development services that establish a strong online presence without exceeding your budget. Get a mobile-friendly website using WordPress and cPanel. Learn more about our rapid launch process and user-friendly CMS.',
}

const hero = [
    {
        title: 'Website',
        bg: 'bg-base-200',
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

const solution = [
    {
        id: 1,
        custom: true,
        bg: 'bg-base',
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
        custom: false,
        title: 'Development Process',
        bg: 'bg-base-200',
        button: 'Get started',
        img: require('../../assets/images/process.svg').default,
        description: '',
        steps: [
            {
                id: 1,
                title: 'Consultation',
                text: "We begin by understanding your website goals and needs through detailed discussions about your business, target audience, and desired features. This process allows us to create a tailored solution that aligns with your requirements and budget."
            },
            {
                id: 2,
                title: 'Design & Development',
                text: "We design a visually appealing website using WordPress or other builders, making sure to reflect your brand identity. We ensure it is mobile-friendly, user-friendly, and cost-effective. Throughout the process, we keep you informed and incorporate your feedback to refine the design."
            },
            {
                id: 3,
                title: 'Launch',
                text: "After completing the website, we conduct thorough testing to ensure seamless functionality across various devices. We take care of setting up hosting and domain registration for a smooth launch. Your website is now live and poised to attract visitors and facilitate business growth."
            }
        ]
    }
];


const faqData = [
    {
        id: 1,
        question: "What are the benefits of affordable web development services?",
        answer: "Our affordable web development services provide you with a professional website at a fraction of the cost of custom development. We leverage tools like WordPress and cPanel to create visually appealing websites that align perfectly with your goals and budget."
    },
    {
        id: 2,
        question: "How quickly can I establish my online presence with your services?",
        answer: "With our expertise in pre-made templates, we can swiftly establish your online presence, allowing you to capitalize on opportunities and stay ahead of competitors. Our rapid launch process minimizes downtime and maximizes business prospects."
    },
    {
        id: 3,
        question: "How user-friendly are the content management systems (CMS) you use?",
        answer: "We use intuitive interfaces like WordPress and cPanel, allowing you to effortlessly manage your website. You can make content updates and additions without technical expertise, reducing maintenance costs and enhancing your independence."
    },
    {
        id: 4,
        question: "What kind of designs can I expect for my website?",
        answer: "Expect modern and visually appealing designs that help your business stand out. Choose from a variety of pre-designed templates that leave a lasting impression on your target audience and effectively represent your business."
    },
    {
        id: 5,
        question: "What hosting options do you offer for my website?",
        answer: "You can opt for shared hosting for cost-effective solutions by sharing server resources. Alternatively, choose managed WordPress hosting for enhanced performance and security tailored to your specific needs and budget."
    },
    {
        id: 6,
        question: "How scalable are your budget-friendly web development services?",
        answer: "Our services are designed to help you start small and expand seamlessly. Easily add new features and functionalities as your business grows to meet the demands of your expanding customer base."
    },
    {
        id: 7,
        question: "What is involved in the consultation phase of the development process?",
        answer: "We start by thoroughly understanding your website goals, business specifics, target audience, and desired features. This detailed discussion helps us create a tailored solution that perfectly aligns with your requirements and budget."
    },
    {
        id: 8,
        question: "Can you describe the design and development process?",
        answer: "We design visually appealing websites using WordPress or other builders, ensuring that your brand identity is reflected in the design. We prioritize mobile-friendliness, user-friendliness, and cost-effectiveness throughout the process."
    },
    {
        id: 9,
        question: "What happens during the website launch phase?",
        answer: "After completing the website, we conduct comprehensive testing to ensure seamless functionality across different devices. We also assist with setting up hosting and domain registration for a smooth and successful launch."
    },
    {
        id: 10,
        question: "How will my website attract visitors and facilitate business growth?",
        answer: "With our services, your website is now live and optimized to attract visitors. The quality design, user-friendly interface, and efficient hosting options contribute to enhancing your online presence and driving business growth."
    }
];




export { hero, process, solution, faqData, metaProps }
