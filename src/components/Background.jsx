import { Film, Clapperboard, Ticket, Tv, Play, Star } from "lucide-react";

function Background({ children }) {
  const icons = [Film, Clapperboard, Ticket, Tv, Play, Star];
  const items = Array.from({ length: 30 });

  return (
    <div className="relative w-screen min-h-screen bg-black overflow-hidden p-2">
      {items.map((_, i) => {
        const Icon = icons[Math.floor(Math.random() * icons.length)];

        return (
          <Icon
            key={i}
            className={`absolute text-white opacity-20 select-none ${
              i % 2 === 0 ? "animate-float" : "animate-drift"
            }`}
            style={{
              width: `${60 + Math.random() * 80}px`,
              height: `${60 + Math.random() * 80}px`,
              top: `${Math.random() * 90}%`,
              left: `${Math.random() * 90}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        );
      })}

      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default Background;