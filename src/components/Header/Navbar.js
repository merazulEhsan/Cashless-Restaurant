import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import salmon from '../../images/salmon.jpg'

export default function Navbar() {

    const [theme, setTheme] = useState(localStorage.theme);
    const toggle = (theme === "dark" ? "light" : "dark");

    useEffect(() => {

        const rootEl = document.documentElement;
        rootEl.classList.remove(toggle);
        rootEl.classList.add(theme)
        localStorage.setItem('theme', theme)
    }, [theme, toggle]);


    const menu = (
        <>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/menu'>Menu</Link>
            </li>
            <li>
                <Link to='/gallery'>Gallery</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
        </>
    )
    return (
        <div className="navbar bg-white backdrop-blur-2xl dark:bg-base-100 sticky w-full top-0 z-50 font-nunito font-light container px-5 m-auto border-b-2 border-indigo-500 text-black dark:text-current">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0}
                        className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"/></svg>
                    </label>
                    <ul tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white dark:bg-gray-900 rounded-box w-52 ">
                        {menu} </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-2xl">Restaurant</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menu} </ul>
            </div>
            <div className="navbar-end">

                <div className="dropdown dropdown-end">
                    <label tabIndex={0}
                        className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={salmon}
                                alt=''/>
                        </div>
                    </label>

                    <ul tabIndex={0}
                        className="mt-3 p-2 shadow menu menu-compact dropdown-content text-sm bg-white  text-black dark:text-current dark:bg-gray-700 rounded-md w-52 font-nunito">
                        <div className="py-3 px-4 text-sm text-black dark:text-white">
                            <div>Bonnie Green</div>
                            <div className="font-medium truncate">name@flowbite.com</div>
                        </div>
                        <hr/>
                        <li>
                            <a href="/menu" className="flex items-center py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                                <svg aria-hidden="true" class="mr-2 w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                </svg>Dashboard</a>
                        </li>
                        <li>
                            <a href="/about" className="flex items-center py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                                <svg aria-hidden="true" className="mr-2 w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path>
                                </svg>Profile</a>
                        </li>
                        <li>
                            <label for="small-toggle" class="inline-flex relative items-center mb-5 cursor-pointer">
                                <input onClick={
                                        () => setTheme(toggle)
                                    }
                                    type="checkbox"
                                    value=""
                                    id="small-toggle"
                                    class="sr-only peer"/>
                                <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[10px] after:left-[18px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Small toggle</span>
                            </label>

                        </li>
                        <hr/>
                        <li className="py-1 divide-y divide-gray-100">
                            <a href="/about" className="flex items-center py-2 px-4 text-sm text-black hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                        </li>
                    </ul>

                </div>

            </div>
        </div>
    )
}
