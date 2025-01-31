import { useContext } from "react";
import { CartContext } from "../../store/cart-context";

export default function Product({ item, onGetAddToCart }) {
  const cartCtx=useContext(CartContext)
  return (
    <div className="m-4 p-2 shadow-2xl shadow-stone-500 w-[22rem] h-[20rem] list-none rounded-md text-stone-800 text-center bg-stone-100">
      <div>
        <img
          src={item.image}
          className="w-[22rem] h-[8rem] object-contain mx-auto"
        />
      </div>
      <h3 className="font-bold ">{item.name}</h3>
      <p>${item.price}</p>
      <p>{item.description}</p>
      <button
        className="bg-stone-500 text-stone-200 p-3 rounded-sm mt-5 font-bold hover:bg-stone-700"
        onClick={() => cartCtx.addToCart({...item, amount:1 })}
      >
        Add to cart
      </button>
    </div>
  );
}
