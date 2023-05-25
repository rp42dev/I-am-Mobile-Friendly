import { Testimonials, Contact, Features, Features4, Hero, Meta, Faq } from '../../components';
import { hero, services, benefits, mission, faqData, vision, metaProps } from './data';


const About = () => {
    return (
        <>
            <Meta {...metaProps} />
            <Hero data={hero[0]} />
            <Features4 data={vision} />
            <Features data={services} />
            <Features4 data={mission} />
            <Features data={benefits} />
            <Testimonials />
            <Contact />
            <Faq data={faqData} />
        </>
    );
}

export default About