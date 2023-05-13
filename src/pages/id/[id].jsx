import BotBar from "@/components/BotBar";
import FoodContainer from "@/components/FoodContainer";
import GoodOrBad from "@/components/GoodOrBad";
import NavBar from "@/components/NavBar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function FoodId() {
  const [plato, setPlato] = useState(null);
  const [title, setTitle] = useState(null);
  const [image, setImage] = useState(null);

  const router = useRouter();
  const pathSegments = router.asPath.split("/");
  const id = pathSegments[pathSegments.length - 1];

  useEffect(() => {
    function fetchData() {
      if (id === "[id]") {
      } else {
        fetch(
          `https://api.spoonacular.com/recipes/${id}/nutritionWidget.json?apiKey=7d5f2d4e10c14a04ae9dbd0a957f70ce`
        )
          .then((res) => res.json())
          .then((data) => setPlato(data))
          .catch((err) => console.log(err));

        fetch(
          `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=7d5f2d4e10c14a04ae9dbd0a957f70ce`
        )
          .then((res) => res.json())
          .then((data) => {
            setTitle(data.title);
            setImage(data.image);
          })
          .catch((err) => console.log(err));
      }
    }
    fetchData();
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-bg max-w-[736px] mx-auto">
      <div className="flex flex-col gap-4">
        <div className="px-4 w-full z-30 fixed bg-gray-bg flex flex-col py-2 gap-4">
          <NavBar />
        </div>
        <FoodContainer allPlato={plato} title={title} image={image} />
      </div>
      <BotBar />
    </div>
  );
}
