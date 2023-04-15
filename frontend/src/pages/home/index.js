const image = require('../../assets/images/contact.jpg');

const Home = () => {
    return (
        <div className="home">
            <div className="hero mt-8">
                <div className="w-screen hero-content flex-col lg:flex-row-reverse justify-between">
                    <div className="max-w-lg">
                        <img src={image} alt="Contact" className="object-contain h-100 w-full rounded-lg shadow-xl" />
                    </div>
                    <div className="text-center lg:text-left flex-1">
                        <h1 className="text-5xl font-bold">I'm Mobile friendly!</h1>
                        <p className="py-6">Are you looking for a mobile friendly website? I can help you with that!</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
    
export default Home;