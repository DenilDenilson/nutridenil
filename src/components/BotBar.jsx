import IconBookmark from "./svg/IconBookmark";
import IconHome from "./svg/IconHome";
import IconTrend from "./svg/IconTrend";

export default function BotBar() {
  return (
    <nav className="flex justify-between h-16 items-center">
      <IconHome />
      <IconTrend />
      <IconBookmark />
    </nav>
  );
}
