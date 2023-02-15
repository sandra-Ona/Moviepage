import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import Spinner from '../utils/Spinner'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import MediaCard from '../components/MediaCard'
import axios from 'axios'

export default function Search() {
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [filterResult, setFilterResult] = useState([])

  console.log(query)
  console.log(filterResult)

  useEffect(() => {
    const getSearch = setTimeout(async () => {
      setLoading(true)
      try {
        const results = await axios.get(
          `https://api.tvmaze.com/search/shows?q=${query}`,
        )
        setFilterResult(results.data)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }, 2000)
    return () => clearTimeout(getSearch)
  }, [query])

  if (loading) {
    return <Spinner />
  }

  return (
    <div className="container-xl mx-auto py-5" style={{ marginTop: '7rem' }}>
      <div className="position-relative pb-2 mb-4 border-bottom border-dark">
        <input
          className="small w-100 no-outline border-0"
          id="search"
          type="text"
          placeholder="ENTER SEARCH TERMS"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query.length > 0 && (
          <AiOutlineClose
            className="position-absolute end-0"
            onClick={() => setQuery('')}
            style={{ cursor: 'pointer' }}
          />
        )}
      </div>

      {query.length > 0 && filterResult <= 0 && (
        <p> Sorry, we could not find it!</p>
      )}

      {(error || filterResult) && (
        <>
          {error && <p className="text-center">{error.message}</p>}
          {filterResult && (
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4 }}
              className="mt-5 mx-auto"
            >
              <Masonry gutter="30px">
                {filterResult.map((movies) => (
                  <MediaCard key={movies.show.id} {...movies.show} />
                ))}
              </Masonry>

            </ResponsiveMasonry>
          )}
        </>
      )}
    </div>
  )
}
