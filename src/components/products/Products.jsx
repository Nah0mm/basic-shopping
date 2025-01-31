import { dummyData } from "../../assets/Data";
import Product from "./product.jsx/Product";

export default function Products({ onAddToCart, searchValue }) {
  const data = dummyData;

  let content =
    searchValue.trim() === ""
      ? data
      : data.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()) || item.name.toLowerCase()===searchValue.toLowerCase());
  return (
    <div className="p-5 w-full text-center flex-wrap">
      <ul className="flex flex-wrap">
        {content.map((item) => (
          <li key={item.id}>
            <Product item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
