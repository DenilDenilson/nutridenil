import { useEffect, useState } from "react";
import CardFood from "./CardFood";

export default function CardsFoodContainer({ title }) {
  const [recipes, setRecipes] = useState([1, 2, 3]);

  // useEffect(() => {
  //   function fetchData() {
  //     fetch(
  //       `https://api.spoonacular.com/recipes/complexSearch?query=${title}&number=5&apiKey=7d5f2d4e10c14a04ae9dbd0a957f70ce`
  //     )
  //       .then((res) => res.json())
  //       .then((data) => setRecipes(data.results));
  //   }
  //   fetchData();
  //   console.log(recipes);
  // }, [title]);

  return (
    <div className="pr-4 mb-4">
      <h2 className="normal-semibold text-gray-light mt-3 mb-4">
        {title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()}
      </h2>
      <div className="flex flex-col gap-4 ">
        {recipes ? (
          recipes.map((index, recipe) => (
            <CardFood
              id={index}
              // id={recipe.id}
              key={recipe.id}
              title={recipe.title}
              image={recipe.image}
            />
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
}
