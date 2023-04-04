import Search from "./svg/IconSearch";

export default function SearchInput() {
  return (
    <div className="flex items-center gap-1 p-2">
      <Search />
      <input
        className="min-w-[343px] bg-gray-BG_alt small-regular text-gray-lighter rounded"
        type="text"
        placeholder={"Ingrese el nombre de su comida"}
      />
    </div>
  );
}
