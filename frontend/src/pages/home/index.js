import { Features, Testimonials, Contact, Features2, Projects, Hero, Meta, Faq } from '../../components';
import {hero, services, faqData, benefits} from './data';

const Home = () => {
    return (
        <>
            <Meta />
            <Hero data={hero[0]} />
            <div className="bg-base-200">
                <Features data={services} />
            </div>
            <div className="bg-base">
                <Projects />
            </div>
            <div className="bg-base-200">
            <Testimonials />
            </div>
                <Features2 data={benefits} />
            
            <Contact />
            <Faq data={faqData} />
       </>
    );
}

export default Home;