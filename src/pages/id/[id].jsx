import BotBar from "@/components/BotBar";
import FoodContainer from "@/components/FoodContainer";
import GoodOrBad from "@/components/GoodOrBad";
import NavBar from "@/components/NavBar";

export default function FoodId() {
  return (
    <div className="h-screen bg-gray-bg ">
      <div className="flex flex-col gap-4">
        <div className="px-4 w-full z-30 fixed bg-gray-bg flex flex-col py-2 gap-4">
          <NavBar />
        </div>
        <FoodContainer />
      </div>
      <BotBar />
    </div>
  );
}
