import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import TvSeriesHome from './pages/TvSeriesHome'
import PersonsHome from './pages/PersonsHome'
import SingleMovie from './pages/SingleMovie'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import SinglePerson from './pages/SinglePerson'
import SingleTvSeries from './pages/SingleTvSeries'

const queryClient = new QueryClient()

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/:id',
      element: <SingleMovie />
    },
    {
      path: '/tv',
      element: <TvSeriesHome />
    },
    {
      path: '/tv/:id',
      element: <SingleTvSeries />
    },
    {
      path: '/persons',
      element: <PersonsHome />
    },
    {
      path: '/persons/:id',
      element: <SinglePerson />
    }
  ])

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  )
}

export default App

