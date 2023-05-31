import { Features, Features5, Testimonials, Contact, Features2, Faq, Hero, Meta } from '../../components';
import { features, faqData, hero, benefits, process, metaProps } from './data';

const Custom = () => {

    return (
        <>
            <Meta {...metaProps} />
            <Hero data={hero[0]} />
            <Features2 data={features} />
            <Features5 data={process} />
            <Testimonials />
        
            <Contact />
            <Faq data={faqData} />
        </>
    );
}

export default Custom;