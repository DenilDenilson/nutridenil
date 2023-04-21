import { useEffect, useState } from "react";
import FilterText from "./FiltersText";
import GoodOrBad from "./GoodOrBad";
import Nutrients from "./Nutrients";

export default function FoodSlaiderContainer({ isgood, info }) {
  const [infoPlato, setInfoPlato] = useState(null);

  useEffect(() => {
    if (isgood != null) {
      isgood ? setInfoPlato(info.good) : setInfoPlato(info.bad);
    }
  }, [infoPlato]);

  return (
    <div className="flex flex-col gap-4 min-w-full snap-center">
      <div className="flex gap-3">
        <FilterText filter={"Azucar"} className={"bg-blue-800 text-blue-300"} />
        <FilterText
          filter={"Vitaminas"}
          className={"bg-yellow-800 text-yellow-300"}
        />
      </div>
      {infoPlato ? (
        infoPlato.map((bad) => (
          <li>
            {bad.amount} {bad.title}
          </li>
        ))
      ) : (
        <p>Loading . . .</p>
      )}
    </div>
  );
}
