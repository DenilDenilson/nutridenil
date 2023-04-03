import NutriDenil from "./NutriDenil";
import Person from "./svg/Person";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center">
      <NutriDenil />
      <Person />
    </nav>
  );
}
