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
    }, []); // Empty dependency array to run the effect after initial rendering

    return <></>;
};

Meta.defaultProps = {
    title: 'Web Development Services in Ireland | Drogheda, Dublin & Remote | I and mobile friendly developer',
    description: 'I specialize in creating unique and responsive websites tailored to meet your business needs. Our services include Custom Web Development, Budget Web Development, and Mobile Website Transformation, all designed to enhance your online presence.',
};

export default Meta;
