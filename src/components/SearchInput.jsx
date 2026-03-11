import { Search } from "lucide-react";

function SearchInput({ searchTerm, setSearchTerm }) {
  return (
    <div className="w-full max-w-xl mx-auto mt-8 mb-10">
      <div className="flex items-center gap-3 bg-gray-800 p-3 rounded-xl border border-gray-700">
        <Search className="w-5 h-5 text-gray-400" />

        <input
          type="text"
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none"
        />
      </div>
    </div>
  );
}

export default SearchInput;