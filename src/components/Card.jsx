import { useState } from "react";

function Card({ title, imagem }) {
  const [count, setCount] = useState(0);
  const [hasliked, setHasLiked] = useState(false);

  return (
    <div
      className="bg-white rounded-xl shadow-md p-6 w-64 hover:shadow-xl transition flex flex-col items-center gap-4"
      onClick={() => setCount(count + 1)}
    >
      <img
        src={imagem || "https://via.placeholder.com/150"}
        alt={title}
        className="w-full h-40 object-cover rounded-lg"
      />
      <h1 className="text-xl font-semibold text-gray-800">{title}</h1>

      <button
        onClick={() => setHasLiked(!hasliked)}
        className="text-2xl hover:scale-110 transition"
      >
        {hasliked ? "❤️" : "🤍"}
      </button>
    </div>
  );
}

export default Card;
