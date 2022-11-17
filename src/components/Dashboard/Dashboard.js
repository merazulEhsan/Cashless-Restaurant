import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom'
import auth from '../../firebase.init';
import useChef from '../Hooks/useChef'

export default function Dashboard() {
    const [user] = useAuthState(auth)
    const [chef] = useChef(user);
    return (
        <>

            <section className='bg-white dark:bg-gray-900 h-auto 2xl:container m-auto'>
            <div className="drawer drawer-overlay flex justify-between p-4 md:flex-row flex-col h-auto">
                <input id="my-drawer" type="checkbox" className="drawer-toggle"/>
                <div className="drawer order-1 dark:bg-gray-900 dark:text-current text-black card rounded-lg md:ml-6 h-auto">
                    {/* <!-- Page content here --> */}
                    <div className='drawer-content overflow-x-auto'>
                    <Outlet></Outlet>
                    </div>
                    {/* <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label> */}
                </div>
                <div className="drawer-side">
                    {/* <label htmlFor="my-drawer" className="drawer-content"></label> */}
                    <ul className="menu p-4 w-64 bg-white dark:bg-gray-800 dark:text-current text-black card shadow-lg rounded-lg border-gray-200 dark:border-current">
                        {/* <!-- Sidebar content here --> */}
                        <li>
                            <Link to='/dashboard'>My Orders</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/notifications">Notifications</Link>
                        </li>
                        <li>
                            {chef && <Link to="/dashboard/user">All Users</Link>}
                        </li>
                        <li>
                            {chef && <Link to="/dashboard/additem">Add Item</Link>}
                        </li>
                        <li>
                            {chef && <Link to="/dashboard/manageitems">Manage Items</Link>}
                        </li>
                        <li>
                            {chef && <Link to="/dashboard/allorders">All Orders</Link>}
                        </li>

                    </ul>
                </div>
            </div>
            </section>

        </>
    )
}
