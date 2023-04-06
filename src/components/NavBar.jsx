import NutriDenil from "./NutriDenil";
import Person from "./svg/Person";

export default function NavBar() {
  return (
    <nav className="pr-4 flex justify-between small-regular items-center">
      <NutriDenil />
      <Person />
    </nav>
  );
}
