import IconSearch from "./svg/IconSearch";

const InputWithIcon = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Ingrese el nombre de su comida"
        className="min-w-[343px] small-regular text-gray-lighter pl-8 pr-3 py-2 h-9 rounded-md bg-gray-BG_alt"
      />
      <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
        <IconSearch></IconSearch>
      </div>
    </div>
  );
};

export default InputWithIcon;
