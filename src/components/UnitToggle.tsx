interface UnitToggleProps {
  unit: "metric" | "imperial";
  onToggle: () => void;
}

export const UnitToggle = ({ unit, onToggle }: UnitToggleProps) => {
  return (
    <button
      onClick={onToggle}
      className="bg-white/80 hover:bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 shadow-sm"
    >
      {unit === "metric" ? "°C" : "°F"}
    </button>
  );
};
