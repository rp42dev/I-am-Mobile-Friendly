import { Features, Testimonials, Contact, Features2, Projects, Hero, Meta, Faq } from '../../components';
import {hero, services, faqData, benefits} from './data';

const Home = () => {
    return (
        <>
            <Meta />
            <Hero data={hero[0]} />
            <Features data={services} />
            <Projects />
            <Testimonials />
            <Features2 data={benefits} />
            <Contact />
            <Faq data={faqData} />
       </>
    );
}

export default Home;