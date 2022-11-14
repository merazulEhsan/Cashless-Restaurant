import React from 'react'
import {Link} from 'react-router-dom'
import salmon from '../../images/salmon.jpg'

export default function Footer() {
    return (
        <>
            <footer className="p-4  sm:p-6  border-t-2 border-gray-700 2xl:container m-auto bg-[#161623]">
                <div className="md:flex md:justify-between ">
                    <div className="mb-6 md:mb-0">
                        <div className="flex items-center">
                            <img src={salmon}
                                className="mr-3 h-8"
                                alt="FlowBite Logo"/>
                            <div>
                            <Link to='/' className="btn btn-ghost normal-case">
                                <div className='relative'>
                                    <span className='text-4xl tracking-widest font-vibes text-[#c8a97e] relative'>Cashless</span>
                                    <span className='tracking-widest font-nunito text-white absolute top-1/2 left-1/4 lg:left-7 text-base font-black inline-block'>Restaurant</span>
                                </div>
                            </Link>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 font-nunito">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-white">Contact</h2>
                            <ul className="text-gray-400 hover:text-white">
                                <li className="mb-4">
                                    <a href="https://flowbite.com/" className="hover:underline">+880 01700000000</a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" className="hover:underline">cl.restaurant@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold  uppercase text-white">Follow us</h2>
                            <ul className="text-gray-400 hover:text-white">
                                <li className="mb-4">
                                    <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Facebook</a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Twitter</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold  uppercase text-white">Legal</h2>
                            <ul className="text-gray-400 hover:text-white">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                <div className="sm:flex sm:items-center sm:justify-center font-nunito">
                    <span className="text-sm text-gray-400 sm:text-center dark:text-gray-400">© 2022
                        <a href="/" className="hover:underline">
                            Cashless Restaurant</a>. All Rights Reserved.
                    </span>

                </div>


            </footer>
        </>

    )
}
