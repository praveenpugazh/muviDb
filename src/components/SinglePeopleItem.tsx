import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { API_KEY } from '../constants'

const SinglePeopleItem = () => {
  const { id } = useParams()
  //   const [personData, setPersonData] = useState([])
  const getPersonDetails = async (id: string) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}`
    )
    return data
  }

  const { isLoading, data } = useQuery({
    queryKey: ['getSinglePerson'],
    queryFn: () => id && getPersonDetails(id),
    staleTime: 100
  })
  if (isLoading) {
    return <p>Loading.....</p>
  }
  console.log(data)
  return (
    <div className='m-10'>
      <h1 className='text-4xl font-bold my-2'>{data?.name}</h1>
      <img
        src={`http://image.tmdb.org/t/p/w500/${data?.profile_path}`}
        alt=''
        width='300px'
      />
      <p className='text-gray-700 my-4'>
        DOB: <span className='text-gray-500'>{data?.birthday}</span>
      </p>
      <p className='text-gray-700 my-4'>
        Biography: <span className='text-gray-500'>{data?.biography}</span>
      </p>
      <p className='text-gray-700 my-4'>
        Popularity: <span className='text-gray-500'>{data?.popularity}</span>{' '}
      </p>
    </div>
  )
}

export default SinglePeopleItem

