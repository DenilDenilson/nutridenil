import IconCalories from "./svg/IconCalories";

export default function Nutrients() {
  return (
    <div className="flex items-center">
      <IconCalories />
      <p className="small-regular text-gray-text">
        <span className="small-semibold text-gray-text">885 Kcal</span>
        de calorías
      </p>
    </div>
  );
}
