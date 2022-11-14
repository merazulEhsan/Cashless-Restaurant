import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Dashboard() {
    return (
        <>

            <section className='bg-white dark:bg-gray-900'>
            <div className="drawer flex justify-between p-6">
                <input id="my-drawer" type="checkbox" className="drawer-toggle"/>
                <div className="drawer order-1 dark:bg-gray-900 dark:text-current text-black card rounded-lg ml-10">
                    {/* <!-- Page content here --> */}
                    <div className='p-5'>
                    <Outlet></Outlet>
                    </div>
                    {/* <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label> */}
                </div>
                <div className="drawer-side">
                    {/* <label htmlFor="my-drawer" className="drawer-content"></label> */}
                    <ul className="menu p-4 w-64 bg-white dark:bg-gray-900 dark:text-current text-black card-bordered rounded-lg border-gray-200 dark:border-current">
                        {/* <!-- Sidebar content here --> */}
                        <li>
                            <Link to='/dashboard'>My Orders</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/notifications">Notifications</Link>
                        </li>

                    </ul>
                </div>
            </div>
            </section>

        </>
    )
}
