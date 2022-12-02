import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import mainPath from "../../Utility";
import Loading from "../Loading/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51M92vYKr41CL1vj2Auv7KuxNWicrVBIp9vTQHcv0tvvcc3eExdGFuwTjxUAVkp4gFMhshb0qTMFwgfyLkQfJ8SXy00ZUoCDzX9"
);

const Payment = () => {
  const { id } = useParams();
  const url = mainPath + `/orders/${id}`;

  const { data: order, isLoading } = useQuery(["orders", id], () =>
    fetch(url).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm order={order[0]} />
      </Elements>
    </div>
  );
};

export default Payment;
