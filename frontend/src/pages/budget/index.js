import { Features, Features2, Testimonials, Contact, Features3, Hero, Faq, Meta } from '../../components';

import { hero, faqData, process, agitate, solution, benefits, metaProps } from './data';
const Budget = () => {
    return (
        <>
            <Meta {...metaProps} />
            <Hero data={hero[0]} />
            <Features3 data={agitate} />
            <Features2 data={solution} />
            <Features data={benefits} />
            <Features3 data={process} />
            <Testimonials />
            <Contact />
            <Faq data={faqData} />
        </>

    );
}

export default Budget;