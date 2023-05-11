import Accordion from "./Accordion";

const Faq = (props) => {
    const { data } = props;
    return (
        <div className="container mx-auto mb-24" id="accordion">
            <h2 className="text-3xl font-bold text-center text-base-content">Frequently Asked Questions</h2>
            <div className="w-full px-4 lg:w-1/2 mx-auto">
                {data.map((item, index) => (
                    <Accordion key={index} title={item.question} content={item.answer} />
                ))}
            </div>
        </div>
    );
}

export default Faq;