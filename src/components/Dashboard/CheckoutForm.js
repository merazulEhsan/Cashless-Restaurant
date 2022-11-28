import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({order}) => {
    const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const {_id,pPrice,userName,email} = order || {}

  

  useEffect(() => {
    fetch("http://localhost:4000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({pPrice}),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data?.clientSecret){
            setClientSecret(data.clientSecret)
        }
      });
  }, [pPrice]);


  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
        return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

     const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    setError(error?.message || '')
    setSuccess('')


    const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              name: userName,
              email: email,
              
            },
          },
        },
      );

      if(intentError){
        setError(intentError?.message)
      }else{
        setError('')
        setSuccess('Congrats !! Your payment is complete.')

        const payment = {
            transactionId: paymentIntent.id,
            paymentStatus: 'paid',
        }
        
        fetch(`http://localhost:4000/orders/${_id}`,{
            method: "PATCH",
            headers:{
                'content-type': "application/json"
            },
            body: JSON.stringify(payment),
        }).then(res=>res.json()).then()
      }
  };
    return (
        <div className='card shadow-md w-1/2 p-10 m-10'>
            <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn btn-accent mt-4 btn-sm' type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      {error && <p className='text-red-600'>{error}</p>}
      {success && <p className='text-green-600'>{success}</p>}
    </form>
        </div>
    );
};

export default CheckoutForm;
