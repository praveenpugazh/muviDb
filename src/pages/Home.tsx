import { useState } from 'react'
import Header from '../components/Header'
import MoviesList from '../components/MoviesList'
import Pagination from '../components/Pagination'
import axios from 'axios'
import { API_KEY } from '../constants'
import { keepPreviousData, useQuery } from '@tanstack/react-query'

export interface movieInterface {
  id: number
  adult: boolean
  original_title: string
  overview: string
  popularity: string
  vote_average: number
  vote_count: number
  release_date: number
  backdrop_path: string
  poster_path: string
}

const Home = () => {
  const [page, setPage] = useState(1)
  const getData = async (page: number) => {
    console.log(page)
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}`
    )

    return data
  }
  const { isLoading, data } = useQuery({
    queryKey: ['getData', page],
    queryFn: () => getData(page),
    staleTime: 1000 * 60,
    placeholderData: keepPreviousData
  })
  return (
    <div>
      <Header />
      {!isLoading ? (
        <MoviesList movies={data.results} isMovie={true} />
      ) : (
        <p>Loading....</p>
      )}
      <Pagination page={page} setPage={setPage} />
    </div>
  )
}

export default Home

