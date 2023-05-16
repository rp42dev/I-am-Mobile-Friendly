import { Testimonials, Contact, Features, Features4, Features3, Hero, Meta, Faq } from '../../components';
import { hero, services, benefits, mission, faqData, vision } from './data';


const About = () => {
    return (
        <>
            <Meta />
            <Hero data={hero[0]} />
            <Features4 data={vision} />
            <Features4 data={mission} />
            <Features data={services} />
            <Features data={benefits} />
            <Testimonials />
            <Contact />
            <Faq data={faqData} />
        </>
    );
}

export default About