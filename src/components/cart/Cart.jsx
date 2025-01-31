import { useContext } from "react";
import ItemCart from "./itemCart/ItemCart";
import { CartContext } from "../store/cart-context";

export default function Cart() {
  const cartCtx=useContext(CartContext)
  return (
    <div className="bg-stone-200">
      <h2 className="text-center font-bold">Your cart</h2>
      {cartCtx.items.length === 0 && <h2>No items in cart</h2>}
      <ul>
        {cartCtx.items.map((item) => (
          <li key={item.id}>
            <ItemCart item={item} />
          </li>
        ))}
      </ul>
      <p className="text-right p-3">Total Price: $</p>
      <button className="text-right p-3">Proceed</button>
    </div>
  );
}
