import { useEffect, useState } from "react";
import { HeartIcon } from "lucide-react";

const HeartButton = ({ movie }) => {
  const [liked, setLiked] = useState(false);

  
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFavorite = favorites.some((fav) => fav.id === movie.id);
    setLiked(isFavorite);
  }, [movie.id]);

  
  const toggleFavorite = (e) => {
    e.stopPropagation();
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    let updatedFavorites;

    if (liked) {
      updatedFavorites = favorites.filter((fav) => fav.id !== movie.id);
    } else {
      updatedFavorites = [...favorites, movie];
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setLiked(!liked);
  };

  return (
    <div
      onClick={toggleFavorite}
      className="p-2 rounded-full hover: transition active:scale-95 cursor-pointer"
    >
      <HeartIcon
        className={`w-5 h-5 transition-all duration-300 ${
          liked
            ? "text-red-500 fill-red-500"
            : "text-white hover:text-red-500 hover:fill-red-500"
        }`}
      />
    </div>
  );
};

export default HeartButton;
