import BotBar from "@/components/BotBar";
import FoodContainer from "@/components/FoodContainer";
import GoodOrBad from "@/components/GoodOrBad";
import NavBar from "@/components/NavBar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function FoodId() {
  const [plato, setPlato] = useState(null);

  const router = useRouter();
  const pathSegments = router.asPath.split("/");
  const id = pathSegments[pathSegments.length - 1];

  useEffect(() => {
    function fetchData() {
      fetch(
        `https://api.spoonacular.com/recipes/${id}/nutritionWidget.json?apiKey=7d5f2d4e10c14a04ae9dbd0a957f70ce`
      )
        .then((data) => data.json())
        .then((data) => setPlato(data));
    }
  }, []);

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
