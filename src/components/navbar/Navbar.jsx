export default function Navbar({ getCart }) {
  return (
    <div className="w-full bg-stone-500 h-[5rem] p-3">
      <span>
        <h2 className="text-3xl text-stone-200 font-bold text-center">
          ShopIt
        </h2>
      </span>
      <span>
        <nav className="text-right">
          <button
            className="px-3  bg-stone-100 rounded-sm w-20 text-stone-500 hover:bg-stone-300"
            onClick={getCart}
          >
            Cart
          </button>
        </nav>
      </span>
    </div>
  );
}
