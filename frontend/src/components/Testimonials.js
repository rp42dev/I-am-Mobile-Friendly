// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import jeff from '../assets/images/testimonials/jeff.webp';
import ed from '../assets/images/testimonials/ed.webp';
import jane from '../assets/images/testimonials/jane.webp';
import star from '../assets/images/star.svg';
import quote from '../assets/images/quote.svg';

const data = [
    {
        id: 1,
        image: jeff,
        name: 'Jeff',
        title: 'Director of the board FLTD',
        description: 'Raivis has been an intergeral part of our online division in From Lads to Dads. His knowledge, expertise and understanding of the online section of our charity has been second to none. He has built and maintained our online division, bringing it together with the social media end which is very important to todays businesses. We are happy to count Raivis as part of our team.'
    },
    {
        id: 2,
        image: ed,
        name: 'Ed Tattoo',
        title: 'CEO of edtattoo.no',
        description: 'Raivis was hired as our web developer. Our industry is focused on internet and social network support. Thanks to Raivis, our company has achieved incredibly high results. Through his work, we have made contact with countless customers, and our customer base continues to grow every day. We are happy to have worked with Raivis..'
    },
    {
        id: 3,
        image: jane,
        name: 'Jane',
        title: 'Tattoo SK Workshop administrator',
        description: 'Raivis made an amazing web page for us. I have tried it myself many times and I am very glad that I found it and our page looks very bright and professional. In a short time with 100% feedback, he takes into account all the wishes and also gives advice, which is often very helpful. Definitely made my life easier.'
    },
]


const Testimonials = () => {
    return (
        <section className="pt-12 pb-24">
            <div className="container mx-auto w-full px-4 py-4 mt-6 text-center">
                <h2 className="text-3xl font-extrabold sm:text-4xl">
                    What our clients say about us
                </h2>
            </div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={"auto"}
                grabCursor={true}
                loop={true}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="flex flex-col items-center justify-center w-full p-4 mx-auto text-center">
                            <img src={item.image} alt={item.name} className="w-40 h-40 rounded-full" />
                            <h3 className="mt-4 text-2xl font-semibold sm:text-xl">{item.name}</h3>
                            <p className="text-sm font-medium">{item.title}</p>
                            <p className="max-w-lg mt-4 text-sm">{item.description}</p>
                            <div className="flex items-center justify-center mt-4 space-x-2">
                                <img src={star} alt="star" className='w-8 h-8' />
                                <img src={star} alt="star" className='w-8 h-8' />
                                <img src={star} alt="star" className='w-8 h-8' />
                                <img src={star} alt="star" className='w-8 h-8' />
                                <img src={star} alt="star" className='w-8 h-8' />

                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Testimonials