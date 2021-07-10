import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <header>
        <nav className='navbar'>
          <Link to='/' className='nav-logo'>
            <img
              src={process.env.PUBLIC_URL + '/images/logo.png'}
              className='h-28 w-28'
              alt='logo'
            />
          </Link>
          <ul className='nav-menu'>
            <li className='nav-item text-white'>
              <Link to='/#about' className='nav-link'>
                About
              </Link>
            </li>
            <li className='nav-item text-white'>
              <Link to='/events' className='nav-link'>
                Events & Stories
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/#contact' className='nav-link contact'>
                Contact us
              </Link>
            </li>
          </ul>
          <div className='hamburger'>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
