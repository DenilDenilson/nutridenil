import FilterText from "./FiltersText";
import MyImage from "./MyImage";
import Nutrients from "./Nutrients";

export default function FoodContainer() {
  return (
    <div className="pl-4 flex flex-col gap-4 mt-[48px] mb-[68px]">
      <MyImage
        width={343}
        height={211}
        className={"w-[343px] h-[211px] rounded-t-lg"}
      />
      <div className="px-4">
        <h3 className="text-gray-title underline font-rota text-xl">
          Pasta con guisantes y salchicha italiana
        </h3>
        <div className="flex gap-3">
          <FilterText filter={"Azucar"} />
          <FilterText filter={"Vitaminas"} />
        </div>
        <Nutrients />
      </div>
    </div>
  );
}
