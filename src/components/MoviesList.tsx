import { Link } from 'react-router-dom'
import { movieInterface } from '../pages/Home'
import MovieItem from './MovieItem'

interface movieList {
  movies: movieInterface[]
  isMovie: boolean
}

const MoviesList = ({ movies, isMovie }: movieList) => {
  return (
    <div className='flex flex-wrap justify-around gap-5'>
      {movies.map((movie) => (
        <>
          <Link
            key={movie.id}
            to={isMovie ? `/${movie.id}` : `/tv/${movie.id}`}
          >
            <MovieItem key={movie.id} movie={movie} />
          </Link>
        </>
      ))}
    </div>
  )
}

export default MoviesList

