import { StarIcon,HeartIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import timeFormat from '../lib/timeFormat';
import HeartButton from './HeartButton';
const MovieCard = ({movie}) => {
    const navigate = useNavigate();
  return (
    <div className='relative flex flex-col justify-between p-3 bg-gray-800 rounded-2xl hover:translate-y-1 transition duration-300 w-66 '>
        <div>   
           <div className="absolute top-4 right-4 z-10">
      <HeartButton movie={movie} />
    </div> 
      <img onClick={()=>{navigate(`/movies/${movie.id}`); scrollTo(0,0)}}
      src={movie.backdrop_path} alt="" className='rounded-lg h-52 w-full object-cover object-right-bottom cursor-pointer'/>
      <p className='font-semibold mt-2 truncate'>{movie.title}</p>
      <p className='text-sm text-gray-400 mt-2'>
        {new Date(movie.release_date).getFullYear()} - {movie.genres.slice(0,2).map(genre=>genre.name).join(' | ')} - {timeFormat(movie.runtime)}
      </p>
      <div className='flex items-center justify-between mt-4 pb-3'>
        <button onClick={()=>{navigate(`/movies/${movie.id}`); scrollTo(0,0)}} className='px-2 py-2 text-xs bg-blue-500 hover:bg-blue-600 transition rounded-full font-medium cursor-pointer'>Buy Tickets</button>
        <p className='flex items-center gap-1 text-sm text-gray-400 mt-1 pr-1'>
          
            <StarIcon className='w-4 h-4 text-yellow-300 hover:fill-yellow-400' />
          
            {movie.vote_average.toFixed(1)}
        </p>
      </div>
      </div>
    </div>
  )
}

export default MovieCard
