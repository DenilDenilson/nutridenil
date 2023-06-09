import Image from "next/image";
import MyImage from "./MyImage";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function CardFood({ id, title, image }) {
  const [mainInfo, setMainInfo] = useState(null);

  useEffect(() => {
    function fetchData() {
      if (!id) {
      } else {
        fetch(
          // `https://api.spoonacular.com/recipes/${id}/nutritionWidget.json?apiKey=7d5f2d4e10c14a04ae9dbd0a957f70ce`
        `https://api.spoonacular.com/food/ingredients/${id}/information?amount=1&apiKey=7d5f2d4e10c14a04ae9dbd0a957f70ce`
        )
          .then((res) => res.json())
          .then((data) => setMainInfo(data));
      }
    }
    fetchData();
  }, [id]);
  // Cambio hecho ee

  return (
    <>
      {mainInfo ? (
        <Link href={`/ingredients/${id}`}>
          <section className="h-[128px] shadow-cards grid grid-cols-[156px_minmax(100px,_1fr)] gap-4 pr-4 items-center rounded-lg overflow-hidden">
            <div className="h-[128px] w-[156px] relative overflow-hidden">
              <Image
                alt={title}
                fill={true}
                // width={156}
                // height={128}
                src={`https://spoonacular.com/cdn/ingredients_500x500/${image}`}
                className={"rounded-l-lg"}
              />
            </div>

            <div className=" flex flex-col gap-2">
              <h4 className=" w-full heading4 text-gray-title truncate overflow-hidden border-b-2 border-gray-title">
                {String(title).charAt(0).toUpperCase()  + String(title).slice(1)}
              </h4>
              <div>
                <p className="w-full truncate overflow-hidden small-regular text-gray-text">
                  <span className="small-semibold text-gray-text">
                    {/* {mainInfo?.calories} Kcal */}
                    {
                      // mainInfo?.nutrition?.nutrients.filter((nutrient) => {
                      //   nutrient == 'Calories'
                      // })[0].amount
                    } 
                    {
                      (mainInfo) ? 
                        mainInfo?.nutrition?.nutrients.filter((word) => {
                          return word.name == 'Calories'
                        })[0].amount
                      : 
                      0
                    }
                    &nbsp; Kcal
                  </span>
                </p>
                <p className="w-full truncate overflow-hidden small-regular text-gray-text">
                  <span className="small-semibold text-gray-text">
                    {/* {mainInfo?.carbs} */}
                    {
                      mainInfo?.nutrition?.nutrients.filter((word) => {
                        return word.name == 'Carbohydrates'
                      })[0].amount
                    }
                  </span>{" "}
                  de carbohidrato
                </p>
                <p className="w-full truncate overflow-hidden small-regular text-gray-text">
                  <span className="small-semibold text-gray-text">
                    {/* {mainInfo?.fat} */}
                    {
                      mainInfo?.nutrition?.nutrients.filter((word) => {
                        return word.name == 'Saturated Fat'
                      })[0].amount
                    }
                  </span>{" "}
                  de grasa saturada
                </p>
                <p className="w-full truncate overflow-hidden small-regular text-gray-text">
                  <span className="small-semibold text-gray-text">
                    {/* {mainInfo?.protein} */}
                    {
                      mainInfo?.nutrition?.nutrients.filter((word) => {
                        return word.name == 'Protein'
                      })[0].amount
                    }
                  </span>{" "}
                  de proteína
                </p>
              </div>
            </div>
          </section>
        </Link>
      ) : (
        <div>Loading ingredients ... </div>
      )}
    </>
  );
}
