import FilterText from "./FiltersText";
import GoodOrBad from "./GoodOrBad";
import Nutrients from "./Nutrients";

export default function FoodSlaiderContainer(props) {
  return (
    <div className="flex flex-col gap-4 min-w-full snap-center">
      <div className="flex gap-3">
        <FilterText filter={"Azucar"} className={"bg-blue-800 text-blue-300"} />
        <FilterText
          filter={"Vitaminas"}
          className={"bg-yellow-800 text-yellow-300"}
        />
      </div>
      <Nutrients />
      <Nutrients />
      <Nutrients />
      <Nutrients />
      <Nutrients />
      <Nutrients />
      <Nutrients />
      <Nutrients />
    </div>
  );
}
