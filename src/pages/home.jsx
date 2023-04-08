import BotBar from "@/components/BotBar";
import CarruselPlatos from "@/components/CarruselPlatos";
import Layout from "@/components/Layout";
import MyImage from "@/components/MyImage";
import NavBar from "@/components/NavBar";
import SearchInput from "@/components/SearchInput";
import { useRef, useState } from "react";

export default function Home() {
  // const [style, setStyle] = useState("small-regular");
  const [searchClicked, setSearchClicked] = useState(false);

  // const ActiveSearch = () => {
  //   setStyle("focus:outline-none z-50 focus:shadow-search bigger-regular");
  //   setSearchClicked(true);
  // };

  const homePage = useRef();

  console.log(homePage.current);

  return (
    <Layout>
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
    </Layout>
  );
}
