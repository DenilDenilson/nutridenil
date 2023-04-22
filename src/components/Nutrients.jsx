import IconCalories from "./svg/IconCalories";

export default function Nutrients({ amount, title }) {
  return (
    <div className="flex items-center gap-4">
      <IconCalories />
      <p className="small-regular text-gray-text">
        <span className="small-semibold text-gray-text">{amount}</span>
        &nbsp;&nbsp;{title}
      </p>
    </div>
  );
}
