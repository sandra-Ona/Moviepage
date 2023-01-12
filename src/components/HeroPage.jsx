import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../utils/Spinner'
import MediaCard from './MediaCard'
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from 'react-icons/io'

export default function HeroPage({ data, error, loading }) {
  const scrollRef = useRef()

  const scroll = (direction) => {
    const { current } = scrollRef
    direction === 'left'
      ? (current.scrollLeft -= 1000)
      : (current.scrollLeft += 1000)
  }
  const FindTv = data.filter(
    (accessContent) => accessContent.type === 'Reality',
  )
  console.log(FindTv)
  return (
    <div className="mt-5">
      <Link to="/tvshows">
        <h5 className="text-dark"> FEATURED TV</h5>
      </Link>
      <div className="position-relative">
        <div ref={scrollRef} className="d-flex Hero1 scrollbody">
          {loading && <Spinner />}
          {error ||
            (FindTv && (
              <>
                {error && <p>Currently Unavailable</p>}

                {FindTv.map((realitytv) => (
                  <MediaCard key={realitytv.id} {...realitytv} />
                ))}
              </>
            ))}
        </div>
        <div
          className="d-none d-md-flex  justify-content-between align-items-center
          w-100 position-absolute top-50"
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
