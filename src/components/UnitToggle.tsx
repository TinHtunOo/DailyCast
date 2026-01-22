interface UnitToggleProps {
  unit: "metric" | "imperial";
  onToggle: () => void;
}

export const UnitToggle = ({ unit, onToggle }: UnitToggleProps) => {
  return (
    <button
      onClick={onToggle}
      className="bg-blue-500 hover:cursor-pointer hover:bg-blue-400 text-slate-200  rounded-lg px-4 py-2 text-sm font-medium "
    >
      {unit === "metric" ? "°C" : "°F"}
    </button>
  );
};
