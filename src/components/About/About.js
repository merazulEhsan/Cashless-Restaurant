import React from 'react'
import Icons from '../../Pages/Icons'
import Chefs from './Chefs'
import ChooseCard from './ChooseCard'

export default function About() {
    return (
        <>
            <div className='h-screen bg-cover bg-center bg-no-repeat bg-hero-about flex justify-center items-center bg-fixed scroll-smooth  '>

                <div className='flex text-white h-full w-full bg-opacity-40 bg-black relative'>
                    <div className='lg:w-1/2 m-auto items-center'>
                        <p className='uppercase text-center font-nunito tracking-[0.2em] font-black text-[12px] leading-10'>Our Restaurant</p>

                        <h1 className='text-center text-5xl sm:text-7xl font-playfair font-semibold' data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-sine">About Us</h1>

                        <p className='text-center text-xl p-7 font-marck leading-6' data-aos="fade-up" data-aos-duration="2500" data-aos-easing="ease-in-out">We invite you to sit back, unwind and delight in the elegant atmosphere, while our chef takes you on a culinary experience of contemporary, seasonal local cuisine with elements of rustic Italian cooking.</p>

                        <div className='text-center ' data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-once="false">
                            <button onClick={()=>window.scrollBy(0, window.innerHeight)} className='btn rounded-3xl px-6 bg-orange-500 btn-md border border-none text-white text-xs'>Explore More
                            </button>
                        </div>

                        <Icons></Icons>

                    </div>
                </div>
            </div>

            <section className='bg-white 2xl:container m-auto'>
               <ChooseCard></ChooseCard>
            </section>

            <Chefs></Chefs>
        </>
    )
}
