import { Testimonials, Contact, Features, Features4, Features2, Hero, Meta, Faq } from '../../components';
import { hero, services, benefits, faqData, vision, metaProps } from './data';


const About = () => {
    return (
        <>
            <Meta {...metaProps} />
            <Hero data={hero[0]} />
            <Features4 data={vision} />
            <Features data={services} />
            <Features2 data={benefits} />
            <Testimonials />
            <Contact />
            <Faq data={faqData} />
        </>
    );
}

export default About