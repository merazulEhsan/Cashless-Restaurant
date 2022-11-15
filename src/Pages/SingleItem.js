import React, {useState} from 'react'
import {useQuery} from 'react-query';
import {useParams} from 'react-router-dom'

import {Autoplay, Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import useItems from '../components/Hooks/useItems';
import Loading from '../components/Loading/Loading';
import RelatedItems from './RelatedItems';
import '../CSS/related.css'
import "swiper/css";
import "swiper/css/pagination";

export default function SingleItem() {
        const {id} = useParams();
        const [count, setCount] = useState(1);
        const [items] = useItems();

        const {data: singleitem, isLoading, refetch} = useQuery("singleitem", () => fetch(`http://localhost:4000/items/${id}`).then((res) => res.json()));

        if (isLoading) {
            return <Loading></Loading>
        }

        const category = singleitem.category;


        return (<>
            <section className='bg-white dark:bg-gray-900 w-full h-auto 2xl:container m-auto'>
                <div className='flex justify-center flex-col lg:flex-row p-10 lg:gap-10 gap-y-10'>
                    <div className='lg:w-1/3'>
                        <img className='w-96 md:h-96   rounded-sm shadow-2xl'
                            src={
                                singleitem.image
                            }
                            alt=""/>
                    </div>
                    <div className='lg:w-1/3'>
                        <h1 className='text-3xl dark:text-white font-playfair bg-clip-text text-transparent bg-gradient-to-b from-blue-700  to-pink-500 font-black tracking-wider mb-2'>
                            {
                            singleitem.name
                        }</h1>
                        <div className="rating rating-sm mb-2">
                            <input name="rating-6" className="mask mask-star-2 bg-orange-500"/>
                            <input name="rating-6" className="mask mask-star-2 bg-orange-500"/>
                            <input name="rating-6" className="mask mask-star-2 bg-orange-500"/>
                            <input name="rating-6" className="mask mask-star-2 bg-orange-500"/>
                            <input name="rating-6" className="mask mask-star-2 bg-orange-500" checked/>
                        </div>
                        <p className='text-lg text-black dark:text-gray-300'>
                            {
                            singleitem.description
                        }</p>
                        <p className='text-orange-500 font-semibold text-lg mt-4'>Price: {
                            singleitem.price
                        }</p>

                        <p className='text-md dark:text-white text-black mt-5 gap-2 items-center flex'>Quantity:
                            <span onClick={
                                    () => setCount(count - 1)
                                }
                                className='btn btn-xs btn-success text-sm'>-</span>
                            <span><input className='w-10 input-sm rounded dark:text-black'
                                    value={count}
                                    type="text"/></span>
                            <span onClick={
                                    () => setCount(count + 1)
                                }
                                className='btn btn-xs btn-success text-sm'>+</span>
                        </p>
                        <div className='mt-5'>
                            <span className='mr-3 dark:text-white text-black text-md'>Table No:
                            </span>
                            <select className="select select-bordered border-black select-sm w-16 p-0 pl-4 max-w-xs bg-white text-black">
                                <option disabled selected>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>

                        <button className='btn btn-outline btn-primary mt-5 px-6'>Order</button>
                    </div>
                </div>

                <div></div>

                <div className='py-20'>
                <h1 className='text-2xl font-serif p-10 underline text-black dark:text-current'>Related Items</h1>
                    <Swiper slidesPerView={1}
                        spaceBetween={20}
                        pagination={{clickable: true}}
                        modules={[Pagination,Autoplay, Navigation]}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false
                          }}
                        breakpoints={{
                        640: {
                            slidesPerView: 2,
                          
                        },
                        1024: {
                            slidesPerView: 4,
                            
                        },
                        }}
                        navigation={true}
                        className="mySwiper">
                        {
                        items.filter((item) => item.category === category).map(item => {
                                    return(< SwiperSlide key = {
                                        item._id
                                    } > <RelatedItems key={
                                            item._id
                                        }
                                        item={item}
                                        refetch={refetch}></RelatedItems>
                                </SwiperSlide>
                                )
                            }
                        )
                    } </Swiper>
                    {} </div>

            </section>
        </>
    )
}
