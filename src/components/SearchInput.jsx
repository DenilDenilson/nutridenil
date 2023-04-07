import { useState } from "react";
import IconSearch from "./svg/IconSearch";

/*  */
const InputWithIcon = ({ ActiveSearch, style }) => {
  return (
    <div className="relative">
      <input
        onClick={ActiveSearch}
        type="text"
        placeholder="Ingrese el nombre de su comida"
        className={`min-w-[343px] text-gray-lighter pl-8 pr-3 py-2 rounded-md bg-gray-BG_alt ${style}`}
      />
      <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
        <IconSearch></IconSearch>
      </div>
    </div>
  );
};

export default InputWithIcon;
