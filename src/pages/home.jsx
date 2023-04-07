import BotBar from "@/components/BotBar";
import CarruselPlatos from "@/components/CarruselPlatos";
import MyImage from "@/components/MyImage";
import NavBar from "@/components/NavBar";
import SearchInput from "@/components/SearchInput";

// require("dotenv").config();

// console.log(process.env.NODE_ENV);
// console.log("Hola");

export default function Home() {
  return (
    <div className="h-screen bg-gray-bg">
      <div className="flex flex-col gap-4">
        <div className="px-4 w-full fixed bg-gray-bg flex flex-col py-2 gap-4">
          <NavBar />
          <SearchInput />
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
      <BotBar />
    </div>
  );
}
