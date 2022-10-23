import React from 'react'
import Icons from '../../Pages/Icons'
import headChef from '../../images/head chef.jpg'
export default function About() {
    return (
        <>
            <div className='h-screen bg-cover bg-center bg-no-repeat bg-hero flex justify-center items-center bg-fixed scroll-smooth  '>

                <div className='flex text-white h-full w-full bg-opacity-40 bg-black relative'>
                    <div className='lg:w-1/2 m-auto items-center'>
                        <p className='uppercase text-center font-nunito tracking-[0.2em] font-black text-[12px] leading-10'>Our Restaurant</p>

                        <h1 className='text-center text-5xl sm:text-7xl font-playfair font-semibold' data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-sine">About Us</h1>

                        <p className='text-center text-lg p-7 font-nunito leading-6' data-aos="fade-up" data-aos-duration="2500" data-aos-easing="ease-in-out">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem sit molestias et cupiditate, nostrum aut sunt mollitia recusandae at cum ut omnis nesciunt magni est tempora, vitae eaque! Sint, mollitia.</p>

                        <div className='text-center ' data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-once="false">
                            <button className='btn rounded-3xl px-6 bg-orange-500 btn-md border border-none text-white text-xs'>Explore More
                            </button>
                        </div>

                        <Icons></Icons>

                    </div>
                </div>
            </div>

            <section className='h-screen w-full mt-16 sm:p-5'>
                <div className=' relative'>
                    <h1 className='sm:text-8xl font-vibes text-[#c8a97e] text-center'>Chef</h1>
                    <h1 className='sm:text-4xl font-nunito absolute translate-x-1/2 left-1/4 -translate-y-full text-gray-300 font-black'>Our Professional Chef</h1>
                </div>

                <div className=' w-full mt-20 p-10 sm:p-20 '>
                    <div className='group bg-white/5 backdrop:blur-sm w-60 p-5 rounded-md h-72 sm:h-60 sm:hover:h-72 transition-all duration-500 ease-linear shadow-inner shadow-blue-500/50'>
                        <div className='relative z-10'>
                            <img className='absolute -translate-y-16 shadow-md shadow-white/10 rounded-md' src={headChef}
                                alt=""/>
                        </div>
                        <div className='absolute translate-y-48 sm:-translate-y-0 sm:group-hover:translate-y-48 opacity-100 group-hover:opacity-100  transition duration-500 ease-linear text-white'>
                            <h1>Rebeca Welson</h1>
                            <p>Head Chef</p>
                        </div>
                            
                    </div>
                </div>
            </section>
        </>
    )
}
