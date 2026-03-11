import { useState } from "react";
import { Star } from "lucide-react";
import { Circle } from "lucide-react";

function Card({
  movie: { title, vote_average, poster_path, release_date, original_language },
}) {

  return (
    <div
      className="bg-gray-800 rounded-xl shadow-md p-6 w-64 hover:shadow-xl transition flex flex-col gap-4"
      onClick={() => setCount(count + 1)}
    >
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : "https://collections.lacma.org/sites/default/files/styles/medium/public/art-placeholder.jpg?itok=T4uSqLsE"
        }
        alt={title}
        className="w-full h-96 object-cover rounded-lg"
      />

      <div className="mt-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>

        <div className="flex items-center gap-2 mt-2">
          <div className="flex gap-2">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <p className="text-white">
              {vote_average ? vote_average.toFixed(1) : "N/A"}
            </p>
          </div>

          <Circle className="w-1 h-1 text-gray-400 fill-gray-400" />

          <p className="text-gray-400">
            {original_language.charAt(0).toUpperCase() +
              original_language.slice(1)}
          </p>

          <Circle className="w-1 h-1 text-gray-400 fill-gray-400" />

          <p className="text-gray-400">
            {release_date ? release_date.slice(0, 4) : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
