import { Features, Features3, Testimonials, Contact, Features2, Why, Projects, Hero, Meta, Faq } from '../../components';
import {hero, services, benefits, mobile, process, faqData, what } from './data';

const Home = () => {
    return (
        <>
            <Meta />
            <Hero data={hero[0]} />
            <Features data={services} />
            <Features2 data={mobile} />
            <Features3 data={what} />
            <Features3 data={process} />
            <Features data={benefits} />
            <Projects />
            <Testimonials />
            <Contact />
            <Faq data={faqData} />
       </>
    );
}

export default Home;