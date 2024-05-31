import { Link } from 'react-router-dom'
import { peopleInterface } from '../pages/PersonsHome'
import PeopleItem from './PeopleItem'

interface peopleList {
  peoples: peopleInterface[]
}

const PeopleList = ({ peoples }: peopleList) => {
  return (
    <div className='m-5 flex flex-wrap gap-5'>
      {peoples.map((people) => (
        <Link key={people.id} to={`/persons/${people.id}`}>
          <PeopleItem people={people} />
        </Link>
      ))}
    </div>
  )
}

export default PeopleList

