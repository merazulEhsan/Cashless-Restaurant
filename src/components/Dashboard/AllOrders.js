import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify';
import Loading from '../Loading/Loading'

export const AllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [orderDelete, setOrderDelete] = useState(null)


    useEffect(() => {
    fetch(`http://localhost:4000/allorders`)
        .then((res) => res.json())
        .then((data) => {setOrders(data); setIsLoading(false)});
    }, [orders]);

    

    if(isLoading){
        return <Loading></Loading>
    }

    const handleDelete = () => {

        const url = `http://localhost:4000/orders/${
            orderDelete
        }`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        }).then((res) => res.json()).then((data) => {
            toast('Item Successfully Deleted')
            setOrderDelete(null)
        });
    }
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    All Orders
                </h3>
            </div>

            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
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
                            Action
                        </th>
                    </tr>
                </thead>
                {orders.map((order) => (
                                <tbody key={order._id}>
                                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="p-4 w-24">
                                      <img className="w-14 h-14 rounded-full" src={order.pImg} alt={order.pName} />
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
                    
                                  
                                    <td className="py-4 px-6">
                                      {/* The button to open modal */}
                                      <label
                                       onClick={()=> setOrderDelete(order._id)}
                                        htmlFor="my-modal-3"
                                        className="btn btn-sm bg-red-600 hover:bg-red-800 border-none text-white btn-circle btn-error "
                                      >
                                        ✕
                                      </label>
                    
                                      {/* Put this part before </body> tag */}
                                      <input
                                        type="checkbox"
                                        id="my-modal-3"
                                        className="modal-toggle"
                                      />
                                      <div className="modal ">
                                        <div className="modal-box relative bg-white dark:bg-gray-900">
                                          <label
                                            htmlFor="my-modal-3"
                                            className="btn btn-sm bg-red-600 hover:bg-red-800 border-none text-white btn-circle absolute right-2 top-2"
                                          >
                                            ✕
                                          </label>
                                          <div className="p-6 text-center">
                                            <svg
                                              aria-hidden="true"
                                              className="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
                                              fill="none"
                                              stroke="currentColor"
                                              viewBox="0 0 24 24"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                              ></path>
                                            </svg>
                                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                              Are you sure you want to delete this product?
                                            </h3>
                                            <label onClick={()=>handleDelete()}
                                             htmlFor="my-modal-3"
                                              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                                            >
                                              Yes, I'm sure
                                            </label>
                                            <label
                                              htmlFor="my-modal-3"
                                              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600 cursor-pointer"
                                            >
                                              No, cancel
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              ))}
                            </table>
                          </div>
  )
}
