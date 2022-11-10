import React from 'react'
import img from '../../images/YG4RVTTXWRFWLAVHKLYVP74HN4.jpg'
export default function Reservation() {
    return (
        <section className='w-full container m-auto bg-white dark:bg-gray-900'>
            <div className=' pt-10 pb-10'>
                <div className='relative w-full md:mb-5 ' data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
                    <h1 className='text-5xl sm:text-8xl font-vibes text-[#c8a97e] text-center '>Booking</h1>
                    <span className='text-xl sm:text-5xl font-serif absolute left-1/4 -translate-y-6 translate-x-4 sm:-translate-y-10 md:left-40 lg:left-1/4 lg:translate-x-8 xl:left-1/3 xl:translate-x-1 text-black dark:text-white font-black'>Make Reservation</span>
                </div>
            </div>

            <div className='pb-10 relative flex flex-col sm:flex-row backdrop:blur-lg p-2 md:p-4 lg:p-6'>
                <div className='w-full sm:w-3/4 mb-4 shadow-lg shadow-slate-50/5'>
                    <img className='rounded-md' src={img}
                        alt=""/>
                </div>
                <div className='sm:w-1/2 p-3 sm:p-0 bg-black dark:bg-opacity-60 h-auto md:absolute lg:right-5 md:right-3 xl:right-10 md:translate-y-5 lg:translate-y-11 xl:translate-y-1/3 rounded-md drop-shadow-lg shadow-inner shadow-fuchsia-500/70 '>
                    <form className='w-full lg:w-5/6 md:p-4 lg:p-7 m-auto'>
                        <div className='flex justify-between gap-6 md:gap-4'>
                            <div className="relative z-0">
                                <input type="text" id="small_standard" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "/>
                                <label htmlFor="small_standard" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                            </div>
                            <div className="relative z-0">
                                <input type="text" id="small_standard" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "/>
                                <label htmlFor="small_standard" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone</label>
                            </div>
                        </div>
                        <div className='flex justify-between mt-7 gap-6 md:gap-4 lg:gap-1'>
                            <div className="relative z-0">
                                <input type="text" id="small_standard" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "/>
                                <label htmlFor="small_standard" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Date</label>
                            </div>
                            <div className="relative z-0">
                                <input type="text" id="small_standard" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "/>
                                <label htmlFor="small_standard" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Time</label>
                            </div>
                        </div>
                            <div className='mt-7'>
                                <div className="relative z-0">
                                    <input type="text" id="small_standard" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "/>
                                    <label htmlFor="small_standard" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                                </div>
                            </div>
                        <div className='lg:mt-10 mt-5 md:mt-6'>
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Reservation
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
