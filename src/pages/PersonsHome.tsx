import { useState } from 'react'
import Header from '../components/Header'
import { API_KEY } from '../constants'
import axios from 'axios'
import PeopleList from '../components/PeopleList'
import { useQuery } from '@tanstack/react-query'
import Pagination from '../components/Pagination'

export interface peopleInterface {
  id: number
  adult: boolean
  name: string
  known_for_department: string
  popularity: number
  original_name: string
  profile_path: string
  gender: number
  known_for: Record<string, unknown>[]
}

const PersonsHome = () => {
  const [page, setPage] = useState(1)

  const getPeopleData = async (page: number) => {
    console.log(page)
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&page=${page}`
    )
    return data
  }

  const { isLoading, data } = useQuery({
    queryKey: ['getPeopleData', page],
    queryFn: () => getPeopleData(page),
    staleTime: 1000
  })
  return (
    <div>
      <Header />
      {!isLoading ? <PeopleList peoples={data.results} /> : <p>Loading...</p>}
      <Pagination page={page} setPage={setPage} />
    </div>
  )
}

export default PersonsHome

