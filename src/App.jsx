import Card from "./components/Card";
import Background from "./components/Background";
import { useState, useEffect, use } from "react";
import SearchInput from "./components/SearchInput";

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
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async () => {
    setLoading(true);
    setErrorMessage("");
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

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
      console.log(data);
      setMovies(data.results || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setErrorMessage("Failed to fetch movies. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <Background>
      <div className="wrapper max-w-5xl mx-auto px-6 py-16 text-center">
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

        <section className="all-movies space-y-8">
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
            <div className="flex flex-wrap justify-center gap-6">
              {movies.map((movie) => (
                <Card
                  key={movie.id}
                  title={movie.title}
                  imagem={movie.poster_path}
                />
              ))}
            </div>
          )}
        </section>
      </div>
    </Background>
  );
}

export default App;
