// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';
// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'Crypto Edge',
          path: '/crypto.png',
          link: 'https://github.com/mahmudlukman/crypto_edge',
          description: 'Crypto Edge is a Web 3.0 NFT(non fungible token) marketplace that offers a seamless and secure environment for buying, listing, and selling NFTs using cryptocurrency on the Ethereum blockchain.'
        },
        {
          title: 'Filmflix',
          path: '/filmflix.png',
          link: 'https://moviesflixx.netlify.app/',
          description: 'Filmflix is an innovative AI-powered movie recommendation web application that sets a new standard in the entertainment industry. This platform offers users the ability to search for the latest movies across diverse genres and categories, all while integrating voice recognition for a seamless and intuitive experience'
        },
        // {
        //   title: 'Cherish School of Nursing',
        //   path: '/thumb3.jpg',
        //   link: 'https://cherishedu.net/',
        //   description: 'lorem'
        // },
        // {
        //   title: 'Arewa Foundation',
        //   path: '/thumb4.jpg',
        //   link: 'https://arewafoundation.org/',
        //   description: 'lorem'
        // },
      ],
    },
    // {
    //   images: [
    //     {
    //       title: 'title',
    //       path: '/thumb4.jpg',
    //     },
    //     {
    //       title: 'title',
    //       path: '/thumb1.jpg',
    //     },
    //     {
    //       title: 'title',
    //       path: '/thumb2.jpg',
    //     },
    //     {
    //       title: 'title',
    //       path: '/thumb3.jpg',
    //     },
    //   ],
    // },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
              {slide.images.map((image, index) => {
                return (
                  <div key={index} className='relative rounded-lg overflow-hidden flex items-center justify-center group'>
                    <div className='flex items-center justify-center relative overflow-hidden group'>
                      {/* image */}
                      <Image src={image.path} alt="" width={500} height={300} />
                      {/* overlay gradient */}
                      <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                      {/* title */}
                      <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                        <div className='m-6 xl:mb-16'>{image.description}</div>
                        <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                          {/* title part 1 */}
                          <Link href={image.link} className='delay-100 ml-6'>{image.title}</Link>
                          <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                            <BsArrowRight/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
