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


const images = [
    { image: oslorevovering, alt: "oslo renovering", link: "https://oslorenoveringbygg.com/" },
    { image: rrpartners, alt: "rr partners LV", link: "https://rrpartners.lv/" },
    { image: andrejfineart, alt: "Andrej Fineart", link: "https://andrejfineart.com/" },
    { image: maya, alt: "maya Nurtures", link: "https://www.mayanurtures.net/" },
    { image: tattoo_sk, alt: "tattoo_sk", link: "https://tattooskworkshop.no/" },
    { image: fromladstodads, alt: "from lads to dads", link: "https://fromladstodads.ie/" },
    { image: ed_tattoo, alt: "ed tattoo", link: "https://ed-tattoo-lorenskog.netlify.app" },
    { image: rp42dev, alt: "rp42dev", link: "https://rp42.dev/" },
];


const Projects = () => {
    return (
        <div className="mx-auto container py-24 overflow-hidden">
            <div className="container mx-auto w-full px-4 text-center">
                <h2 className="text-3xl font-extrabold sm:text-4xl pb-6">
                    Recent Projects and Clients
                </h2>
            </div>
            <Swiper
                effect={"cube"}
                // grabCursor={true}
                breakpoints={{
                    800: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    1300: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                }}

                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={true}
                loop={true}
                modules={[Pagination, Autoplay]}
                className="swiper"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <a href={image.link} target="_blank" title="Visit site flex">
                            <img src={image.image} alt={image.alt} className="mx-auto" width={800} />
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Projects