import React from 'react'
import Icons from '../../Pages/Icons'
import img1 from '../../images/img 1.jpg'
import img2 from '../../images/img 02.jpg'
import img3 from '../../images/img 03.jpg'
import img4 from '../../images/img 04.jpg'
import img5 from '../../images/img 05.jpg'
import img6 from '../../images/img 06.jpg'

export default function Gallery() {
    return (
        <>
            <div className='h-screen bg-cover bg-center bg-no-repeat bg-hero-gallery flex justify-center items-center bg-fixed scroll-smooth  '>

                <div className='flex text-white h-full w-full bg-opacity-40 bg-black relative'>
                    <div className='lg:w-1/2 m-auto items-center'>
                    <p className='uppercase text-center font-nunito leading-10 tracking-[0.2em] font-black text-[12px]'>Take a look</p>

                        <h1 className='text-center text-5xl sm:text-7xl font-playfair font-semibold' data-aos="fade-up" data-aos-duration="2000">Our Galleries</h1>

                        <p className='text-center text-lg p-7 font-nunito leading-6' data-aos="fade-up" data-aos-duration="2500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem sit molestias et cupiditate, nostrum aut sunt mollitia recusandae at cum ut omnis nesciunt magni est tempora, vitae eaque! Sint, mollitia.</p>

                        <div className='text-center ' data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-once="false">
                            <button className='btn rounded-3xl px-6 bg-orange-500 btn-md border border-none text-white text-xs'>Explore More
                            </button>
                        </div>

                        <Icons></Icons>

                    </div>
                </div>
            </div>

            <section class="overflow-hidden text-gray-700 mb-10">
                <div class="container px-5 py-2 mx-auto lg:pt-24 lg:px-28 ">
                    <div class="flex flex-wrap -m-1 md:-m-2 flex-col sm:flex-row backdrop-blur-sm bg-white/5 rounded-lg p-2 shadow-xl">
                        <div class="flex flex-wrap sm:w-1/2" data-aos="zoom-in-right" data-aos-duration='2000' >
                            <div class="w-1/2 p-1 md:p-2" >
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg" src={img1}/>
                            </div>
                            <div class="w-1/2 p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg" src={img2}/>
                            </div>
                            <div class="w-full p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg" src={img3}/>
                            </div>
                        </div>
                        <div class="flex flex-wrap sm:w-1/2" data-aos="zoom-in-left" data-aos-duration='2000'>
                            <div class="w-full p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg" src={img4}/>
                            </div>
                            <div class="w-1/2 p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg" src={img5}/>
                            </div>
                            <div class="w-1/2 p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg" src={img6}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
