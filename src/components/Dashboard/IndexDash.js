import React from 'react'
import {useQuery} from 'react-query';
import Loading from '../Loading/Loading';
import User from '../../components/Dashboard/User'

export default function IndexDash() {

    const {isLoading, data: users} = useQuery("user", () => fetch("http://localhost:4000/user").then((res) => res.json()));
    const {isLoading2, data: orders} = useQuery("allorders", () => fetch("http://localhost:4000/allorders").then((res) => res.json()));

    const recentOrders = orders?.filter(order => order.date === new Date().toDateString())

    const revenue = orders ?. reduce(function (pre, cur) {
        return pre + parseInt(cur.pPrice)
    }, 0)

    if (isLoading || isLoading2) {
        return <Loading></Loading>;
    }
    
    
   
    return (
        <div>
            <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Dashboard
                </h3>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 pb-16 text-white'>
                <div className='card shadow-md bg-fuchsia-500 h-28 dark:shadow-white/25 p-4 text-lg font-nunito font-bold grid grid-cols-2 gap-20 '>
                    <div>
                        <h1>Users</h1>
                        <div className='mt-5 flex items-center '>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6 mr-3">
                                <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd"/>
                                <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z"/>
                            </svg>
                            <span>{
                                users ?. length
                            }</span>
                        </div>
                    </div>
                    <span>
                        <div className="radial-progress "
                            style={
                                {
                                    "--value": 70,
                                    "--size": "4rem"
                                }
                        }>70%</div>
                    </span>
                </div>
                <div className='card shadow-md h-28 dark:shadow-white/25 p-4 text-lg font-nunito font-bold grid grid-cols-2 gap-20 bg-rose-400'>

                    <div>
                        <h1>Orders</h1>
                        <div className='mt-5 flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24 " fill="currentColor" className="w-6 h-6 mr-3">
                                <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clipRule="evenodd"/>
                            </svg>
                            <span>{
                                orders ?. length
                            }</span>
                        </div>
                    </div>
                    <span>
                        <div className="radial-progress "
                            style={
                                {
                                    "--value": 70,
                                    "--size": "4rem"
                                }
                        }>70%</div>
                    </span>
                </div>
                <div className='card shadow-md h-28 dark:shadow-white/25 p-4 text-lg font-nunito font-bold grid grid-cols-2 gap-20 bg-yellow-300'>
                    <div>
                        <h1>Revenue</h1>
                        <div className='mt-5 flex items-center'>
                            <span className='mr-2'>TK.</span>
                            <span>{revenue}</span>
                        </div>
                    </div>
                    <span>
                        <div className="radial-progress"
                            style={
                                {
                                    "--value": 70,
                                    "--size": "4rem"
                                }
                        }>70%</div>
                    </span>
                </div>

                <div className='card shadow-md h-28 dark:shadow-white/25 p-4 text-lg font-nunito font-bold grid grid-cols-2 gap-20 bg-blue-500'>
                    <div>
                        <h1>Delivered</h1>
                        <div className='mt-5 flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-3">
                                <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z"/>
                                <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z"/>
                                <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"/>
                            </svg>
                            <span>{
                                orders ?. filter(order => order.status === 'delivered').length
                            }</span>
                        </div>
                    </div>

                    <span>
                        <div className="radial-progress"
                            style={
                                {
                                    "--value": 70,
                                    "--size": "4rem"
                                }
                        }>70%</div>
                    </span>
                </div>
            </div>

            <div className=''>
            <div className="flex justify-between items-center p-4 rounded-t border-b dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Recent Orders
            </h3>
            
        </div>

        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="py-3 px-4">
                        <span className="">Sl.No</span>
                    </th>
                    <th scope="col" className="py-3 px-6">
                        <span className="">Image</span>
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Product
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Qty
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Price
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Table
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Payment
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Set time
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Complete
                    </th>
                    
                </tr>
            </thead>
            {recentOrders?.slice(0,5).map((order,index) => (
                          <tbody key={order._id}>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="py-4 px-4 font-semibold text-gray-900 dark:text-white">
                                  {index+1}
                                </td>
                              <td className="p-4 w-24">
                                <img
                                  className="w-14 h-14 rounded-full"
                                  src={order.pImg}
                                  alt={order.pName}
                                />
                              </td>
                              <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                {order.pName}
                              </td>
                              <td className="py-4 px-6">
                                <div className="flex items-center space-x-3 font-semibold text-gray-900 dark:text-white">
                                  {order.pQuantity}
                                </div>
                              </td>
                              <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                {order.pPrice}
                              </td>
                              <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                {order.pTable}
                              </td>
                              <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                <button className="btn btn-xs px-4 dark:text-white btn-info">
                                  Pay
                                </button>
                              </td>
                              <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                {order.deliveryTime ? order.deliveryTime + 'min': <span className='text-orange-500'>pending..</span>}
                              </td>
                              <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                {
                                  order?.status ? <span className="font-semibold text-xs flex items-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="green"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                  Delivered
                                </span>:''
                                }
                              </td>
                
                              
                            </tr>
                          </tbody>
                        ))}
                      </table>
            </div>

        </div>
    )
}
