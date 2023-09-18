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
    title: 'Web Development Services | Funnel Building Services',
    description: 'I offer custom and budget-friendly web development services for small businesses and startups. I also offer Funnel Building services for coaching and service-based businesses.',
};

export default Meta;
