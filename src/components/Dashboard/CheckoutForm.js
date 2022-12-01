import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ order }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [transaction, setTransaction] = useState("");
  const { _id, pPrice, userName, email } = order || {};

  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("https://cashless-restaurant.herokuapp.com/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pPrice }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [pPrice]);

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        fontFamily: "Arial, sans-serif",
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  const handleChange = async (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      receipt_email: email,
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: userName,
          email: email,
        },
      },
    });

    console.log(payload);

    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
      setTransaction(payload.paymentIntent.id);
      console.log(payload);

      const payment = {
        transactionId: payload.paymentIntent.id,
        paymentStatus: "paid",
      };

      fetch(`https://cashless-restaurant.herokuapp.com/orders/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then();
    }
  };

  // const handleSubmit = async (event) => {
  // // Block native form submission.
  // event.preventDefault();

  // if (!stripe || !elements) {
  //       return;
  // }

  // const card = elements.getElement(CardNumberElement, CardExpiryElement, CardCvcElement);

  // if (card == null) {
  //     return;
  // }

  //    const {error, paymentMethod} = await stripe.createPaymentMethod({
  //     type: 'card',
  //     card,
  // });

  // setError(error?.message || '')
  // setSuccess('')

  // const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
  //       clientSecret,
  //       {
  //         payment_method: {
  //           card: card,
  //           billing_details: {
  //             name: userName,
  //             email: email,

  //           },
  //         },
  //       },
  //     );

  //     if(intentError){
  //       setError(intentError?.message)
  //     }else{
  //       setError('')
  //       setSuccess('Congrats !! Your payment is complete.')

  //       const payment = {
  //           transactionId: paymentIntent.id,
  //           paymentStatus: 'paid',
  //       }

  //       fetch(`https://cashless-restaurant.herokuapp.com/orders/${_id}`,{
  //           method: "PATCH",
  //           headers:{
  //               'content-type': "application/json"
  //           },
  //           body: JSON.stringify(payment),
  //       }).then(res=>res.json()).then()
  //     }
  // };
  return (
    <section className="flex justify-center">
      <div className="card shadow-md w-auto m-1 sm:w-full sm:m-5 md:w-10/12 lg:w-1/2  p-4 lg:p-10 lg:m-10">
        <h1 className="p-4 text-center text-xl">Pay With Card</h1>
        {!succeeded ? (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="cardholder">Cardholder Name</label>
              <br />
              <input
                id="cardholder"
                type="text"
                value={userName}
                // onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 text-sm rounded-md shadow-sm border border-gray-200 mb-5"
              />
            </div>
            <div>
              <label htmlFor="cardinfo">Card Information</label>
              <CardElement
                id="cardinfo"
                className="rounded-md border p-2 shadow-sm"
                options={cardStyle}
                onChange={handleChange}
              />
            </div>
            <button
              className="btn bg-blue-600 hover:bg-blue-700 text-white border-none btn-sm w-full mt-4  disabled:bg-blue-700"
              disabled={processing || disabled || succeeded}
              type="submit"
            >
              <span id="button-text">
                {processing ? (
                  <div className="spinner" id="spinner"></div>
                ) : (
                  "Pay now"
                )}
              </span>
            </button>
            {/* Show any error that happens when processing the payment */}
            {error && (
              <div className="card-error" role="alert">
                {error}
              </div>
            )}
            {/* Show a success message upon completion */}
          </form>
        ) : (
          <p
            className={
              succeeded ? "result-message m-auto" : "result-message hidden"
            }
          >
            <div className="flex items-center flex-col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="green"
                className="w-20 h-20 ml-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>Payment succeeded!!</p>
              <p>Transaction Id: {transaction}</p>
            </div>
          </p>
        )}
      </div>
    </section>
  );
};

export default CheckoutForm;
