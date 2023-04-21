const image = require('../../assets/images/devices2.jpg');

const Home = () => {
    return (
        <div className="home">
            <div className="hero mt-8">
                <div className="w-screen hero-content flex-col lg:flex-row-reverse justify-between">
                    <div className="max-w-lg ">
                        <div className="mockup-phone border-primary">
                            <div className="camera"></div>
                            <div className="display">
                                <div className="artboard artboard-demo phone-1">
                                    <img src={image} alt="Contact" className="object-contain h-100 w-full rounded-lg shadow-xl" />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="relative text-center lg:text-left flex-1">
                        <span className="w-20 h-2 mb-12"></span>
                        <h1 className="flex flex-col text-6xl font-black leading-none uppercase font-bebas-neue sm:text-8xl">
                            I am Mobile
                            <span className="text-5xl sm:text-7xl">
                                Friendly
                            </span>
                        </h1>
                        <p className="py-6">
                            Looking for a mobile-friendly website that will engage and attract your target audience? Look no further! I can help you create a website that is fully optimized for mobile devices. 
                            
                        </p>
                        <div className="flex mt-4">
                            <a href="#" className="px-4 py-2 mr-4 text-white uppercase bg-primary border-2 border-transparent rounded-lg text-md hover:bg-primary-focus focus:bg-primary-focus">
                                Get started
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
    
export default Home;