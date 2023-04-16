import Image from "next/image";
import MyImage from "./MyImage";

export default function CardFood({ id, title, image }) {
  // const [imagen, setImagen] = useState(
  //   "https://th.bing.com/th/id/OIP.nlb551bP0GCPA8RSAd9TdwHaE6?pid=ImgDet&rs=1"
  // );

  return (
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
            <span className="small-semibold text-gray-text">885 Kcal</span>
          </p>
          <p className="small-regular text-gray-text">
            <span className="small-semibold text-gray-text">72 g</span> de
            carbohidrato
          </p>
          <p className="small-regular text-gray-text">
            <span className="small-semibold text-gray-text">70 g</span> de grasa
            saturada
          </p>
          <p className="small-regular text-gray-text">
            <span className="small-semibold text-gray-text">20 g</span> de
            proteína
          </p>
        </div>
      </div>
    </section>
  );
}
