import Link from "next/link";
import IconBookmark from "./svg/IconBookmark";
import IconHome from "./svg/IconHome";
import IconTrend from "./svg/IconTrend";

export default function BotBar() {
  return (
    <nav className="fixed bottom-0 z-30 flex h-[68px] w-full items-center justify-between border-t-[1px] border-y-gray-text bg-gray-bg px-4">
      {/* <div className="flex w-full items-center justify-between"> */}
      <Link href="/home" className="grid w-[30%] place-content-center">
        <IconHome />
      </Link>

      <Link href="/home" className="grid w-[30%] place-content-center">
        <IconTrend />
      </Link>
      <Link href="/home" className="grid w-[30%] place-content-center">
        <IconBookmark />
      </Link>
      {/* </div> */}
    </nav>
  );
}
