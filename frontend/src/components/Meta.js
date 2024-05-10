import React, { useEffect } from 'react';

const Meta = ({ title, description }) => {
    useEffect(() => {
        document.title = title;

        const metaTags = document.getElementsByTagName('meta');
        for (let i = 0; i < metaTags.length; i++) {
            const attribute = metaTags[i].getAttribute('name');
            const property = metaTags[i].getAttribute('property');

            if (attribute === 'title' || property === 'og:title' || attribute === 'twitter:title') {
                metaTags[i].content = title;
            }

            if (attribute === 'description' || property === 'og:description' || attribute === 'twitter:description') {
                metaTags[i].content = description;
            }
        }
    }, []);

    return <></>;
};

Meta.defaultProps = {
    title: 'Build Your Online Presence | Budget-Friendly Websites, Custom Apps, Lead Generation Automation',
    description: "Explore budget-friendly website development, custom app solutions, and lead generation automation services tailored to your needs and budget. Let's create a personalized solution for your online business goals.",
};

export default Meta;
