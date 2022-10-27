import React from 'react'

import Icons from '../../Pages/Icons'
import ContactForm from './ContactForm'

export default function Contact() {
    return (
        <>
            <div className='h-screen bg-cover bg-center bg-no-repeat bg-hero-contact flex justify-center items-center bg-fixed scroll-smooth  '>

                <div className='flex text-white h-full w-full bg-opacity-40 bg-black relative'>
                    <div className='lg:w-1/2 m-auto items-center'>
                        <p className='uppercase text-center font-nunito tracking-[0.2em] font-black text-[12px] leading-10'>Get in Touch</p>

                        <h1 className='text-center text-5xl sm:text-7xl font-playfair font-semibold' data-aos="fade-up" data-aos-duration="2000">Contact Us</h1>

                        <p className='text-center text-lg p-7 font-nunito leading-6' data-aos="fade-up" data-aos-duration="2500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem sit molestias et cupiditate, nostrum aut sunt mollitia recusandae at cum ut omnis nesciunt magni est tempora, vitae eaque! Sint, mollitia.</p>

                        <div className='text-center ' data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-once="false">
                            <a href='#contacts' className='btn rounded-3xl px-6 bg-orange-500 btn-md border border-none text-white text-xs'>Explore More</a>
                        </div>

                        <Icons></Icons>

                    </div>


                </div>
            </div>

            <section id='contacts' class="bg-gray-900 text-gray-100 px-8 py-12" data-aos="zoom-in" data-aos-duration="2000" data-aos-once="true">
                <div class="text-center w-full mt-10">
                    <h1 className='text-5xl sm:text-8xl font-vibes text-[#c8a97e] text-center'>Contact Us</h1>
                </div>

                <div className='container m-auto grid gap-y-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 justify-items-center mt-10 '>
                    <div className='bg-white/5 backdrop-blur-sm w-60 h-40 p-2 text-center flex items-center   flex-col rounded-md border-l-2 border-red-600 hover:bg-white group transition-all hover:ease-in-out hover:duration-700 hover:drop-shadow-md'>
                        <span className=''>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mt-6 p-2 bg-orange-500 btn-circle h-8 w-8">
                                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                            </svg>
                        </span>
                        <p className='mt-4 font-nunito font-medium group-hover:text-orange-500'>Dhanmondi 27, Mirpur Road, Dhaka-1203</p>

                    </div>
                    <div className='bg-white/5 backdrop-blur-sm w-60 h-40 p-2 text-center flex items-center   flex-col rounded-md border-t-2 border-blue-600 hover:bg-white group transition-all hover:ease-in-out hover:duration-700 hover:drop-shadow-md'>
                        <span className=''>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 mt-6 p-2 bg-orange-500 btn-circle h-8 w-8">
                                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
                                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
                            </svg>
                        </span>
                        <p className='mt-4 font-nunito font-medium group-hover:text-orange-500'>info@clrestaurant.com</p>

                    </div>
                    <div className='bg-white/5 backdrop-blur-sm w-60 h-40 p-2 text-center flex items-center   flex-col rounded-md border-b-2 border-purple-600 hover:bg-white group transition-all hover:ease-in-out hover:duration-700 hover:drop-shadow-md'>
                        <span className=''>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 mt-6 p-2 bg-orange-500 btn-circle h-8 w-8">
                                <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd"/>
                            </svg>

                        </span>
                        <p className='mt-4 font-nunito font-medium group-hover:text-orange-500'>+880 1700-000000</p>

                    </div>
                    <div className='bg-white/5 backdrop-blur-sm w-60 h-40 p-2 text-center flex items-center   flex-col rounded-md border-r-2 border-pink-600 hover:bg-white group transition-all hover:ease-in-out hover:duration-700 hover:drop-shadow-md'>
                        <span className=''>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 mt-6 p-2 bg-orange-500 btn-circle h-8 w-8">
                                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clip-rule="evenodd"/>
                            </svg>

                        </span>
                        <p className='mt-4 font-nunito font-medium group-hover:text-orange-500'>Sataurday-Friday
                            <br/>
                            9AM-11PM</p>

                    </div>
                </div>
            </section>
            <ContactForm></ContactForm>

        </>

    )
}
