import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import mainPath from "../../Utility";
import Loading from "../Loading/Loading";

export const AllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [orderDelete, setOrderDelete] = useState(null);
  const [timeId, setTimeId] = useState(null);
  const [deliveryTime, setDeliveryTime] = useState(null);

  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(5);

  useEffect(() => {
    fetch(mainPath + `/allorders`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setIsLoading(false);
        const count = data?.filter(
          (data) => data.status !== "delivered"
        ).length;
        const page = Math.ceil(count / size);
        setPageCount(page);
      });
  }, [orders, size]);

  if (isLoading) {
    return <Loading></Loading>;
  }
  if (pageCount === page) {
    return setPage(0);
  }
  const filterStatus = orders
    ?.filter((order) => order.status !== "delivered")
    .slice(page * size, page * size + size);

  const handleDelete = () => {
    const url = mainPath + `/orders/${orderDelete}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Item Successfully Deleted");
        setOrderDelete(null);
        setDeliveryTime(null);
      });
  };

  const handleSetTime = () => {
    const url = mainPath + `/orders/${timeId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ deliveryTime }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Time seted");
        setTimeId(null);
      });
  };

  const handleDeliverd = (id) => {
    const url = mainPath + `/orders/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "delivered" }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Item Delivered");
      });
  };
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <div className="flex justify-between items-center p-4 rounded-t border-b dark:border-gray-600">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          All Orders
        </h3>
        <div>
          <span className="font-semibold">Show page</span>
          <select
            onClick={(e) => setSize(e.target.value)}
            className="select select-success  select-sm w-1/8 text-center pt-0 bg-white ml-2"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
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
              Payment
            </th>
            <th scope="col" className="py-3 px-6">
              Set time
            </th>
            <th scope="col" className="py-3 px-6">
              Complete
            </th>
            <th scope="col" className="py-3 px-6">
              Action
            </th>
          </tr>
        </thead>
        {filterStatus?.map((order, index) => (
          <tbody key={order._id}>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="py-4 px-4 font-semibold text-gray-900 dark:text-white">
                {(page === 0 && index + 1) ||
                  (page > 0 && index + 1 + size * page)}
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
                {order.paymentStatus === "paid" ? (
                  <span className="font-semibold text-green-600 text-xs flex items-center">
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
                    Paid
                  </span>
                ) : (
                  <span className="font-semibold text-red-600 text-xs flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="red"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Unpaid
                  </span>
                )}
              </td>
              <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                {order.deliveryTime ? (
                  <label
                    onClick={() => setTimeId(order._id)}
                    htmlFor="my-modal"
                    className="flex items-center gap-1 text-white text-xs btn btn-xs px-4 dark:text-white btn-info"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {order.deliveryTime} min
                  </label>
                ) : (
                  <label
                    onClick={() => setTimeId(order._id)}
                    htmlFor="my-modal"
                    className="btn btn-xs px-4 dark:text-white btn-info"
                  >
                    set Time
                  </label>
                )}
              </td>
              <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                {order?.status ? (
                  <span className="font-semibold text-xs flex items-center">
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
                ) : (
                  <button
                    onClick={() => handleDeliverd(order._id)}
                    className="btn btn-xs px-4 dark:text-white btn-info"
                  >
                    Complete
                  </button>
                )}
              </td>

              <td className="py-4 px-6">
                {/* The button to open modal */}
                <label
                  onClick={() => setOrderDelete(order._id)}
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
                      <label
                        onClick={() => handleDelete()}
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

      <div>
        <nav
          aria-label="Page navigation example"
          className="text-center py-8 bg-white dark:bg-gray-900"
        >
          <ul className="inline-flex -space-x-px">
            <li>
              <button
                onClick={() => setPage(page > 0 && page - 1)}
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

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-white dark:bg-gray-900">
          <h3 className="font-bold text-lg">Delivery In!</h3>
          <p className="py-6">
            <input
              type="text"
              onChange={(e) => setDeliveryTime(e.target.value)}
              placeholder="Set time here"
              className="input input-bordered input-md w-full max-w-xs bg-gray-300 dark:bg-gray-900"
            />
          </p>
          <div className="modal-action">
            <label
              htmlFor="my-modal"
              className="btn btn-sm btn-error text-white"
            >
              Cancel
            </label>
            <label
              onClick={() => handleSetTime()}
              htmlFor="my-modal"
              className="btn btn-sm"
            >
              Set
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
