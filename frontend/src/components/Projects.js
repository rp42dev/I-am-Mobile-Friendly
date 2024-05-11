// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";


import tattoo_sk from '../assets/images/projects/tattoo_sk.webp';
import fromladstodads from '../assets/images/projects/fromladstodads.webp';
import ed_tattoo from '../assets/images/projects/ed_tattoo.webp';
import maya from '../assets/images/projects/maya.webp';
import andrejfineart from '../assets/images/projects/andrejsfinert.webp';
import oslorevovering from '../assets/images/projects/oslo_renovering.webp';
import rp42dev from '../assets/images/projects/rp42dev.webp';
import rrpartners from '../assets/images/projects/rr_partners.webp';


const Projects = () => {
    return (
        <div className="py-24 overflow-hidden">
            <div className="container mx-auto w-full px-4 text-center">
                <h2 className="text-3xl font-extrabold sm:text-4xl pb-6">
                    Recent Projects and Clients
                </h2>
            </div>
            <Swiper
                effect={"cube"}
                grabCursor={true}
                cubeEffect={{
                    shadow: false,
                    slideShadows: false,
                    shadowOffset: 60,
                    shadowScale: 0.60,
                }}

                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={true}
                loop={true}
                modules={[Pagination, Autoplay]}
                className="swiper"
            >
                <SwiperSlide>
                    <a href="https://oslorenoveringbygg.com/" target="_blank" rel="noreferrer">
                        <img className="img" src={oslorevovering} alt="oslo renovering" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://andrejfineart.com/" target="_blank" rel="noreferrer">
                        <img className="img" src={andrejfineart} alt="Andrej Fineart" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://rrpartners.lv/" target="_blank" rel="noreferrer">
                        <img className="img" src={rrpartners} alt="rr partners LV" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://www.mayanurtures.net/" target="_blank" rel="noreferrer">
                        <img className="img" src={maya} alt="maya Nurtures" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://tattooskworkshop.no/" target="_blank" rel="noreferrer">
                        <img className="img" src={tattoo_sk} alt="tattoo_sk" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://rp42dev.com/" target="_blank" rel="noreferrer">
                        <img className="img" src={rp42dev} alt="rp42dev" />
                    </a>
                </SwiperSlide>

                <SwiperSlide>
                    <a href="https://fromladstodads.ie/" target="_blank" rel="noreferrer">
                        <img className="img" src={fromladstodads} alt="from lads to dads" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://ed-tattoo-lorenskog.netlify.app" target="_blank" rel="noreferrer">
                        <img className="img" src={ed_tattoo} alt="ed tattoo" />
                    </a>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Projects