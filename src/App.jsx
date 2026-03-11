import { useDebounce } from "react-use";
import { useState, useEffect, use } from "react";
import Card from "./components/Card";
import Background from "./components/Background";
import SearchInput from "./components/SearchInput";
import { updateSearchCount, getTrendingMovies } from "./appwrite";
import Trending from "./components/Trending";

const API_BASE_URL = "https://api.themoviedb.org/3";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

function App() {
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [trendingMovies, setTrendingMovies] = useState([]);

  useDebounce(
    () => {
      setDebouncedSearchTerm(searchTerm);
    },
    500, // debounce delay of 500ms
    [searchTerm],
  );

  const fetchMovies = async (query = "") => {
    setLoading(true);
    setErrorMessage("");
    try {
      const endpoint = query
        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error(`Failed to fetch movies.`);
      }

      const data = await response.json();
      if (data.Response == "False") {
        setErrorMessage(data.Error || "Failed to fetch movies.");
        setMovies([]);
        return;
      }

      setMovies(data.results || []);

      if (query && data.results && data.results.length > 0) {
        const topResult = data.results[0];
        updateSearchCount(query, topResult); // Update search count in Appwrite with the top search result
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
      setErrorMessage("Failed to fetch movies. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const loadTrendingMovies = async () => {
    try {
      const trending = await getTrendingMovies();
      setTrendingMovies(trending);
    } catch (error) {
      console.error("Error loading trending movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  useEffect(() => {
    loadTrendingMovies();
  }, []);

  return (
    <Background>
      <div className="max-w-5xl mx-auto px-6 py-16 text-center">
        <header className="mb-12">
          <img src="./filmes.jpg" alt="Banner" className="w-64 mx-auto mb-4" />

          <h1 className="text-4xl md:text-5xl text-white font-bold leading-tight">
            Find
            <span className="text-purple-400"> Movies </span>
            You'll Enjoy Without the Hassle
          </h1>

          <p className="text-gray-400 mt-4">
            Discover movies quickly and easily.
          </p>

          <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>

        {trendingMovies.length > 0 && (
          <section className="space-y-8 mb-16">
            <h2 className="text-white text-2xl font-bold text-left">
              Trending Movies
            </h2>

            <Trending trendingMovies={trendingMovies} />
          </section>
        )}

        <section className="space-y-8">
          <h2 className="text-white text-2xl font-bold mb-6 text-left">
            All Movies
          </h2>

          {/* Se estiver carregando, mostra um spinner. */}
          {loading ? (
            <div className="flex flex-col items-center gap-3 py-10">
              <div className="w-10 h-10 border-4 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-white">Loading movies...</p>
            </div>
          ) : //  Se tiver erro, mostra a mensagem de erro.
          errorMessage ? (
            <p className="text-red-500 mt-4">{errorMessage}</p>
          ) : (
            //Caso contrário, mostra os filmes.
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-20">
              {movies.map((movie) => (
                <Card key={movie.id} movie={movie} />
              ))}
            </div>
          )}
        </section>
      </div>
    </Background>
  );
}

export default App;
