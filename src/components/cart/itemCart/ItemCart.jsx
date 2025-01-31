import { useContext } from "react";
import { CartContext } from "../../store/cart-context";

export default function ({ item }) {
  const cartCtx = useContext(CartContext);
  return (
    <div className="flex justify-between p-2 m-2 w-[35rem] shadow-2xl shadow-stone-250 mt-3 text-stone-400 bg-stone-100">
      <p>{item.name}</p>
      <div className="flex px-2 w-[8rem]">
        <button
          className="px-2 bg-stone-300 mx-2 rounded-sm"
          onClick={() => cartCtx.removeFromCart(item)}
        >
          -
        </button>
        <p>{item.amount}</p>
        <button
          className="px-2 bg-stone-300 mx-2 rounded-sm"
          onClick={() => cartCtx.addToCart({ ...item, amount: 1 })}
        >
          +
        </button>
      </div>
      <p>${item.amount * item.price}</p>
      
    </div>
  );
}
