import axios from 'axios'
import { useParams } from 'react-router-dom'
import { API_KEY } from '../constants'
import { useQuery } from '@tanstack/react-query'

const SingleMovieItem = () => {
  const { id } = useParams()
  // const [movieData, setMovieData] = useState<Record<string, unknown>[]>([])
  const getMovieDetails = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
    )
    return data
  }

  const { isLoading, data } = useQuery({
    queryKey: ['getSingleMovie'],
    queryFn: getMovieDetails,
    staleTime: 100
  })
  if (isLoading) {
    return <p>Loading....</p>
  }
  return (
    <div className='m-10'>
      <h1 className='text-4xl font-bold my-2'>{data.title}</h1>
      <img
        src={`http://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
        alt=''
      />
      <p className='text-gray-700 my-4'>
        Release data: <span className='text-gray-500'>{data.release_date}</span>
      </p>
      <p className='text-gray-700 my-4'>
        Overview: <span className='text-gray-500'>{data.overview}</span>
      </p>
      <p className='text-gray-700 my-4'>
        Runtime: <span className='text-gray-500'>{data.runtime}</span> mins
      </p>
      <p className='text-gray-700 my-4'>
        Rating: <span className='text-gray-500'>{data.vote_average}</span>
      </p>
    </div>
  )
}

export default SingleMovieItem

