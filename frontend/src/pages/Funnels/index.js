import { Testimonials, Features5, Contact, Features2, Faq, Hero, Meta } from '../../components';
import { features, faqData, hero, process, metaProps } from './data';

const Funnels = () => {

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

export default Funnels;