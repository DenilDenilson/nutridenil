import CarruselPlatos from "@/components/CarruselPlatos";
import MyImage from "@/components/MyImage";
import NavBar from "@/components/NavBar";
import SearchInput from "@/components/SearchInput";

// require("dotenv").config();

// console.log(process.env.NODE_ENV);
// console.log("Hola");

export default function Home() {
  return (
    <div className="h-screen bg-[#FBFDFE]">
      <NavBar />
      <SearchInput />
      <CarruselPlatos />
    </div>
  );
}
