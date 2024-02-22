# Razorpay MERN Example

Setup Razorpay in your React App.

### How to setup:

- Clone this repository.
  `https://github.com/shounakpaul/razorpay-setup.git`

- Enter the directory (`cd razorpay-setup`) and run `npm install` or `bun install`

- Run
  `cd server && npm install && cd ..`

- Create a `.env` file in the `server` directory and add the following:

```
KEY_ID= Your Razorpay Key ID
KEY_SECRET= Your Razorpay Key Secret
```

- Create a `.env` file in the root directory and add the following:

```
VITE_RAZORPAY_KEY_ID= Your Razorpay Key ID
```

- Run `cd server && npm run dev` in one terminal to start the server (from server directory).

- Run `npm run dev` in another terminal to start the client (from root directory).

- Open `http://localhost:5173` in your browser.

### How to use in your own project:

In the root folder inside `src/components/PayementComponent.jsx` you can find the `PaymentComponent` component. You can use this component in your own project to integrate Razorpay.

It takes the following props:
image, currency, amount, name, description, order_id, handler

> That's it! You should now see the Razorpay payment gateway in your React app.
