import React, {useState} from 'react'
import {toast} from 'react-toastify';


export default function EditForm({editUser,  setEditUser}) {

    const {
        name,
        description,
        price,
        image,
        category,
        _id
    } = editUser;


    const handleEdit = (e) => {
        e.preventDefault();

        const editData = {
            name: e.target.name.value,
            category: e.target.category.value,
            image: e.target.image.value,
            price: e.target.price.value,
            description: e.target.description.value
        }

        const url = `http://localhost:4000/items/${_id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(editData)
        }).then((res) => res.json()).then((data) => {
            toast("Item Edited");
            setEditUser('')
        });
    }


    return (
        <>
            <label className="modal-box cursor-pointer bg-white">
                <label htmlFor="my-modal" className="btn btn-sm bg-red-600 hover:bg-red-800 border-none text-white btn-circle absolute right-2 top-2">
                    ✕
                </label>
                <form onSubmit={handleEdit}
                    className="overflow-x-auto relative ">
                    <div className="flex justify-between items-start p-2 rounded-t border-b dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            ADD ITEM
                        </h3>

                    </div>


                    <div className="p-6 space-y-4">
                        <div className="grid grid-cols-6 gap-4">
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                                <input defaultValue={name}
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Product Name"
                                    required/>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                <input defaultValue={category}
                                    type="text"
                                    name="category"
                                    id="category"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Category"
                                    required=""/>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                <input defaultValue={price}
                                    type="number"
                                    name="price"
                                    id="price"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder='price'/>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image Url</label>
                                <input defaultValue={image}
                                    type="text"
                                    name="image"
                                    id="image"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Image Url"
                                    required=""/>
                            </div>
                            <div className="col-span-6 sm:col-span-6">

                                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                </label>
                                <textarea defaultValue={description}
                                    id="description"
                                    rows="6"
                                    name='description'
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-5pur00 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Write your thoughts here..."></textarea>

                            </div>


                        </div>
                        {/* <!-- Modal footer --> */}

                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
                    </div>

                </form>
            </label>
        </>
    )
}
