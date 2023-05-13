import { useEffect, useState } from "react";
import CardFood from "./CardFood";
import CardFoodIngredients from "./CardFoodIngredients";

export default function CardsFoodContainer({ title }) {
  const [recipes, setRecipes] = useState(null);
  const [ingredients, setIngredients] = useState(null);

  useEffect(() => {
    function fetchData() {
      if (title === "[food]") {
      } else {
        fetch(
          `https://api.spoonacular.com/recipes/complexSearch?query=${title}&number=2&apiKey=7d5f2d4e10c14a04ae9dbd0a957f70ce`
        )
          .then((res) => res.json())
          .then((data) => setRecipes(data.results))

        fetch(
          `https://api.spoonacular.com/food/ingredients/search?query=${title}&number=5&apiKey=7d5f2d4e10c14a04ae9dbd0a957f70ce`
        )
        .then(res => res.json())
        .then(data => setIngredients(data.results))
      }
    }
    fetchData();
    // console.log(recipes);
  }, [title]);

  return (
    <div className="pr-4 mb-4">
      <h2 className="normal-semibold text-gray-light mt-3 mb-4">
        {title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()}
      </h2>
      <div className="flex flex-col gap-4 ">
        {ingredients ? (
          ingredients.map((ingredient) => (
            <CardFoodIngredients
              // id={index}
              id={ingredient.id}
              key={ingredient.id}
              title={ingredient.name}
              image={ingredient.image}
            />
            // <p>{recipe.id}</p>
          ))
        ) : (
          <h1>Loading ingredients...</h1>
        )}
        {recipes ? (
          recipes.map((recipe) => (
            <CardFood
              // id={index}
              id={recipe.id}
              key={recipe.id}
              title={recipe.title}
              image={recipe.image}
            />
            // <p>{recipe.id}</p>
          ))
        ) : (
          <h1>Loading recipes...</h1>
        )}
      </div>
    </div>
  );
}
