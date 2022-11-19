import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useItems from "../components/Hooks/useItems";
import RelatedItems from "./RelatedItems";
import "../CSS/related.css";
import "swiper/css";
import "swiper/css/pagination";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { toast } from "react-toastify";

export default function SingleItem() {

  const [user] = useAuthState(auth)
  const { id } = useParams();
  const [count, setCount] = useState(1);
  const [table, setTable] = useState(1);
  const [items] = useItems();
  const [singleitem, setSingleitem] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`http://localhost:4000/items/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleitem(data));
  }, [id, items]);

  //Filter by category
  const category = items?.filter(
    (item) => item?.category === singleitem.category
  );

  const handlePlaceOrder = (e) =>{
    e.preventDefault();

    const order ={
        pName: singleitem.name,
        pImg: singleitem.image,
        pPrice: parseInt(singleitem.price*count),
        pQuantity: count,
        pTable: parseInt(table),
        userName: user.displayName,
        email: user.email,
    
    }

    fetch(`http://localhost:4000/orders`,{
        method:'POST',
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(order)
    }).then(res=>res.json())
    .then(data => {
        if (data.acknowledged === true) {
            toast.success("Order Placed Successfilly");
            navigate('/dashboard')
          }
    })
    
}


  return (
    <>
      <section className="bg-white dark:bg-gray-900 w-full h-auto 2xl:container m-auto">
        <div className="flex justify-center flex-col lg:flex-row p-10 lg:gap-10 gap-y-10">
          <div className="lg:w-1/3">
            <img
              className="w-96 md:h-96   rounded-sm shadow-2xl"
              src={singleitem?.image}
              alt=""
            />
          </div>
          <form className="lg:w-1/3">
            <h1 className="text-3xl dark:text-white font-playfair bg-clip-text text-transparent bg-gradient-to-b from-blue-700  to-pink-500 font-black tracking-wider mb-2">
              {singleitem?.name}
            </h1>
            <div className="flex items-center">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>First star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Second star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Third star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Fourth star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-300 dark:text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Fifth star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                4.95 out of 5
              </p>
            </div>
            <p className="text-lg text-black dark:text-gray-300">
              {singleitem?.description}
            </p>
            <p className="text-orange-500 font-semibold text-lg mt-4">
              Price: ৳ {singleitem?.price}
            </p>

            <div className="flex items-center space-x-3 mt-3">
              <span className="mr-3 dark:text-white text-black text-md font-semibold">
                Quantity:
              </span>
              <button
                onClick={() => setCount(count =>count - 1)}
                className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                type="button"
              >
                <span className="sr-only">Quantity button</span>
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <div>
                <input
                  disabled
                  value={count}
                  type="text"
                  id="second_product"
                  className="bg-gray-50 w-10 text-center border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-1 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="1"
                  required
                />
              </div>
              <button
                onClick={() => setCount(count=>count + 1)}
                className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                type="button"
              >
                <span className="sr-only">Quantity button</span>
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="mt-5">
              <span className="mr-3 dark:text-white text-black text-md font-semibold">
                Table No:
              </span>
              <select
                defaultValue={"DEFAULT"}
                onChange={(e) => setTable(e.target.value)}
                className="select select-bordered border-black select-sm w-16 p-0 pl-4 max-w-xs bg-white text-black"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>

            <button
              type="submit"
              onClick={handlePlaceOrder}
              className="btn btn-outline btn-primary mt-5 px-6"
            >
              Order
            </button>
          </form>
        </div>

        <div></div>

        <div className="py-20">
          <h1 className="text-2xl font-serif p-10 underline text-black dark:text-current">
            Related Items
          </h1>
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay, Navigation]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            navigation={true}
            className="mySwiper"
          >
            {category?.map((item) => {
              return (
                <SwiperSlide key={item._id}>
                 
                  <RelatedItems key={item._id} item={item}></RelatedItems>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
}
