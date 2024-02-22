// App.jsx
import { useState } from "react";
import "./App.css";
import Payment from "./components/PayementComponent";

function App() {
  const [shoe, setShoe] = useState({
    name: "Training Shoes",
    creator: "Nike",
    img: "https://images.pexels.com/photos/3490360/pexels-photo-3490360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    price: 500,
  });

  return (
    <div className="App">
      <div className="shoe_container">
        <img src={shoe.img} alt="shoe_img" className="shoe_img" />
        <p className="shoe_name">{shoe.name}</p>
        <p className="shoe_creator">By {shoe.creator}</p>
        <p className="shoe_price">Price: {shoe.price}</p>
        <Payment
          img={shoe.img}
          currency="INR"
          amount={shoe.price}
          name={shoe.name}
          description="Test"
          order_id="some_order_id"
        />
      </div>
    </div>
  );
}

export default App;
