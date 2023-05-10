import { Features, Features3, Testimonials, Contact, Features2, Why, Projects, Hero } from '../../components';
import { hero, services, benefits, features, mobile, process } from './data';

const Home = () => {
    return (
        <>
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