import { useRef, useState } from "react";
import IconSearch from "./svg/IconSearch";

/*  */
const InputWithIcon = () => {
  const inputSearchComponent = useRef(null);
  const [style, setStyle] = useState("small-regular");
  const [divStyle, setDivStyle] = useState("");

  const ActiveSearch = () => {
    setStyle("focus:outline-none z-50 focus:shadow-search bigger-regular");
    setDivStyle(
      "before:content-[' '] before:absolute before:-left-4 before:-right-4 before:-top-16 before:min-w-full before:min-h-screen before:z-[90] before:backdrop-blur-[1px] before:bg-gray-title/10 before:filter before:blur-sm"
    );
  };
  const noActiveSearch = () => {
    setStyle("small-regular");
    setDivStyle("");
  };

  return (
    <div id="searchInput" className={`relative ${divStyle}`}>
      <div className="absolute z-[110] inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
        <IconSearch></IconSearch>
      </div>
      <input
        ref={inputSearchComponent}
        id="searchComponent"
        onFocus={ActiveSearch}
        onBlur={noActiveSearch}
        type="text"
        placeholder="Ingrese el nombre de su comida"
        className={`min-w-[343px] text-gray-lighter pl-8 pr-3 py-2 rounded-md bg-gray-BG_alt ${style}`}
      />
    </div>
  );
};

export default InputWithIcon;
