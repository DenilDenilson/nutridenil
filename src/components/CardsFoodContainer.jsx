import CardFood from "./CardFood";

export default function CardsFoodContainer() {
  return (
    <div className="pr-4">
      <h2 className="normal-semibold text-gray-light mt-3 mb-4">
        Carnes con pasta
      </h2>
      <div className="flex flex-col gap-4 ">
        <CardFood />
        <CardFood />
        <CardFood />
        <CardFood />
        <CardFood />
      </div>
    </div>
  );
}
