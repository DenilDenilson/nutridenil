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
    <div className="h-screen bg-[#FBFDFE] pl-4">
      <div className="flex flex-col gap-4">
        <NavBar />
        <SearchInput />
        <CarruselPlatos food={"meat"} title={"Carnes"} />
        <CarruselPlatos food={"soup"} title={"Sopas"} />
        <CarruselPlatos food={"dessert"} title={"Postres"} />
        <CarruselPlatos food={"drink"} title={"Bebidas"} />
        <CarruselPlatos food={"salad"} title={"Ensaladas"} />
        <CarruselPlatos food={"juice"} title={"Jugos"} />
        <CarruselPlatos food={"chicken"} title={"Pollo"} />
        <CarruselPlatos food={"pasta"} title={"Pastas"} />
      </div>
      <BotBar />
    </div>
  );
}
