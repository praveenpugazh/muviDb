import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-blue-200 p-6 mb-4 flex'>
      <h1 className='text-2xl'>The DataBase</h1>
      <nav className='mx-10 flex list-none items-center gap-10'>
        <Link to='/'>
          <li className='cursor-pointer'>Movies</li>
        </Link>
        <Link to='/tv'>
          <li className='cursor-pointer'>TV</li>
        </Link>
        <Link to='/persons'>
          <li className='cursor-pointer'>People</li>
        </Link>
      </nav>
    </div>
  )
}

export default Header

