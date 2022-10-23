import React from 'react'
import headChef from '../../images/head chef.jpg'
import masterChef from '../../images/chef_1.jpg.webp';
import cook from '../../images/chef_2.jpg.webp';
import ChefIcon from '../About/ChefIcon';

export default function Chefs() {
    return (
        <section className='w-full mt-16 sm:p-5 container m-auto'>
            <div className='relative w-full'>
                <h1 className='text-5xl sm:text-8xl font-vibes text-[#c8a97e] text-center'>Chef</h1>
                <span className='text-xl sm:text-4xl font-nunito absolute left-1/4 -translate-y-6 sm:-translate-y-10 md:left-48 lg:left-1/3 xl:left-1/3 xl:translate-x-14 text-zinc-300 font-black'>Our Professional Chef</span>
            </div>

            <div className='mt-20 mb-20 m-auto' data-aos="fade-up" data-aos-duration="3000">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20  justify-items-center max-w-screen-2xl'>
                    <div className='group bg-white/5 backdrop:blur-sm w-60 p-5 rounded-md h-80 sm:h-64 sm:hover:h-80 transition-all duration-500 ease-linear shadow-inner shadow-blue-500/70 '>
                        <div className='relative z-10'>
                            <img className='absolute -translate-y-16 shadow-md shadow-white/10 rounded-md'
                                src={masterChef}
                                alt=""/>
                        </div>
                        <div className='w-48 absolute translate-y-44 sm:-translate-y-0 sm:group-hover:translate-y-44 opacity-100 group-hover:opacity-100  transition duration-500 ease-linear text-white text-center'>
                            <h1 className='font-playfair text-xl group-hover:text-blue-500'>James Anderson</h1>
                            <p className='font-nunito text-sm'>Master Chef</p>
                            <ChefIcon></ChefIcon>
                        </div>

                    </div>

                    <div className='group bg-white/5 backdrop:blur-sm w-60 p-5 rounded-md h-80 sm:h-64 sm:hover:h-80 transition-all duration-500 ease-linear shadow-inner shadow-pink-500/70 '>
                        <div className='relative z-10'>
                            <img className='absolute -translate-y-16 shadow-md shadow-white/10 rounded-md'
                                src={headChef}
                                alt=""/>
                        </div>
                        <div className='w-48 absolute translate-y-44 sm:-translate-y-0 sm:group-hover:translate-y-44 opacity-100 group-hover:opacity-100  transition duration-500 ease-linear text-white text-center'>
                            <h1 className='font-playfair text-xl group-hover:text-pink-500'>Mellissa White</h1>
                            <p className='font-nunito text-sm'>Chef</p>
                            <ChefIcon></ChefIcon>
                        </div>

                    </div>

                    <div className='group bg-white/5 backdrop:blur-sm w-60 p-5 rounded-md h-80 sm:h-64 sm:hover:h-80 transition-all duration-500 ease-linear shadow-inner shadow-green-400/70 '>
                        <div className='relative z-10'>
                            <img className='absolute -translate-y-16 shadow-md shadow-white/10 rounded-md'
                                src={cook}
                                alt=""/>
                        </div>
                        <div className='w-48 absolute translate-y-44 sm:-translate-y-0 sm:group-hover:translate-y-44 opacity-100 group-hover:opacity-100  transition duration-500 ease-linear text-white text-center'>
                            <h1 className='font-playfair text-xl group-hover:text-green-400'>Craig Gold</h1>
                            <p className='font-nunito text-sm'>Cook</p>
                            <ChefIcon></ChefIcon>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}
