import React from 'react'
import { Link } from 'react-router-dom'

export default function MediaCard({id,name,genres, image}) {
  return (
    <Link to={`/tvshow/${id}`}>
    <div className='me-3 HeroPage position-relative border-bottom-0' style={{width:'80vw', height:'350px'}}>
    <img className='w-100 h-100 rounded-3 'src={image?.original} alt={name} loading='lazy' />
    <div className='position-absolute bg-dark opacity-50 bottom-0 left-0 w-100 border-bottom-0 rounded-bottom' style={{height:'96px', zIndex:'0'}}/>
       <div className='d-flex flex-column position-absolute bottom-0 left-0 ps-4 w-100 justify-content-center' style={{zIndex:'10'}}>
           <h1 className='fs-5 text-white fw-5'> {name}</h1>
           <p className='text-white'> {genres.join(' - ')}</p>
       </div>
    </div>
    </Link>
  )
}
