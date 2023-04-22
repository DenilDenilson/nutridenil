import { useEffect, useState } from "react";
import FilterText from "./FiltersText";
import GoodOrBad from "./GoodOrBad";
import Nutrients from "./Nutrients";
import IconCalories from "./svg/IconCalories";

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
          <div className="flex items-center gap-4">
            <IconCalories />
            <p className="small-regular text-gray-text">
              <span className="small-semibold text-gray-text">
                {bad.amount}
              </span>
              &nbsp;&nbsp;{bad.title}
            </p>
          </div>
        ))
      ) : (
        <p>Loading . . .</p>
      )}
    </div>
  );
}
