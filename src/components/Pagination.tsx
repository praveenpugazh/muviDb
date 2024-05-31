interface pagination {
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
}

const Pagination = ({ page, setPage }: pagination) => {
  return (
    <div className='flex justify-between items-center w-40 m-auto mb-10'>
      {page > 1 && (
        <button
          className='border border-black p-2 rounded-sm cursor-pointer'
          onClick={() => setPage(page - 1)}
        >
          Prev
        </button>
      )}
      <button
        className='border border-black p-2 rounded-sm cursor-pointer'
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination

