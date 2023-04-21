import BotBar from "@/components/BotBar";
import FoodContainer from "@/components/FoodContainer";
import GoodOrBad from "@/components/GoodOrBad";
import NavBar from "@/components/NavBar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function FoodId() {
  const [plato, setPlato] = useState({});

  const router = useRouter();
  const pathSegments = router.asPath.split("/");
  const id = pathSegments[pathSegments.length - 1];

  useEffect(() => {
    function fetchData() {
      // fetch(
      //   `https://api.spoonacular.com/recipes/${id}/nutritionWidget.json?apiKey=7d5f2d4e10c14a04ae9dbd0a957f70ce`
      // )
      fetch(
        "https://api.spoonacular.com/recipes/655055/nutritionWidget.json?apiKey=7d5f2d4e10c14a04ae9dbd0a957f70ce"
      )
        // .then((data) => data.json())
        // .then((data) => {
        //   if (data && data.calories) {
        //     // comprueba si hay datos y que sean JSON válidos
        //     setPlato(data);
        //   }
        // })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .then((data) => setPlato(data))
        .then((data) => console.log(data));
      // .catch((error) => console.log(error)); // maneja los errores de la API
    }
    fetchData();
    // console.log(plato);
  }, [id]);

  return (
    <div className="h-screen bg-gray-bg ">
      <div className="flex flex-col gap-4">
        <div className="px-4 w-full z-30 fixed bg-gray-bg flex flex-col py-2 gap-4">
          <NavBar />
        </div>
        <FoodContainer allPlato={plato} />
      </div>
      <BotBar />
    </div>
  );
}
