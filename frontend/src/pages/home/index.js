import { Features, Features3, Testimonials, Contact, Features2, Why, Projects, Hero, Meta, Faq } from '../../components';
import {hero, services, benefits, mobile, process, faqData } from './data';

const Home = () => {
    return (
        <>
            <Meta />
            <Hero data={hero[0]} />
            <Features data={services} />
            <Why />
            <Features2 data={mobile} />
            <Features data={benefits} />
            <Projects />
            <Features3 data={process} />
            <Testimonials />
            <Contact />
            <Faq data={faqData} />
       </>
    );
}

export default Home;