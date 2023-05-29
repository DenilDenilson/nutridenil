import BotBar from "@/components/BotBar";
import IngredientContainer from "@/components/IngredientContainer";
import NavBar from "@/components/NavBar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function IngredientId() {
  const [mainInfo, setMainInfo] = useState(null);

  const router = useRouter()
  const pathSegments = router.asPath.split('/')
  const id = pathSegments[pathSegments.length - 1]

  useEffect(() => {
    function fetchData() {
      if (id === '[id]') {
      } else {
        fetch(
          // `https://api.spoonacular.com/recipes/${id}/nutritionWidget.json?apiKey=7d5f2d4e10c14a04ae9dbd0a957f70ce`
        `https://api.spoonacular.com/food/ingredients/${id}/information?amount=1&apiKey=7d5f2d4e10c14a04ae9dbd0a957f70ce`
        )
          .then((res) => res.json())
          .then((data) => setMainInfo(data));
      }
    }
    fetchData()
  }, [id])

  return (
    <div className="min-h-screen bg-gray-bg max-w-[736px] mx-auto">
      <div className="flex flex-col gap-4">
        <div className="px-4 w-full z-30 fixed bg-gray-bg flex flex-col py-2 gap-4">
          <NavBar />
        </div>
        <IngredientContainer allPlato={mainInfo} title={mainInfo?.original} image={`https://spoonacular.com/cdn/ingredients_500x500/${mainInfo?.image}`} />
      </div>
      <BotBar />
    </div>
  );
}