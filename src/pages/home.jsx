import BotBar from "@/components/BotBar";
import CarruselPlatos from "@/components/CarruselPlatos";
import MyImage from "@/components/MyImage";
import NavBar from "@/components/NavBar";
import SearchInput from "@/components/SearchInput";
import { useRef, useState } from "react";

export default function Home() {
  const [style, setStyle] = useState("small-regular");
  const [searchClicked, setSearchClicked] = useState(false);

  const ActiveSearch = () => {
    setStyle("focus:outline-none z-50 focus:shadow-search bigger-regular");
    setSearchClicked(true);
  };

  const homePage = useRef();

  console.log(homePage.current);

  return (
    <div className="h-screen bg-gray-bg" ref={homePage}>
      {/* {searchClicked && (
        <div
          onClick={() => {
            setSearchClicked(false);
          }}
          className="absolute backdrop-blur-[1px] inset-0 z-40"
        ></div>
      )} */}
      <div className="flex flex-col gap-4">
        <div className="px-4 w-full z-30 fixed bg-gray-bg flex flex-col py-2 gap-4">
          <NavBar />
          <SearchInput ActiveSearch={ActiveSearch} style={style} />
        </div>
        <div className="pl-4 flex flex-col gap-4 mt-[112px] mb-[68px]">
          <CarruselPlatos food={"meat"} title={"Carnes"} />
          <CarruselPlatos food={"soup"} title={"Sopas"} />
          <CarruselPlatos food={"dessert"} title={"Postres"} />
          <CarruselPlatos food={"drink"} title={"Bebidas"} />
          <CarruselPlatos food={"salad"} title={"Ensaladas"} />
          <CarruselPlatos food={"juice"} title={"Jugos"} />
          <CarruselPlatos food={"chicken"} title={"Pollo"} />
          <CarruselPlatos food={"pasta"} title={"Pastas"} />
        </div>
      </div>
      {/* <div> */}
      <BotBar />
      {/* </div> */}
    </div>
  );
}
