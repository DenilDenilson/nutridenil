import NutriDenil from "./NutriDenil";
import IconSun from "./svg/IconSun";
import Person from "./svg/Person";

export default function NavBar() {
  return (
    <nav className="flex justify-between small-regular items-center">
      <NutriDenil />
      {/* <Person /> */}
      <IconSun />
    </nav>
  );
}
