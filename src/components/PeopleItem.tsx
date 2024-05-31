import { peopleInterface } from '../pages/PersonsHome'

interface peopleItem {
  people: peopleInterface
}

const PeopleItem = ({ people }: peopleItem) => {
  return (
    <div>
      <div className='w-52 mb-6 flex flex-col rounded-md shadow-sm hover:shadow-md cursor-pointer'>
        <img
          src={`http://image.tmdb.org/t/p/w185/${people.profile_path}`}
          alt='movie poster'
          className='w-full rounded'
        />
        <div className='m-2'>
          <h1 className='text-xl text-gray-900 mt-4'>{people.name}</h1>
          <p className='text-gray-500'>Popularity: {people.popularity}</p>
        </div>
      </div>
    </div>
  )
}

export default PeopleItem

