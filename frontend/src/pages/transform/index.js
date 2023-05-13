import React, { useEffect } from 'react';

import { Testimonials, Contact, Features3, Features, Faq, Hero, Meta } from '../../components';
import { hero, faqData, agitate, solution, process, benefits, metaProps } from './data';

const Transform = () => {
    
    return (
        <>
            <Meta {...metaProps} />
            <Hero data={hero[0]} />
            <Features3 data={agitate} />
            <Features data={solution} />
            <Features3 data={process} />
            <Features data={benefits} />
            <Testimonials />
            <Contact />
            <Faq data={faqData} />
        </>
    );
}

export default Transform;