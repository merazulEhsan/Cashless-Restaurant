import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useItems from "../Hooks/useItems";
import Loading from "../Loading/Loading";
import EditForm from "./EditForm";

export const ManageItems = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [editUser, setEditUser] = useState([]);
  const [itemDelete, setItemDelete] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(5);

  useEffect(() => {
    fetch(`http://localhost:4000/items?page=${page}&size=${size}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [page, size,items]);

  useEffect(() => {
    fetch("http://localhost:4000/itemsCount")
      .then((res) => res.json())
      .then((data) => {
        const count = data.count;
        const page = Math.ceil(count / size);
        setPageCount(page);
      });
  }, [size]);

  // if (isLoading) {
  // return <Loading></Loading>;
  // }

  const userFilter = items.filter((item) =>
    item?.name?.toLowerCase().includes(search)
  );

  const handleItemDelete = () => {
    const url = `http://localhost:4000/items/${itemDelete}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Item Successfully Deleted");
        setItemDelete(null);
      });
  };
  return (
    <>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg h-screen">
        <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600 mb-3">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Manage Items
          </h3>
        </div>
        <div className="px-1 pb-4 bg-white dark:bg-gray-900">
          <label for="table-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
              type="text"
              id="table-search-users"
              className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for items"
            />
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
                Price
              </th>
              <th scope="col" className="py-3 px-6">
                Description
              </th>
              <th scope="col" className="py-3 px-6">
                Edit
              </th>
              <th scope="col" className="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          {userFilter.map((item, index) => (
            <tbody key={item._id}>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="py-4 px-4 font-semibold text-gray-900 dark:text-white">
                  {(page===0 &&(index + 1)) || (page>0 && (index + 1)+size*page)}
                </td>
                <td className="p-4 w-24">
                  <img
                    className="w-14 h-14 rounded-full"
                    src={item.image}
                    alt={item.name}
                  />
                </td>
                <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                  {item.name}
                </td>

                <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                  {item.price}
                </td>
                <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white text-justify">
                  {item.description}
                </td>
                <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                  <label
                    onClick={() => setEditUser(item)}
                    htmlFor="my-modal"
                    className="btn btn-sm border-none text-white btn-square btn-primary"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </label>
                </td>

                {/* delete Modal */}
                <td className="py-4 px-6">
                  {/* The button to open modal */}
                  <label
                    onClick={() => setItemDelete(item._id)}
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
                          htmlFor="my-modal-3"
                          onClick={() => handleItemDelete()}
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
          ))}{" "}
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
                <li>
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

        {/* edit Modal */}
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <label className="modal-box cursor-pointer bg-white">
            <label
              htmlFor="my-modal"
              className="btn btn-sm bg-red-600 hover:bg-red-800 border-none text-white btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <EditForm
              editUser={editUser}
              
              setEditUser={setEditUser}
            ></EditForm>
          </label>
        </div>
      </div>
    </>
  );
};
