import { useState } from "react";
import IconSearch from "./svg/IconSearch";

/*  */
const InputWithIcon = ({ ActiveSearch, style }) => {
  return (
    <div
      id="searchInput"
      className="relative before:content-[' '] before:absolute before:-left-4 before:-right-4 before:-top-16 before:min-w-full before:min-h-screen before:z-[90] before:bg-gray-BG_alt before:opacity-40 before:filter before:blur-sm"
    >
      <div className="absolute z-[110] inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
        <IconSearch></IconSearch>
      </div>
      <input
        id="searchComponent"
        onClick={ActiveSearch}
        type="text"
        placeholder="Ingrese el nombre de su comida"
        className={`min-w-[343px] text-gray-lighter pl-8 pr-3 py-2 rounded-md bg-gray-BG_alt ${style}`}
      />
    </div>
  );
};

export default InputWithIcon;
