import BotBar from "./BotBar";
import NavBar from "./NavBar";
import SearchInput from "@/components/SearchInput";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-bg max-w-[736px] mx-auto">
      {/* {searchClicked && (
        <div
          onClick={() => {
            setSearchClicked(false);
          }}
          className="absolute backdrop-blur-[1px] inset-0 z-40"
        ></div>
      )} */}
      <div className="flex flex-col gap-4">
        <div className="px-4 w-full max-w-[736px] z-30 fixed bg-gray-bg flex flex-col py-2 gap-4">
          <NavBar />
          {/* <SearchInput ActiveSearch={ActiveSearch} style={style} /> */}
          <SearchInput />
        </div>
        {children}
      </div>
      {/* <div> */}
      <BotBar />
      {/* </div> */}
    </div>
  );
}
