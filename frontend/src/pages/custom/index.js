import { Testimonials, Process, Contact, Benefits, Hero, Meta } from '../../components';
import { features, faqData, hero, process, metaProps } from './data';

const Custom = () => {

    return (
        <>
            <Meta {...metaProps} />
            <Hero data={hero[0]} />
            <Benefits data={features} />
            <Process data={process} />
            <Testimonials />
            <Contact />
            <Benefits data={faqData} />
        </>
    );
}

export default Custom;