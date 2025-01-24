import Navbar from "../navbar/Navbar";
import Products from "../products/Products";
import Cart from "../cart/Cart";
import { useState } from "react";

export default function Master() {
  const [cart, setCart] = useState([]);

  const addToCart = (newItem) => {
    setCart((prev) => {
      let newCart;
      newCart = [...prev.map((item) => item)];
      if (newCart.map((item) => item.id === newItem.id)) {
         
      }
      else{
       console.log("not found")
      }
      return newCart;
    });
  };

  console.log(cart);
  return (
    <div>
      <Navbar />
      <Products onAddToCart={addToCart} />
      <Cart cart={cart} />
    </div>
  );
}
