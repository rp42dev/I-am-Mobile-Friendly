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
    title: 'Need to Build Your Website? | Website Design Ireland | I am Mobile Friendly',
    description: 'I am a freelance web designer based in Ireland. I design and build mobile friendly websites for small businesses and individuals. I also provide Transformation to mobile friendly websites for existing websites.',
};

export default Meta;
