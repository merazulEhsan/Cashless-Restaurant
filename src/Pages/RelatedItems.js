import React from 'react'
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';


export default function RelatedItems({item, refetch}) {

    const navigate = useNavigate();

    useEffect(() => {
        refetch();
    });

    const orderNow = (id) => {
        navigate(`/singleitem/${id}`)
        document.documentElement.scrollTop = 0; 
    }

    return (
        <>
            <div className='text-center p-5 card shadow-lg mb-5 dark:backdrop-blur-sm dark:bg-white/5 bg-opacity-30'>
                <div className=''>
                    <div className='h-60 w-60 after:'>
                        <img className='rounded-md shadow-md'
                            src={
                                item.image
                            }
                            alt=""/>
                    </div>
                </div>
                <p className='text-black dark:text-white font-nunito font-black mt-5 '>
                    {
                    item.name
                }</p>
                <h1 className='mt-1 text-red-600 font-playfair font-extrabold text-xl'>
                    {
                    item.price
                }</h1>
                <div className='mt-2'>
                    <button onClick={
                            () => orderNow(item._id)
                        }
                        className="relative inline-flex items-center justify-center p-0.5 mr-1 overflow-hidden text-xs font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                        <span className="relative px-2 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Order Now
                        </span>
                    </button>
                </div>
            </div>

        </>
    )
}
