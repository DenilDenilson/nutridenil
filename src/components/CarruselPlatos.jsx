import { useEffect, useState } from "react";
import MyImage from "./MyImage";

export default function CarruselPlatos({ food, title }) {
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    function fetchData() {
      fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${food}&number=10&apiKey=7d5f2d4e10c14a04ae9dbd0a957f70ce`
      )
        .then((res) => res.json())
        .then((data) => setRecipes(data.results));
    }
    fetchData();
  }, []);

  console.log(recipes);
  return (
    <div>
      <h2 className="normal-semibold text-gray-text mb-1">{title}</h2>
      <div className="flex  overflow-x-scroll overflow-hidden gap-4">
        {recipes ? (
          recipes.map((recipe) => (
            // <div key={recipe.id}>
            <MyImage src={recipe.image} alt={recipe.title} />
            // </div>
          ))
        ) : (
          <p>"Cargando . . ."</p>
        )}
      </div>
    </div>
  );
}

// export async function getServerSideProps() {
//   const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
//   const data = await response.json();
//   const recipes = data.results; // Array de objetos

//   return {
//     props: {
//       recipes,
//     },
//   };
// }
