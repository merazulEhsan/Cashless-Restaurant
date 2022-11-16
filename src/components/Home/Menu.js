import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import useItems from '../Hooks/useItems';


export default function Menu() {
    const [items] = useItems();
    const [foods, setFoods] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setFoods(items)
    }, [items])

    // Filter Type burgers/pizza/etc
    const filterType = (category) => {
        const food = items.filter((item) => item.category === category)
        setFoods(food)
    };

    const orderNow =(id)=>{
        navigate(`/singleitem/${id}`)
        document.documentElement.scrollTop = 0;
    }

    return (
        <section className='w-full 2xl:container m-auto relative'>
            <div className='bg-white dark:bg-gray-900 pt-20 pb-10 '>
                <div className='relative w-full md:mb-5 z-30' data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
                    <h1 className='text-5xl sm:text-8xl font-vibes text-[#c8a97e] text-center '>Menu</h1>
                    <span className='text-xl sm:text-5xl font-serif absolute left-1/4 -translate-y-6 translate-x-4 sm:-translate-y-10 md:left-40 lg:left-1/4 lg:translate-x-10 xl:left-1/3 xl:translate-x-5 text-black dark:text-white font-black'>Top Rated Menu</span>
                </div>
            </div>

            <div className='max-w-[1640px] m-auto px-4 md:py-4 bg-white dark:bg-gray-900'>


                {/* Filter Row */}
                <div className='flex justify-center pt-10 justify-items-center lg:mb-5'>
                    {/* Fliter Type */}
                    <div>
                        <div className='flex justify-center flex-wrap mb-5 font-nunito'>
                            <button onClick={
                                    () => setFoods(items)
                                }
                                className="relative inline-flex items-center justify-center p-0.5 mb-1 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                                <span className="relative px-5 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    All
                                </span>
                            </button>
                            <button onClick={
                                    () => filterType('burger')
                                }
                                className="relative inline-flex items-center justify-center p-0.5 mb-1 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                                <span className="relative px-5 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Burgers
                                </span>
                            </button>
                            <button onClick={
                                    () => filterType('pizza')
                                }
                                className="relative inline-flex items-center justify-center p-0.5 mb-1 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                                <span className="relative px-5 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Pizza
                                </span>
                            </button>
                            <button onClick={
                                    () => filterType('salad')
                                }
                                className="relative inline-flex items-center justify-center p-0.5 mb-1 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                                <span className="relative px-5 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Salads
                                </span>
                            </button>
                            <button onClick={
                                    () => filterType('chicken')
                                }
                                className="relative inline-flex items-center justify-center p-0.5 mb-1 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                                <span className="relative px-5 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Chicken
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Filter Price */} </div>

                {/* Display foods */}
                <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 pt-4 pb-16'>
                    {
                    foods.map((item) => (
                        <div key={item._id}
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-once="true">
                            <div className='border shadow-md dark:hover:shadow-blue-600 rounded-lg hover:scale-105 duration-1000 cursor-pointer hover:border-blue-600'>
                                <img src={
                                        item.image
                                    }
                                    alt={
                                        item.name
                                    }
                                    className='w-full h-[200px] object-cover rounded-t-lg'/>
                                <div className='flex justify-between px-2 py-2 items-center'>
                                    <p className='font-bold text-gray-800 dark:text-gray-300 font-playfair tracking-wide'>
                                        {
                                        item.name
                                    }</p>

                                    <button onClick={()=>orderNow(item._id)} className="relative inline-flex items-center justify-center p-0.5 mr-1 overflow-hidden text-xs font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                                        <span className="relative px-2 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                            Order Now
                                        </span>
                                    </button>

                                </div>
                                <div className='px-2 mb-3'>
                                    <p>
                                        <span className='bg-orange-500 text-white px-3 py-1 rounded-full'>
                                            {
                                            item.price
                                        } </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )).slice(0, 8)
                } </div>
            </div>

            <span>
                <span className='absolute left-0 -top-5 w-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#f6f7fb" fillOpacity="1" d="M0,160L40,170.7C80,181,160,203,240,208C320,213,400,203,480,186.7C560,171,640,149,720,133.3C800,117,880,107,960,122.7C1040,139,1120,181,1200,202.7C1280,224,1360,224,1400,224L1440,224L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
                    </svg>
                </span>
            </span>
        </section>
    )
}
