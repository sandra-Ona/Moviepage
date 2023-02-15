import React from 'react'
import { Image } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import UseFetch from '../hooks/UseFetch'

export default function Tvid() {
  const { tvid } = useParams()
  const { error, data, loading } = UseFetch(
    `https://api.tvmaze.com/shows/${tvid}`,
  )
  console.log('dataid', data)

  return (
    <div className="position-relative w-100" style={{ height: '700px' }}>
      {error && <p>Sorry we could not fetch this show at the moment.</p>}
      <Image
        src={data?.image?.original}
        alt={data.name}
        className="w-100 h-100 imgAdjust"
      />
      <div className="position-absolute w-100 h-100 bottom-0 left-0 opacity-100 bgGradient" />
      <div className="container-lg mx-auto position-absolute top-0 left-0 bottom-0 right-0 h-full align-items-center justify-content-center row">
        <div className="col-md-5">
          <h1 className="text-uppercase fs-2 text-white font-bold">
            {data.name}
          </h1>
          <h5 className='text-white text-uppercase font-bold'>
          {data.genres?.join(' · ')}{' '}{data.rating?.average}
          </h5>
          <p className='text-white font-bold text-uppercase'>
          {data.summary?.slice(0, 100) + '...' }
          </p>
        </div>
      </div>
    </div>
  )
}
