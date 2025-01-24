export default function Navbar(){
    return(
        <div className="w-full bg-stone-500 h-[5rem] flex justify-between p-3">
            <h2 className="text-3xl text-stone-200 font-bold">ShopIt</h2>
            <nav>
                <button className="p-3 bg-stone-100 rounded-sm w-20 text-stone-500 hover:bg-stone-300 mr-17">Cart</button>
            </nav>
        </div>
    )
}