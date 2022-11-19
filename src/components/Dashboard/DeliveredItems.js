import React, { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';

const DeliveredItems = () => {
    const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(5);


  useEffect(() => {
    fetch(`http://localhost:4000/allorders`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setIsLoading(false);
        const count = data?.filter(data => data.status === 'delivered').length;
        const page = Math.ceil(count / size);
        setPageCount(page);
      });
  }, [orders, size]);

  if (isLoading) {
    return <Loading></Loading>;
  }

  const filterStatus = orders.filter(order => order.status === 'delivered').slice((page * size), (page* size)+size)
  
  
 
    return (
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          All Orders
        </h3>
        <div>
                <span className="font-semibold">Show page</span>
                <select onClick={
                        (e) => setSize(e.target.value)
                    }
                    className="select select-success  select-sm w-1/8 text-center pt-0 bg-white ml-2">
                    <option value='5'>5</option>
                    <option value='10'>10</option>
                    <option value='15'>15</option>
                    <option value='20'>20</option>

                </select>
            </div>
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
              Status
            </th>
            
          </tr>
        </thead>
        {filterStatus.map((order,index) => (
          <tbody key={order._id}>
            <tr  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="py-4 px-4 font-semibold text-gray-900 dark:text-white">
                  {(page===0 &&(index + 1)) || (page>0 && (index + 1)+size*page)}
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
                {
                    order.status && <span className="font-semibold text-xs flex items-center">
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
                  </span>
                }
              </td>

              
            </tr>
          </tbody>
        ))}
      </table>

      <div>
          <nav
            aria-label="Page navigation example"
            className="text-center py-8 bg-white dark:bg-gray-900"
          >
            <ul className="inline-flex -space-x-px">
              <li>
                <button
                  onClick={() => setPage(page>0 && page - 1)}
                  disabled={page === 0}
                  className="py-3 px-4 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:disabled:bg-gray-700 disabled:bg-gray-200"
                >
                  Previous
                </button>
              </li>

              {[...Array(pageCount).keys()].map((number) => (
                <li key={number}>
                  <button
                    onClick={() => setPage(number)}
                    className={`py-3 px-3 leading-tight text-gray-500  border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                      page === number
                        ? "bg-orange-500 text-white dark:bg-gray-600"
                        : "bg-white"
                    } `}
                  >
                    {number + 1}
                  </button>
                </li>
              ))}

              <li>
                <button
                  onClick={() => setPage(page < pageCount - 1 && page + 1)}
                  disabled={page === pageCount - 1}
                  className={`py-3 px-4 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:disabled:bg-gray-700 disabled:bg-gray-200`}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>

    
    </div>
    );
};

export default DeliveredItems;