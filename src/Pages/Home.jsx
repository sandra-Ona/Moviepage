import React from 'react'
import Hero from '../components/Hero'
import HeroPage from '../components/HeroPage'
import UseFetch from '../hooks/UseFetch'
import HeroPcon from '../components/HeroPcon'

export default function Home() {
  const { data, error, loading } = UseFetch(
    'https://api.tvmaze.com/shows?page=1',
  )

  console.log(data)
  return (
    <>
      <Hero />
      <div className="container-xl mx-auto mt-5">
        <h3>TV SHOWS</h3>
        <HeroPage data={data} error={error} loading={loading} />
        <HeroPcon data={data} error={error} loading={loading} />
      </div>
    
    </>
  )
}
