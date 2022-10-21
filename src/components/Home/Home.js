import React from 'react'

export default function Home() {
    return (
        <div className='h-screen bg-cover bg-center bg-no-repeat bg-hero flex justify-center items-center bg-fixed scroll-smooth  '>

            <div className='flex text-white h-full bg-opacity-40 bg-black'>
                <div className='w-1/2 m-auto items-center'>
                    <p className='uppercase text-center font-nunito font-medium tracking-wider text-sm leading-10'>Enjoy your healthy delicious food</p>
                    <h1 className='text-center text-6xl md:text-7xl font-playfair font-semibold'>Treat Yourself</h1>
                    <p className='text-center p-7 font-nunito leading-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem sit molestias et cupiditate, nostrum aut sunt mollitia recusandae at cum ut omnis nesciunt magni est tempora, vitae eaque! Sint, mollitia.</p>

                    <div className='text-center '>
                        <button className='btn bg-orange-500 btn-md border border-none text-white text-xs'>Explore More</button>
                    </div>
                </div>

            </div>
        </div>

    )
}
