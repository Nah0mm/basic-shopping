import { dummyData } from "../../assets/Data";
import Product from "./product.jsx/Product";

export default function Products({onAddToCart}) {
  const data = dummyData;
  const getAddToCart=(newItem)=>{
     onAddToCart(newItem)
     
  }
  return (
    <div className="p-5 w-full text-center">
      <ul className="flex flex-wrap">
        {data.map((item) => (
          <li key={item.id}>
            <Product item={item} onGetAddToCart={getAddToCart}/>
          </li>
        ))}
      </ul>
    </div>
  );
}
