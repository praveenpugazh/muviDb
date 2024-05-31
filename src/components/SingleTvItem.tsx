import axios from 'axios'
import { useParams } from 'react-router-dom'
import { API_KEY } from '../constants'
import { useQuery } from '@tanstack/react-query'

const SingleTvItem = () => {
  const { id } = useParams()
  const getTvDetails = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`
    )
    return data
  }

  const { isLoading, data } = useQuery({
    queryKey: ['getSingleTv'],
    queryFn: getTvDetails,
    staleTime: 100
  })
  if (isLoading) {
    return <p>Loading....</p>
  }
  return (
    <div className='m-10'>
      <h1 className='text-4xl font-bold my-2'>{data.name}</h1>
      <img
        src={`http://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
        alt=''
      />
      <p className='text-gray-700 my-4'>
        Overview: <span className='text-gray-500'>{data.overview}</span>
      </p>

      <p className='text-gray-700 my-4'>
        Rating: <span className='text-gray-500'>{data.vote_average}</span>
      </p>
    </div>
  )
}

export default SingleTvItem

