import React from "react";
import avatar from "../../images/avatar.png";
import { useState } from "react";
import { toast } from "react-toastify";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";

export default function User() {
  const [search, setSearch] = useState("");
  const [userDelete, setUserDelete] = useState(null);

  const {
    isLoading,
    error,
    data: users,
    refetch,
  } = useQuery("user", () =>
    fetch("https://cashless-restaurant.herokuapp.com/user").then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleUserDelete = () => {
    const url = `https://cashless-restaurant.herokuapp.com/user/${userDelete}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        toast("Item Successfully Deleted");
        setUserDelete(null);
      });
  };

  const makeChef = (email) => {
    fetch(`https://cashless-restaurant.herokuapp.com/user/chef/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        toast.success("Make Chef Successfull");
      });
  };
  // Search Filter
  const userFilter = users.filter(
    (user) =>
      user?.name?.toLowerCase().includes(search) ||
      user?.email.toLowerCase().includes(search)
  );

  return (
    <>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg h-screen">
        <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600 mb-3">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            ALL USERS
          </h3>
        </div>
        <div className="px-1 pb-4 bg-white dark:bg-gray-900">
          <label htmlFor="table-search" className="sr-only">
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
              placeholder="Search for users"
            />
          </div>
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                Sl.No
              </th>
              <th scope="col" className="py-3 px-6">
                Name
              </th>
              <th scope="col" className="py-3 px-6">
                Role
              </th>
              <th scope="col" className="py-3 px-6">
                Status
              </th>
              <th scope="col" className="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {userFilter.map((user, index) => (
              <tr
                key={user._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="p-4 w-4">{index + 1} </td>
                <th
                  scope="row"
                  className="flex items-center py-4 px-5 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src={user?.photoURL ? user.photoURL : avatar}
                    alt=""
                  />
                  <div className="pl-3">
                    <div className="text-sm font-semibold">{user.name}</div>
                    <div className="font-normal text-gray-500">
                      {user.email}
                    </div>
                  </div>
                </th>
                <td className="py-4 px-6">
                  {user.roll !== "chef" ? (
                    <button
                      onClick={() => makeChef(user.email)}
                      className="btn btn-xs btn-success text-white"
                    >
                      Make Chef
                    </button>
                  ) : (
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
                      Chef
                    </span>
                  )}
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>
                    Online
                  </div>
                </td>
                <td className="py-4 px-6">
                  <label
                    onClick={() => setUserDelete(user._id)}
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
                  <div className="modal">
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
                          Are you sure you want to delete this user?
                        </h3>
                        <label
                          htmlFor="my-modal-3"
                          onClick={() => handleUserDelete()}
                          type="submit"
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
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
