import React from 'react'
import Icons from '../../Pages/Icons'
import {data} from '../../Data/data';

export default function Gallery() {
    return (
        <>
            <div className='h-screen bg-cover bg-center bg-no-repeat bg-hero-gallery flex justify-center items-center bg-fixed scroll-smooth  '>

                <div className='flex text-white h-full w-full bg-opacity-40 bg-black relative'>
                    <div className='lg:w-1/2 m-auto items-center'>
                    <p className='uppercase text-center font-nunito leading-10 tracking-[0.2em] font-black text-[12px]'>Take a look</p>

                        <h1 className='text-center text-5xl sm:text-7xl font-playfair font-semibold' data-aos="fade-up" data-aos-duration="2000">Our Galleries</h1>

                        <p className='text-center text-xl p-7 font-marck leading-6' data-aos="fade-up" data-aos-duration="2500">10 years to master. Yours to savor</p>

                        <div className='text-center ' data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-once="false">
                            <button onClick={()=>window.scrollBy(0, window.innerHeight)} className='btn rounded-3xl px-6 bg-orange-500 btn-md border border-none text-white text-xs'>Explore More
                            </button>
                        </div>

                        <Icons></Icons>

                    </div>
                </div>
            </div>

            <section className="overflow-hidden text-gray-700 mb-10 bg-[#fafafa] dark:bg-gray-900">
                <div className="2xl:container px-5 py-2 mx-auto lg:pt-24 lg:px-28 ">
                    <div className="flex flex-wrap -m-1 md:-m-2 flex-col sm:flex-row backdrop-blur-sm bg-white/5 rounded-lg p-2 shadow-xl">
                        <div className="flex flex-wrap sm:w-1/2" data-aos="zoom-in-right" data-aos-duration='2000' >
                            <div className="w-1/2 p-1 md:p-2" >
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg" src={data[0].image}/>
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg" src={data[1].image}/>
                            </div>
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg" src={data[2].image}/>
                            </div>
                        </div>
                        <div className="flex flex-wrap sm:w-1/2" data-aos="zoom-in-left" data-aos-duration='2000'>
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg" src={data[3].image}/>
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg" src={data[4].image}/>
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg" src={data[5].image}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
