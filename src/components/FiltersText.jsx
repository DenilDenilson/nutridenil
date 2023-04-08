export default function FilterText({ filter, className }) {
  return (
    <p
      className={`font-Manrope shadow-filter font-semibold px-2 py-1 rounded-full text-xs ${className}`}
    >
      {filter}
    </p>
  );
}
