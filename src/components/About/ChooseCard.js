import React from "react";

export default function ChooseCard() {
  return (
    <>
      <div className="relative w-full top-14">
        <h1 className="text-5xl sm:text-8xl font-vibes text-[#c8a97e] text-center">
          Choose Us
        </h1>
        <span className="text-xl sm:text-4xl font-nunito absolute left-1/3 -translate-y-6 sm:-translate-y-10 md:left-1/3 lg:left-1/3 lg:translate-x-8 xl:left-1/3 xl:translate-x-20 text-black font-black">
          Why Choose US
        </span>
      </div>

      <div
        className=" mt-20 p-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 justify-items-center gap-y-5"
        data-aos="zoom-in-up"
        data-aos-duration="1500"
        data-aos-easing="ease-in-back"
        data-aos-delay="0"
        data-aos-offset="0"
      >
        <div className="mb-5 bg-white text-black w-60 p-5 rounded-md h-auto text-justify transition-all duration-500 ease-linear shadow-md shadow-blue-500/70  hover:-translate-y-5">
          <p className="text-blue-500 font-black font-nunito">01</p>
          <h1 className="font-playfair text-lg font-medium mt-1">
            Delicious Food
          </h1>
          <p className="font-nunito text-base mt-2">
            Our offerings are plant based, handmade without artificial
            ingredients or flavors, and our prepared foods and desserts are made
            with organic ingredients whenever possible.
          </p>
        </div>
        <div className="mb-5 bg-white text-black w-60 p-5 rounded-md h-auto text-justify  transition-all duration-500 ease-linear shadow-md shadow-blue-500/70  hover:-translate-y-5">
          <p className="text-blue-500 font-black font-nunito">02</p>
          <h1 className="font-playfair text-lg font-medium mt-1">
            Expert Chefs
          </h1>
          <p className="font-nunito text-base mt-2">
            Each chef specialises in a different cuisin, and has created a
            uniques set of cookaway menus to take you on a culinary adventure.
            The cookaway chefs can help you master the flavours of the.....
          </p>
        </div>
        <div className=" bg-white text-black w-60 p-5 rounded-md h-auto mb-5 text-justify transition-all duration-500 ease-linear shadow-md shadow-blue-500/70  hover:-translate-y-5">
          <p className="text-blue-500 font-black font-nunito">03</p>
          <h1 className="font-playfair text-lg font-medium mt-1">
            Friendly People
          </h1>
          <p className="font-nunito text-base mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            adipisci, unde esse voluptas nobis expedita soluta velit nulla
            veniam. Libero!
          </p>
        </div>
        <div className=" bg-white text-black w-60 p-5 rounded-md h-auto mb-5 text-justify transition-all duration-500 ease-linear shadow-md shadow-blue-500/70  hover:-translate-y-5">
          <p className="text-blue-500 font-black font-nunito">04</p>
          <h1 className="font-playfair text-lg font-medium mt-1">Parties</h1>
          <p className="font-nunito text-base mt-2">
            Got your party date lined up? Send out invites as soon as possible.
            If the event is formal, such as to celebrate a milestone anniversary
            or birthday, you might want to rely on classic mailed invitations.
          </p>
        </div>
      </div>
    </>
  );
}
