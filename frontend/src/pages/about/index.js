import { Testimonials, Contact, Features, Features4, Hero, Meta, Faq } from '../../components';
import { hero, faqData, vision, metaProps } from './data';
import { services } from '../home/data';


const About = () => {
    return (
        <>
            <Meta {...metaProps} />
            <Hero data={hero[0]} />
            <Features4 data={vision} />
            <Features data={services} bg={ "base-200" } />
            <Testimonials />
            <Contact />
            <Faq data={faqData} />
        </>
    );
}

export default About