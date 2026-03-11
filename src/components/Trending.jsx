function Trending({ trendingMovies }) {
  return (
    <div className="flex gap-10 overflow-x-auto scrollbar-hide pb-4">
      {trendingMovies.map((movie, index) => (
        <li key={movie.$id} className="flex items-center gap-4 min-w-fit">
          <p className="text-7xl font-extrabold text-transparent [-webkit-text-stroke:3px_white] leading-none">
            {index + 1}
          </p>

          <div>
            <img
              src={
                movie.poster_url ||
                "https://collections.lacma.org/sites/default/files/styles/medium/public/art-placeholder.jpg?itok=T4uSqLsE"
              }
              alt={movie.title}
              className="w-32 h-48 object-cover rounded-lg"
            />
            <p className="text-white text-lg font-bold">{movie.title}</p>
          </div>
        </li>
      ))}
    </div>
  );
}

export default Trending;
