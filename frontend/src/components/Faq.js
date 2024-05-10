import Accordion from "./Accordion";

const Faq = (props) => {
    const { data } = props;
    return (
        <div className="container mx-auto py-24 space-y-6 px-4 ">
            <h2 className="text-3xl font-bold sm:text-center text-base-content">Frequently Asked Questions</h2>
            <div className="w-full lg:w-1/2 mx-auto space-y-4">
                {data.map((item, index) => (
                    <Accordion key={index} title={item.question} content={item.answer} />
                ))}
            </div>
        </div>
    );
}

export default Faq;