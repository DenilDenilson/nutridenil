import { useEffect, useState } from "react";
import FilterText from "./FiltersText";

const short = require("short-uuid");

export default function FoodSlaiderContainer({ filters, isgood, info }) {
  const [infoPlato, setInfoPlato] = useState(info);

  const allInfoList = infoPlato ? (
    infoPlato?.nutrition?.nutrients.map((bad) => (
      <li key={short.generate()}>
        {/* <IconCalories /> */}
        <p className="small-regular text-gray-text">
          <span className="small-semibold text-gray-text">{bad.amount}&nbsp;&nbsp;{bad.unit}</span>
          &nbsp;&nbsp;{bad.name}
        </p>
      </li>
    ))
  ) : (
    <p>Loading . . .</p>
  );

  const allFilters = filters.map((filter) => (
    <FilterText
      key={short.generate()}
      filter={filter}
      className={"bg-blue-800 text-blue-300"}
    />
  ));

  return (
    <div className="relative flex flex-col max-w-[360px] items-center gap-4 min-w-full snap-center">
      {/* <div className="absolute flex gap-3">
        {isgood ? (
          <>
            <FilterText
              filter={"Proteínas"}
              className={"bg-blue-800 text-blue-300"}
            />
            <FilterText
              filter={"Vitaminas"}
              className={"bg-yellow-800 text-yellow-300"}
            />
          </>
        ) : (
          <>
            <FilterText
              filter={"Calorías"}
              className={"bg-blue-800 text-blue-300"}
            />
            <FilterText
              filter={"Azucar"}
              className={"bg-blue-800 text-blue-300"}
            />
            <FilterText
              filter={"Grasa"}
              className={"bg-blue-800 text-blue-300"}
            />
          </>
        )}
      </div> */}
      <ul className="mt-10 flex flex-col items-center gap-4">{allInfoList}</ul>
    </div>
  );
}
