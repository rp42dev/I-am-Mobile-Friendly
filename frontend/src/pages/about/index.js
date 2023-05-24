import { Testimonials, Contact, Features, Features4, Hero, Meta, Faq } from '../../components';
import { hero, services, benefits, mission, faqData, vision, metaProps } from './data';


const About = () => {
    return (
        <>
            <Meta {...metaProps} />
            <Hero data={hero[0]} />
            <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="rp42" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://ie.linkedin.com/in/rp42?trk=profile-badge">Raivis P.</a></div>

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