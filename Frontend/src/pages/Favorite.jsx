import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import BlurCircle from "../components/BlurCircle";
const Favorites = () => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favs);
  }, []);

  return (
    <div className='relative my-40 mb-60 px-6 md:px-16 lg:px-40 xl:px-44 overflow-hidden min-h-[80vh]'>
      <BlurCircle top="150px" left="0px" />
      <BlurCircle bottom="50px" right="50px"/>
      <h1 className="text-lg font-medium my-4">
        Your Favorite Movies
      </h1>

      {favorites.length > 0 ? (
        <div className="flex flex-wrap max-sm:justify-center gap-8">
          {favorites.map((movie) => (
            <div
              key={movie.id || movie._id}
              className="transform hover:scale-105 transition-transform duration-300"
            >
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-24 text-gray-300">
          <p className="text-lg mb-4">No favorite movies yet..!</p>
          <button onClick={() => navigate('/movies')} className='flex items-center gap-1 px-6 py-3 text-sm bg-blue-500 hover:bg-blue-600 transition rounded-full font-medium cursor-pointer'>
            Browse Movies<ArrowRight className='w-5 h-5'/>
          </button>
        </div>
      )}
    </div>
  );
};

export default Favorites;
