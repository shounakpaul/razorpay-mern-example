// Payment.jsx
import { useState } from "react";

function Payment({ img, currency, amount, name, description, order_id }) {
  const [error, setError] = useState(null);

  const initPay = async (data) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: data.amount,
      currency: data.currency,
      name: name,
      description: description,
      image: img,
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyURL = "http://localhost:8080/api/payment/verify";
          const verifyResponse = await fetch(verifyURL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(response),
          });
          const data = await verifyResponse.json();
        } catch (error) {
          setError(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePay = async () => {
    try {
      const orderURL = "http://localhost:8080/api/payment/orders";
      const response = await fetch(orderURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ amount: amount }),
      });
      const data = await response.json();
      initPay(data.data);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <button onClick={handlePay} className="buyBtn">
      Buy Shoes
    </button>
  );
}

export default Payment;
