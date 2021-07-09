import React from 'react'

function Header() {
  return (
    <>
      <header>
        <nav className='navbar'>
          <a href='/' className='nav-logo'>
            <img
              src={process.env.PUBLIC_URL + '/images/logo.png'}
              className='h-28 w-28'
              alt='logo'
            />
          </a>
          <ul className='nav-menu'>
            <li className='nav-item text-white'>
              <a href='#about' className='nav-link'>
                About
              </a>
            </li>
            <li className='nav-item text-white'>
              <a href='/events' className='nav-link '>
                Events & Stories
              </a>
            </li>
            <li className='nav-item'>
              <a href='#contact' className='nav-link contact'>
                Contact us
              </a>
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
