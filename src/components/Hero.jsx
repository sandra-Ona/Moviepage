import React from 'react'
import { Container } from 'react-bootstrap'

export default function Hero() {
  return (
    <div className='Cont 'style={{padding:'5rem'}}>
      <Container className='mx-auto text-center mt-5'>
        <h6 className='fw-bold' style={{color:'#a1a1a1'}}>MUST SEE TV SHOWS, NOW STREAMING</h6>
        <p className='mb-4 mx-auto text-white fw-light'>View thousands of shows and see details about your favorite tv shows and people.</p>
        <a className='fw-bold rounded-3 text-dark p-3 bg-white mt-4 'rel='noreferrer' href='https://www.tvmaze.com' target='_blank'>
         FIND OUT MORE</a>
        </Container>  
   </div>
  )
}
