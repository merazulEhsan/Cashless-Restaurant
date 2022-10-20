import React from 'react'

export default function Home() {
    return (
        <div className='h-screen bg-cover  bg-center bg-no-repeat bg-hero flex justify-center items-center bg-fixed opacity-80 scroll-smooth'>
            <div className='m-auto text-white md:w-2/3'>
                <p className='uppercase text-center '>Enjoy your healthy delicious food</p>
                <h1 className='text-center text-6xl md:text-7xl font-serif'>Treat Yourself</h1>
                <p className='text-center p-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem sit molestias et cupiditate, nostrum aut sunt mollitia recusandae at cum ut omnis nesciunt magni est tempora, vitae eaque! Sint, mollitia.</p>
                
                <div className='text-center '>
                <button className='btn btn-accent text-white text-sm'>Explore More</button>
                </div>

            </div>
        </div>

    )
}
