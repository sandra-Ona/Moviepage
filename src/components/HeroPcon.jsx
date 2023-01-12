import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../utils/Spinner'
import MediaCard2 from './MediaCard2'
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from 'react-icons/io'

export default function HeroPcon({ data, error, loading }) {
  const scrollRef = useRef()

  const scroll = (direction) => {
    const { current } = scrollRef
    direction === 'left'
      ? (current.scrollLeft -= 1000)
      : (current.scrollLeft += 1000)
  }
  const FindShow = data.filter(
    (accessMovie) => accessMovie.rating.average >= 7.5,
  )
  console.log(FindShow)
  return (
    <div className="mt-5">
      <Link to="/tvshows">
        <h5 className="text-dark mt-5">TOP RATED</h5>
      </Link>
      <div className="position-relative mt-1">
        <div ref={scrollRef} className="d-flex Hero1 scrollbody">
          {loading && <Spinner />}
          {error ||
            (FindShow && (
              <>
                {error && <p>Currently Unavailable</p>}

                {FindShow.map((scriptedtv) => (
                  <MediaCard2 key={scriptedtv.id} {...scriptedtv} />
                ))}
              </>
            ))}
        </div>
        <div
          className="d-none d-md-flex  justify-content-between align-items-center
          w-100 position-absolute" style={{top:'25%'}}
        >
          <IoMdArrowDropleftCircle
            className="text-white"
            size="3.2rem"
            style={{ cursor: 'pointer' }}
            onClick={() => scroll('left')}
          />
          <IoMdArrowDroprightCircle
            className="text-white"
            size="3.2rem"
            style={{ cursor: 'pointer' }}
            onClick={() => scroll('right')}
          />
        </div>
      </div>
    </div>
  )
}
