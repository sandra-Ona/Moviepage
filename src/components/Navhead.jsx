import React, { useState, useEffect } from 'react'
import { Twirl as Hamburger } from 'hamburger-react'
import { NavLink } from 'react-router-dom'
import Navlocker from './Navlocker'

function Navhead() {
  const [isOpen, setOpen] = useState(false)
  const [showNav, setShowNav] = useState(false)

  const changeBg = () => {
    window.scrollY >= 60 ? setShowNav(true) : setShowNav(false)
  }

  useEffect(() => {
    changeBg()
    window.addEventListener('scroll', changeBg)
    return () => {
      window.removeEventListener('scroll', changeBg)
    }
  }, [])

  const bgStyle = 'position-fixed w-100 top-0 bg-white'
  const defaultStyle = 'position-fixed w-100 top-0 bg-none'
 
  return (
    <div className={showNav ? bgStyle : defaultStyle} style={{ zIndex: '20' }}>
      <div className="container-xl mx-auto d-flex justify-content-between align-items-center px-2 py-3">
        <NavLink
          className="fw-bold fs-3"
          to="/"
          style={{ color: '#2dd4bf', zIndex: '20' }}
        >
          TV MAZE{' '}
        </NavLink>
        <div className="d-md-none" style={{ zIndex: '20',  color: '#a1a1a1'  }}>
          <Hamburger toggled={isOpen} toggle={setOpen} direction="right" />
        </div>
        <div className="d-none d-md-flex flex-grow-1 mx-4">
          <NavLink to="/tvshows" style={{ color: '#a1a1a1' }}>
            Tv shows{' '}
          </NavLink>
        </div>
        <div className="d-none d-md-flex gap-4">
          <NavLink to="/Search" style={{ color: '#a1a1a1' }}>
            Search
          </NavLink>
          <a
            className="fw-bold"
            href="http://www.tvmaze.com"
            rel="noreferrer"
            target="_blank"
            style={{ color: '#a1a1a1' }}
          >
            FIND OUT MORE
          </a>
        </div>
      </div>
      {isOpen && <Navlocker isOpen={isOpen} setOpen={setOpen} />}
    </div>
  )
}
export default Navhead
