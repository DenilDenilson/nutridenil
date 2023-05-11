import { useContext, useEffect, useState } from "react";
import MyImage from "./MyImage";
import Link from "next/link";
import { dataContext } from "../pages/_app";
import Image from "next/image";

export default function CarruselPlatos({ food, title }) {
  const [recipes, setRecipes] = useState(null);

  const { dataCache, setDataCache } = useContext(dataContext);

  useEffect(() => {
    function fetchData() {
      fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${food}&number=5&apiKey=7d5f2d4e10c14a04ae9dbd0a957f70ce`
      )
        .then((res) => res.json())
        .then((data) => setRecipes(data.results));
    }

    function saveDataInContext(food, recipes) {
      setDataCache({
        ...dataCache,
        [food]: recipes,
      });
    }
    fetchData();
    saveDataInContext(food, recipes);
    // console.log(dataCache);
  }, []);

  return (
    <div>
      <Link href={`search/${food}`}>
        <h2 className="normal-semibold mb-1 text-gray-text">{title}</h2>
      </Link>
      <div id="carrusel_platos" className="flex  gap-4 overflow-hidden overflow-x-scroll">
        {recipes ? (
          recipes.map((recipe, index) => (
            <Link
              key={recipe.id}
              href={`id/${recipe.id}`}
              // className="flex  overflow-x-scroll overflow-hidden gap-4"
            >
              <div className="relative h-24 w-32 overflow-hidden rounded-lg">
                <Image
                  alt={recipe.title}
                  src={recipe.image}
                  fill={true}
                ></Image>
              </div>
              {/* <MyImage
                className={"rounded-lg"}
                src={recipe.image}
                alt={recipe.title}
                key={index}
                height={96}
                width={128}
              /> */}
            </Link>
          ))
        ) : (
          <p>Cargando . . .</p>
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
