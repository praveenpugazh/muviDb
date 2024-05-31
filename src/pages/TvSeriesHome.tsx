import axios from 'axios'
import Header from '../components/Header'
import { API_KEY } from '../constants'
import { useState } from 'react'
// import { movieInterface } from './Home'
import MoviesList from '../components/MoviesList'
import Pagination from '../components/Pagination'
import { keepPreviousData, useQuery } from '@tanstack/react-query'

const TvSeriesHome = () => {
  const [page, setPage] = useState(1)

  const getTvData = async (page: number) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&page=${page}`
    )
    return data
  }
  const { isLoading, data } = useQuery({
    queryKey: ['getTvData', page],
    queryFn: () => getTvData(page),
    staleTime: 1000 * 60,
    placeholderData: keepPreviousData
  })
  return (
    <div>
      <Header />
      {!isLoading ? (
        <MoviesList movies={data.results} isMovie={false} />
      ) : (
        <p>loading....</p>
      )}
      <Pagination page={page} setPage={setPage} />
    </div>
  )
}

export default TvSeriesHome

