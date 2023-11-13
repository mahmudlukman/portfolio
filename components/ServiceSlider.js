// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from 'react-icons/rx';

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Custom Web App Development',
    description: 'Crafting innovative and user-centric web applications.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Training and Mentorship',
    description: 'Offering coaching and training sessions for aspiring programmers.',
  },
  {
    icon: <RxDesktop />,
    title: 'Consultancy',
    description: 'Providing insights and consultations to startups and businesses on tech strategies.',
  },
  {
    icon: <RxRocket />,
    title: 'Startup Launch',
    description: 'Assisting startups from ideation, MVP creation, and technology implementation.',
  },
  {
    icon: <RxReader />,
    title: 'Project Management and Collaboration',
    description: 'Collaborating with teams or organizations in project management.',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
              {/* icon */}
              <div className='text-4xl text-accent mb-4'>{item.icon}</div>
              {/* title & desc */}
              <div className='mb-8'>
                <div className='mb-2 text-lg'>{item.title}</div>
                <p className='max-w-[350px] leading-normal'>{item.description}</p>
              </div>
              {/* arrow */}
              <div className='text-3xl'>
                <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300'/>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
