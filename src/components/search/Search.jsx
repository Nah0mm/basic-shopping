import { useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function Search({ getSearchValue }) {
  const searchRef = useRef();

  const handleClick = () => {
    const searchname = searchRef.current.value;
    getSearchValue(searchname);
  };

  return (
    <div className="text-center p-5 flex justify-center">
      <input
        ref={searchRef}
        placeholder="What do you want to find?"
        className="border-2 p-2 w-[25rem] border-stone-400 rounded-sm"
        type="text"
      />
      <button className="px-5" onClick={handleClick}>
        <SearchIcon />
      </button>
    </div>
  );
}
