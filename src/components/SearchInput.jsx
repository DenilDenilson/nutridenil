import { useRef, useState } from "react";
import IconSearch from "./svg/IconSearch";
import { useRouter } from "next/router";

/*  */
const InputWithIcon = () => {
  const router = useRouter();
  const inputSearchComponent = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [style, setStyle] = useState("small-regular");
  const [divStyle, setDivStyle] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // inputSearchComponent.current.blur();
      // console.log(inputValue);
      router.push(`/search/${inputValue}`);
    }
  };

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

  // console.log(inputValue);

  return (
    <div id="searchInput" className={`relative ${divStyle}`}>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-[110] flex items-center pl-2">
        <IconSearch></IconSearch>
      </div>
      <input
        ref={inputSearchComponent}
        id="searchComponent"
        onFocus={ActiveSearch}
        onBlur={noActiveSearch}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        value={inputValue}
        type="text"
        placeholder="Ingrese el nombre de su comida"
        className={`min-w-[343px] w-full rounded-md bg-gray-BG_alt py-2 pl-8 pr-3 text-gray-lighter ${style}`}
      />
    </div>
  );
};

export default InputWithIcon;
