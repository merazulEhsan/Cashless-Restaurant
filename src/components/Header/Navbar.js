import { signOut } from 'firebase/auth';
import {useEffect, useState} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {Link} from 'react-router-dom'
import auth from '../../firebase.init';
import salmon from '../../images/salmon.jpg'

export default function Navbar() {
    const [user] = useAuthState(auth);
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
        <div className="navbar bg-[#f6f7fb] dark:bg-base-100 sticky w-full top-0 z-50 font-nunito font-light container px-5 m-auto border-b-2 border-[#6c839b] dark:border-orange-500 text-black dark:text-current shadow-xl">
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
                <div>
                    <Link to='/' className="btn btn-ghost normal-case">
                        <div className='flex flex-col'>
                            <span className='text-4xl tracking-widest font-vibes text-[#c8a97e] relative'>Cashless</span>
                            <span className='tracking-widest font-nunito text-[#6c839b] dark:text-white absolute top-1/2 left-[120px] lg:left-16 text-base font-black inline-block'>Restaurant</span>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 font-medium tracking-wider">
                    {menu} </ul>
            </div>
            <div className="navbar-end">

               {user ?  (<div className="dropdown dropdown-end">
                    <label tabIndex={0}
                        className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={user?.photoURL}
                                alt=''/>
                        </div>
                    </label>

                    <ul tabIndex={0}
                        className="mt-2 p-2 shadow menu menu-compact dropdown-content text-sm bg-white  text-black dark:text-current dark:bg-gray-700 rounded-md w-56 font-nunito">
                        <div className="py-3 px-4 text-sm text-black dark:text-white">
                            <div>{user?.displayName}</div>
                            <div className="font-medium truncate">{user?.email}</div>
                        </div>
                        <hr/>
                        <li>
                            <a href="/menu" className="flex items-center py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                                <svg aria-hidden="true" className="mr-2 w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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
                            <label className="swap swap-rotate w-full justify-start hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">


                                <input onClick={
                                        () => setTheme(toggle)
                                    }
                                    className='hidden group'
                                    type="checkbox"/>

                                <svg className="swap-on fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>

                                <svg className="swap-off fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>

                                <span className='ml-9 '>Theme</span>
                            </label>

                        </li>
                        <hr/>
                        <li className="py-1 divide-y divide-gray-100">
                            <button onClick={()=>signOut(auth)} className="flex items-center py-2 px-4 text-sm hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">Sign Out</button>
                        </li>
                    </ul>

                </div>):(<Link to="/signup" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-0">SignUp</Link>)
                }

            </div>
        </div>
    )
}
