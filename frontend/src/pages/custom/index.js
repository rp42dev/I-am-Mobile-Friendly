import { Features3, Features5, Testimonials, Contact, Features2, Faq, Hero, Meta } from '../../components';
import { features, faqData, hero, benefits, process, metaProps, what } from './data';

const Custom = () => {

    return (
        <>
            <Meta {...metaProps} />
            <Hero data={hero[0]} />
            <Features3 data={what} />
            <Features2 data={features} />
            <Features5 data={process} />
            <Features2 data={benefits} />
            <Testimonials />
        
            <Contact />
            <Faq data={faqData} />
        </>
    );
}

export default Custom;