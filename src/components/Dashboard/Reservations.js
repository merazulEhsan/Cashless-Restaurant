import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import twentyfourToTwelve from "twentyfour-to-twelve";
import mainPath from "../../Utility";

const Reservations = () => {
  const [reservation, setReservations] = useState([]);

  useEffect(() => {
    fetch(mainPath + "/reservation")
      .then((res) => res.json())
      .then((data) => setReservations(data));
  }, []);
  return (
    <div className="">
      <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white uppercase">
          Reservations
        </h3>
      </div>
      {reservation.map((reservation) => (
        <div className="p-5 card shadow-md dark:shadow-white/20 mt-5">
          <h1 className="text-lg font-nunito font-semibold border-b">
            Reservation at {reservation.date}
          </h1>
          <div
            className="text-base
            "
          >
            <p>Reserved by: {reservation.name}</p>
            <p>Phone: {reservation.phone}</p>
            <p>Email: {reservation.email}</p>
            <p>Time: {twentyfourToTwelve(reservation.time)}</p>
            <p>Person: {reservation.person}</p>
          </div>
        </div>
      ))}{" "}
    </div>
  );
};

export default Reservations;
