import { Testimonials, Benefits, Contact, Process, Hero, Meta } from '../../components';

import { hero, faqData, process, benefits, metaProps } from './data';

const Budget = () => {
    return (
        <>
            <Meta {...metaProps} />
            <Hero data={hero[0]} />
            <Benefits data={benefits} />
            <Process data={process} />
            <Testimonials bg={300} />
            <Contact />
            <Benefits data={faqData} />
        </>
    );
}

export default Budget;