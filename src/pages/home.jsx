import NavBar from "@/components/NavBar";
import SearchInput from "@/components/SearchInput";

export default function Home() {
  return (
    <div className="h-screen bg-[#FBFDFE]">
      <NavBar />
      <div>
        <input type="text" value={"Ingrese el nombre de su comida"} />
      </div>
    </div>
  );
}
