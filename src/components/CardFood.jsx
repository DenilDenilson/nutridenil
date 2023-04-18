import Image from "next/image";
import MyImage from "./MyImage";
import { useEffect, useState } from "react";

export default function CardFood({ id, title, image }) {
  const [mainInfo, setMainInfo] = useState(null);

  useEffect(() => {
    function fetchData() {
      fetch(
        `https://api.spoonacular.com/recipes/${id}/nutritionWidget.json?apiKey=7d5f2d4e10c14a04ae9dbd0a957f70ce`
      )
        .then((res) => res.json())
        .then((data) => setMainInfo(data));
    }
    fetchData();
    console.log(mainInfo);
  }, [id]);
  // Cambio hecho ee

  return (
    <>
      {mainInfo ? (
        <section className="h-[128px] shadow-cards grid grid-cols-[156px_minmax(100px,_1fr)] gap-4 pr-4 items-center rounded-lg overflow-hidden">
          <div className="h-[128px] w-[156px] relative overflow-hidden">
            <Image
              alt={title}
              fill={true}
              // width={156}
              // height={128}
              src={image}
              className={"rounded-l-lg"}
            />
          </div>

          <div className=" flex flex-col gap-2">
            <h4 className=" w-full heading4 text-gray-title truncate overflow-hidden border-b-2 border-gray-title">
              {title}
            </h4>
            <div>
              <p className="small-regular text-gray-text">
                <span className="small-semibold text-gray-text">
                  {mainInfo?.calories} Kcal
                </span>
              </p>
              <p className="small-regular text-gray-text">
                <span className="small-semibold text-gray-text">
                  {mainInfo?.carbs}
                </span>{" "}
                de carbohidrato
              </p>
              <p className="small-regular text-gray-text">
                <span className="small-semibold text-gray-text">
                  {mainInfo?.fat}
                </span>{" "}
                de grasa saturada
              </p>
              <p className="small-regular text-gray-text">
                <span className="small-semibold text-gray-text">
                  {mainInfo?.protein}
                </span>{" "}
                de proteína
              </p>
            </div>
          </div>
        </section>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
}
