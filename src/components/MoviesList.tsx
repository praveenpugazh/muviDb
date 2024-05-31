import { Link } from 'react-router-dom'
import { movieInterface } from '../pages/Home'
import MovieItem from './MovieItem'

interface movieList {
  movies: movieInterface[]
}

const MoviesList = ({ movies }: movieList) => {
  return (
    <div className='flex flex-wrap justify-around gap-5'>
      {movies.map((movie) => (
        <>
          <Link key={movie.id} to={`/${movie.id}`}>
            <MovieItem key={movie.id} movie={movie} />
          </Link>
        </>
      ))}
    </div>
  )
}

export default MoviesList

