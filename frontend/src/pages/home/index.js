import { Features, Features3, Testimonials, Contact, Features2, Why, Projects, Hero, Meta } from '../../components';
import { hero, services, benefits, mobile, process } from './data';

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
       </>
    );
}

export default Home;