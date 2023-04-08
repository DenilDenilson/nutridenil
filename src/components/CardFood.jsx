import MyImage from "./MyImage";

export default function CardFood() {
  return (
    <section className="h-[128px] shadow-cards grid grid-cols-[156px_minmax(100px,_1fr)] gap-4 pr-4 items-center rounded-lg overflow-hidden">
      {/* <MyImage width={156} height={128} className={"rounded-l-lg"} /> */}
      <div className="h-[128px] w-[156px] bg-[url('https://th.bing.com/th/id/OIP.nlb551bP0GCPA8RSAd9TdwHaE6?pid=ImgDet&rs=1')] bg-cover"></div>
      <div className=" flex flex-col gap-2">
        <h4 className=" w-full heading4 text-gray-title truncate overflow-hidden border-b-2 border-gray-title">
          Pasta con pollo y Chorizo a la vergaaa
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
