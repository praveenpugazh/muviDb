import { movieInterface } from '../pages/Home'

interface movieItem {
  movie: movieInterface
}
const MovieItem = (props: movieItem) => {
  return (
    <div className='w-64 mb-6 flex flex-col rounded-md shadow-sm hover:shadow-md '>
      <img
        src={`http://image.tmdb.org/t/p/w185/${props.movie.poster_path}`}
        alt='movie poster'
        className='w-full rounded'
      />
      {/* <p>{props.movie.overview}</p> */}
      <div className='m-2'>
        <h1 className='text-xl text-gray-900 mt-4'>
          {props.movie.original_title}
        </h1>
        <p className='text-gray-500'>Popularity: {props.movie.popularity}</p>
        <p className='text-gray-500'>Average: {props.movie.vote_average}</p>
        <p className='text-gray-500'>Votes: {props.movie.vote_count}</p>
        <p className='text-gray-500'>
          Release date: {props.movie.release_date}
        </p>
      </div>
    </div>
  )
}

export default MovieItem

