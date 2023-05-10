import { Testimonials, Contact, Features3, Features, Faq, Hero  } from '../../components';
import { hero, faqData, agitate, solution, process, benefits } from './data';

const Transform = () => {
    return (
        <>
            <Hero data={hero[0]} />
            <Features3 data={agitate} />
            <Features data={solution} />
            <Features3 data={process} />
            <Features data={benefits} />
            <Testimonials />
            <Contact />
            <Faq data={faqData} />
        </>
    );
}

export default Transform;