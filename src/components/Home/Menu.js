import React, {useState} from 'react'
import {data} from '../../Data/data';

export default function Menu() {
    const [foods, setFoods] = useState(data);

    // Filter Type burgers/pizza/etc
    const filterType = (category) => {
        setFoods(data.filter((item) => {
            return item.category === category;
        }));
    };

    // Filter by price

    return (
        <section className='w-full container m-auto'>
            <div className='bg-white dark:bg-gray-900 pt-20 pb-10'>
                <div className='relative w-full md:mb-5 ' data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
                    <h1 className='text-5xl sm:text-8xl font-vibes text-[#c8a97e] text-center '>Menu</h1>
                    <span className='text-xl sm:text-5xl font-serif absolute left-1/4 -translate-y-6 translate-x-4 sm:-translate-y-10 md:left-40 lg:left-1/4 lg:translate-x-10 xl:left-1/3 xl:translate-x-5 text-black dark:text-white font-black'>Top Rated Menu</span>
                </div>
            </div>

            <div className='max-w-[1640px] m-auto px-4 md:py-4 bg-white dark:bg-gray-900'>


                {/* Filter Row */}
                <div className='flex justify-center lg:mb-5'>
                    {/* Fliter Type */}
                    <div>
                        <div className='flex justify-center flex-wrap mb-5 font-nunito'>
                            <button onClick={
                                    () => setFoods(data)
                                }
                                class="relative inline-flex items-center justify-center p-0.5 mb-1 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                                <span class="relative px-5 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    All
                                </span>
                            </button>
                            <button onClick={
                                    () => filterType('burger')
                                }
                                class="relative inline-flex items-center justify-center p-0.5 mb-1 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                                <span class="relative px-5 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Burgers
                                </span>
                            </button>
                            <button onClick={
                                    () => filterType('pizza')
                                }
                                class="relative inline-flex items-center justify-center p-0.5 mb-1 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                                <span class="relative px-5 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Pizza
                                </span>
                            </button>
                            <button onClick={
                                    () => filterType('salad')
                                }
                                class="relative inline-flex items-center justify-center p-0.5 mb-1 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                                <span class="relative px-5 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Salads
                                </span>
                            </button>
                            <button onClick={
                                    () => filterType('chicken')
                                }
                                class="relative inline-flex items-center justify-center p-0.5 mb-1 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                                <span class="relative px-5 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Chicken
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Filter Price */} </div>

                {/* Display foods */}
                <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 pt-4 mb-14'>
                    {
                    foods.map((item, index) => (
                        <div key={index}
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-once="true">
                            <div className='border shadow-md dark:hover:shadow-blue-600 rounded-lg hover:scale-105 duration-1000 cursor-pointer hover:border-none'>
                                <img src={
                                        item.image
                                    }
                                    alt={
                                        item.name
                                    }
                                    className='w-full h-[200px] object-cover rounded-t-lg'/>
                                <div className='flex justify-between px-2 py-4'>
                                    <p className='font-bold text-gray-800 dark:text-gray-300 font-playfair tracking-wide'>
                                        {
                                        item.name
                                    }</p>
                                    <p>
                                        <span className='bg-orange-500 text-white p-1 rounded-full'>
                                            {
                                            item.price
                                        } </span>
                                    </p>
                                </div>
                                <div className='text-center p-2'>
                                    <button class="relative inline-flex items-center justify-center p-0.5 mb-1 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                                        <span class="relative px-5 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                            Order Now
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )).slice(0, 8)
                } </div>
            </div>
        </section>
    )
}
