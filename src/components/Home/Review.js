import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../CSS/review.css";

import img from '../../images/03_Gastro-Webseiten-Sliderbilder.jpg';

// import required modules
import {Pagination ,Autoplay,Navigation} from "swiper";
import { Parallax } from 'react-parallax';

export default function Review() {
  return (
    <Parallax bgImage={img}  strength={300} >

<section className='w-full  bg-opacity-20 bg-black'>
                <div className='container m-auto pt-16 pb-10'>
                <div className='relative w-full mb-10 ' data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
                    <h1 className='text-5xl sm:text-8xl font-vibes text-[#c8a97e] text-center '>Testimony</h1>
                    <span className='text-xl sm:text-5xl font-serif absolute left-1/4 -translate-y-6 translate-x-5 sm:-translate-y-10 md:left-40 lg:left-1/4 lg:translate-x-10 xl:left-1/3 xl:translate-x-10 text-white font-black'>Happy Customer</span>
                </div>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    pagination={{
                    clickable: true,
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                      }}
                    breakpoints={{
                    640: {
                        slidesPerView: 2,
                      
                    },
                    1024: {
                        slidesPerView: 3,
                        
                    },
                    }}
                    navigation={true}
                    modules={[Pagination,Autoplay, Navigation]}
                    className="mySwiper cursor-pointer "
                    data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true"
                >
                    <SwiperSlide>
                        <div className='text-center p-5'>
                            <div className='  mb-7 mt-7 flex justify-center'>
                                <div className='h-24 w-24 rounded-full bg-slate-800'>
                                    
                                </div>
                            </div>
                            <p className='text-gray-300 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolores maiores animi deserunt consequatur praesentium quos, aperiam fuga fugit dolorum.</p>
                            <h1 className='mt-5 text-white font-playfair font-extrabold text-2xl'>Rose Handerson</h1>
                            <p className='text-white tracking-widest font-nunito text-lg mt-1 mb-5'>Customer</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='text-center p-5'>
                            <div className='  mb-7 mt-7 flex justify-center'>
                                <div className='h-24 w-24 rounded-full bg-slate-800'>
                                    
                                </div>
                            </div>
                            <p className='text-gray-300 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolores maiores animi deserunt consequatur praesentium quos, aperiam fuga fugit dolorum.</p>
                            <h1 className='mt-5 text-white font-playfair font-extrabold text-2xl'>Rose Handerson</h1>
                            <p className='text-white tracking-widest font-nunito text-lg mt-1 mb-5'>Customer</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='text-center p-5'>
                            <div className='  mb-7 mt-7 flex justify-center'>
                                <div className='h-24 w-24 rounded-full bg-slate-800'>
                                    
                                </div>
                            </div>
                            <p className='text-gray-300 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolores maiores animi deserunt consequatur praesentium quos, aperiam fuga fugit dolorum.</p>
                            <h1 className='mt-5 text-white font-playfair font-extrabold text-2xl'>Rose Handerson</h1>
                            <p className='text-white tracking-widest font-nunito text-lg mt-1 mb-5'>Customer</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='text-center p-5'>
                            <div className='  mb-7 mt-7 flex justify-center'>
                                <div className='h-24 w-24 rounded-full bg-slate-800'>
                                    
                                </div>
                            </div>
                            <p className='text-gray-300 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolores maiores animi deserunt consequatur praesentium quos, aperiam fuga fugit dolorum.</p>
                            <h1 className='mt-5 text-white font-playfair font-extrabold text-2xl'>Rose Handerson</h1>
                            <p className='text-white tracking-widest font-nunito text-lg mt-1 mb-5'>Customer</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='text-center p-5'>
                            <div className='  mb-7 mt-7 flex justify-center'>
                                <div className='h-24 w-24 rounded-full bg-slate-800'>
                                    
                                </div>
                            </div>
                            <p className='text-gray-300 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolores maiores animi deserunt consequatur praesentium quos, aperiam fuga fugit dolorum.</p>
                            <h1 className='mt-5 text-white font-playfair font-extrabold text-2xl'>Rose Handerson</h1>
                            <p className='text-white tracking-widest font-nunito text-lg mt-1 mb-5'>Customer</p>
                        </div>
                    </SwiperSlide>
                    
                    
                    
                </Swiper>
                </div>
            </section>
    </Parallax>
   
  )
}
