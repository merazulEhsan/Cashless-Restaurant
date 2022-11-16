import React from 'react'

export default function AddItem() {
    return (
        <>

            <form className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        ADD ITEM
                    </h3>

                </div>


                <div className="p-6 space-y-6">
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <label for="first-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                            <input type="text" name="first-name" id="first-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product Name" required=""/>
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label for="last-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                            <input type="text" name="last-name" id="last-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Category" required=""/>
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label for="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                            <input type="text" name="price" id="price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Price" required=""/>
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label for="phone-number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image Url</label>
                            <input type="text" name="phone-number" id="phone-number" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Image Url" required=""/>
                        </div>
                        <div className="col-span-6 sm:col-span-6">

                            <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                            <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-5pur00 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

                        </div>


                    </div>
                </div>
                {/* <!-- Modal footer --> */}
                <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save all</button>
                </div>


            </form>

        </>
    )
}
