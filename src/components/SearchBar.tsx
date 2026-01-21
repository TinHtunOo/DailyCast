import { Search } from "lucide-react";
import { useState } from "react";

interface SearchBarProps {
  onSearch: (city: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!city.trim()) return;
    onSearch(city.trim());
    setCity("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex ">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="w-full border border-gray-300 rounded-l-3xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 rounded-r-3xl text-white px-3 sm:px-6 py-2  transition-colors duration-200"
      >
        <span className="block sm:hidden">
          <Search size={16} />
        </span>
        <span className="sm:block hidden">Search</span>
      </button>
    </form>
  );
};
