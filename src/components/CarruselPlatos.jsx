import { useEffect, useState } from "react";
import MyImage from "./MyImage";
import Link from "next/link";

export default function CarruselPlatos({ food, title }) {
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    function fetchData() {
      fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${food}&number=5&apiKey=7d5f2d4e10c14a04ae9dbd0a957f70ce`
      )
        .then((res) => res.json())
        .then((data) => setRecipes(data.results));
    }
    fetchData();
  }, [id]);

  return (
    <div>
      <Link href={`search/${food}`}>
        <h2 className="normal-semibold text-gray-text mb-1">{title}</h2>
      </Link>
      <div className="flex  overflow-x-scroll overflow-hidden gap-4">
        {recipes ? (
          recipes.map((recipe, index) => (
            // <div key={recipe.id}>
            // <MyImage src={recipe.image} alt={recipe.title} />
            // <MyImage
            //   className={"rounded-lg"}
            //   key={index}
            //   height={96}
            //   width={128}
            // />
            <MyImage
              className={"rounded-lg"}
              src={recipe.image}
              alt={recipe.title}
              key={index}
              height={96}
              width={128}
            />
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
