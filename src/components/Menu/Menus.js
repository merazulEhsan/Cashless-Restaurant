import React, {useState} from 'react'
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Icons from '../../Pages/Icons'


export default function Menus() {
    const [items, setItems] = useState([]);
    const [foods, setFoods] = useState([]);
    const navigate = useNavigate();

    const [pageCount, setPageCount] = useState(0)
    const [page, setPage] = useState(0)
    const [size, setSize] = useState(12);

    useEffect(() => {
        fetch(`http://localhost:4000/items?page=${page}&size=${size}`).then(res => res.json()).then(data => setItems(data))
    }, [page, size])

    useEffect(() => {
        fetch("http://localhost:4000/itemsCount").then(res => res.json()).then(data => {
            const count = data.count;
            const page = Math.ceil(count / size)
            setPageCount(page);
        })
    }, [size])

    useEffect(() => {
        setFoods(items)
    }, [items])


    // Filter Type burgers/pizza/etc
    const filterType = (category) => {
        const food = items?.filter((item) => item.category === category)
        setFoods(food)
    };

    const orderNow = (id) => {
        navigate(`/singleitem/${id}`)
        document.documentElement.scrollTop = 0;
    }


    return (
        <>
            <div className='h-screen bg-cover bg-center bg-no-repeat bg-hero flex justify-center items-center bg-fixed scroll-smooth  '>

                <div className='flex text-white h-full w-full bg-opacity-40 bg-black relative'>
                    <div className='lg:w-1/2 m-auto items-center'>
                        <p className='uppercase text-center font-nunito tracking-[0.2em] font-black text-[12px] leading-10'>Have a look</p>

                        <h1 className='text-center text-5xl sm:text-7xl font-playfair font-semibold' data-aos="fade-up" data-aos-duration="2000">Our Main Menu</h1>

                        <p className='text-center text-lg p-7 font-nunito leading-6' data-aos="fade-up" data-aos-duration="2500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem sit molestias et cupiditate, nostrum aut sunt mollitia recusandae at cum ut omnis nesciunt magni est tempora, vitae eaque! Sint, mollitia.</p>

                        <div className='text-center ' data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-once="false">
                            <button onClick={()=>window.scrollBy(0, window.innerHeight)} className='btn rounded-3xl px-6 bg-orange-500 btn-md border border-none text-white text-xs'>Explore More
                            </button>
                        </div>

                        <Icons></Icons>

                    </div>


                </div>
            </div>

            <section className='w-full 2xl:container m-auto'>
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
                    <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 pt-4 pb-14'>
                        {
                        foods?.map((item) => (
                            <div key={
                                    item._id
                                }
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

                                        <button onClick={
                                                () => orderNow(item._id)
                                            }
                                            className="relative inline-flex items-center justify-center p-0.5 mr-1 overflow-hidden text-xs font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                                            <span className="relative px-2 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                                Order Now
                                            </span>
                                        </button>

                                    </div>
                                    <div className='px-2 mb-3'>
                                        <p>
                                            <span className='bg-orange-500 text-white px-4 py-1 rounded-full'>
                                            ৳ {
                                                item.price
                                            } </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    } </div>
                </div>
            </section>


            <div>

                <nav aria-label="Page navigation example" className='text-center pb-10 bg-white dark:bg-gray-900'>
                    <ul className="inline-flex -space-x-px">
                        <li>
                            <button onClick={
                                    () => setPage(page > pageCount && page - 1)
                                }
                                disabled={
                                    page === 0
                                }
                                className="py-3 px-4 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:disabled:bg-gray-700 disabled:bg-gray-200">Previous</button>
                        </li>

                        {
                        [...Array(pageCount).keys()].map((number) => (
                            <li key={number}>
                                <button onClick={
                                        () => setPage(number)
                                    }
                                    className={
                                        `py-3 px-3 leading-tight text-gray-500  border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                                            page === number ? 'bg-orange-500 text-white dark:bg-gray-600' : 'bg-white'
                                        } `
                                }>
                                    {
                                    number + 1
                                }</button>
                            </li>
                        ))
                    }

                        <li>
                            <button onClick={
                                    () => setPage(page < pageCount - 1 && page + 1)
                                }
                                disabled={
                                    page === pageCount - 1
                                }
                                className={`py-3 px-4 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:disabled:bg-gray-700 disabled:bg-gray-200`}>Next</button>
                        </li>
                    </ul>
                </nav>

            </div>

        </>
    )
}
