import FilterText from "./FiltersText";
import FoodSlaiderContainer from "./FoodSliderContainer";
import GoodOrBad from "./GoodOrBad";
import MyImage from "./MyImage";
import Nutrients from "./Nutrients";

export default function FoodContainer() {
  return (
    <div className="mx-auto items-center flex flex-col gap-4 mt-[48px] mb-[68px]">
      <MyImage
        width={343}
        height={211}
        className={"w-[343px] h-[211px] rounded-t-lg"}
      />
      {/* I N F O R M A T I O N */}
      <div id="overlay-food-container" className="px-4 flex flex-col gap-3">
        <h3 className="text-gray-title underline font-rota text-xl">
          Pasta con guisantes y salchicha italiana
        </h3>
        <div className="flex overflow-x-auto snap-x snap-mandatory">
          <FoodSlaiderContainer />
          <FoodSlaiderContainer />
        </div>
        <GoodOrBad />
      </div>
    </div>
  );
}
