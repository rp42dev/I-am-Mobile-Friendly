import { Testimonials, Features5, Contact, Features2, Faq, Hero, Meta, Features3 } from '../../components';
import { features, faqData, hero, process, metaProps, what } from './data';

const Funnels = () => {

    return (
        <>
            <Meta {...metaProps} />
            <Hero data={hero[0]} />
            <Features3 data={what} />
            <Features2 data={features} />
            <Features5 data={process} />
            <Testimonials />
            <Contact />
            <Faq data={faqData} />
        </>
    );
}

export default Funnels;