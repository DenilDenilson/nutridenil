import Image from "next/image";
import FilterText from "./FiltersText";
import FoodSlaiderContainer from "./FoodSliderContainer";
import GoodOrBad from "./GoodOrBad";
import MyImage from "./MyImage";
import Nutrients from "./Nutrients";

export default function FoodContainer({ allPlato, title, image }) {
  if (image === null || allPlato === null) {
    return <p>Cargando . . .</p>;
  } else {
    return (
      <div className="mx-auto items-center flex flex-col gap-4 mt-[48px] mb-[100px] ">
        <div className="h-[256px] w-full relative overflow-hidden rounded-t-lg before:content-[''] before:absolute before:inset-0  before:z-40 before:bg-gradient-to-t before:from-[#000000E6] before:to-[#00000000]">
          <Image
            alt={title}
            fill={true}
            // width={156}
            // height={128}
            // src={
            //   "https://th.bing.com/th/id/OIP.nlb551bP0GCPA8RSAd9TdwHaE6?pid=ImgDet&rs=1"
            // }
            src={image}
            className={""}
          />
          <h3 className="text-gray-bg absolute bottom-0 z-50 font-rota text-2xl mx-4 mb-2">
            {title}
          </h3>
        </div>

        {/*       
      <MyImage
        width={343}
        height={211}
        className={"w-[343px] h-[211px] rounded-t-lg"}
      /> */}
        {/* I N F O R M A T I O N */}
        <div id="overlay-food-container" className="px-4 flex flex-col gap-3">
          {/* <h3 className="text-gray-title underline font-rota text-xl">
          Pasta con guisantes y salchicha italiana
        </h3> */}
          <div className="flex overflow-x-auto snap-x snap-mandatory">
            <FoodSlaiderContainer isgood={true} info={allPlato} />
            <FoodSlaiderContainer isgood={false} info={allPlato} />
            {/* {allPlato.calories} */}
          </div>
          <GoodOrBad />
        </div>
      </div>
    );
  }
}
