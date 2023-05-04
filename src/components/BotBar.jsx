import Link from "next/link";
import IconBookmark from "./svg/IconBookmark";
import IconHome from "./svg/IconHome";
import IconTrend from "./svg/IconTrend";

export default function BotBar() {
  return (
    <nav className="bg-gray-bg z-30 border-t-[1px] border-y-gray-text bottom-0 px-4 w-full fixed flex justify-between h-[68px] items-center">
      {/* <div className="flex w-full items-center justify-between"> */}
      <Link href="home" className="w-[30%] grid place-content-center">
        <IconHome />
      </Link>

      <Link href="home" className="w-[30%] grid place-content-center">
        <IconTrend />
      </Link>
      <Link href="home" className="w-[30%] grid place-content-center">
        <IconBookmark />
      </Link>
      {/* </div> */}
    </nav>
  );
}
