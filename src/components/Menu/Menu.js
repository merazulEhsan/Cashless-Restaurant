import React from 'react'
import Icons from '../../Pages/Icons'

export default function Menu() {
  return (
    <div className='h-screen bg-cover bg-center bg-no-repeat bg-hero flex justify-center items-center bg-fixed scroll-smooth  '>

            <div className='flex text-white h-full w-full bg-opacity-40 bg-black relative'>
                <div className='lg:w-1/2 m-auto items-center'>
                    <p className='uppercase text-center font-nunito font-medium tracking-wider text-sm leading-10'>Have a look</p>

                    <h1 className='text-center text-5xl sm:text-7xl font-playfair font-semibold' data-aos="fade-up" data-aos-duration="2000" >Our Main Menu</h1>

                    <p className='text-center p-7 font-nunito leading-6' data-aos="fade-up" data-aos-duration="2500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem sit molestias et cupiditate, nostrum aut sunt mollitia recusandae at cum ut omnis nesciunt magni est tempora, vitae eaque! Sint, mollitia.</p>

                    <div className='text-center 'data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-once="false">
                        <button className='btn rounded-3xl px-6 bg-orange-500 btn-md border border-none text-white text-xs'>Explore More
                        </button>
                    </div>

                    <Icons></Icons>

                </div>


            </div>
        </div>

  )
}
