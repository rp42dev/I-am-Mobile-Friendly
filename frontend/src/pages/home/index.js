import { Services, Testimonials, Contact, Benefits, Projects, Hero, Meta } from '../../components';
import { hero, services, faqData, benefits } from './data';

const Home = () => {
    return (
        <>
            <Meta />
            <Hero data={hero[0]} />
            <Services data={services} />
            <Projects />
            <Testimonials bg={200} />
            <Benefits data={benefits} />
            <Contact />
            <Benefits data={faqData} />
        </>
    );
}

export default Home;