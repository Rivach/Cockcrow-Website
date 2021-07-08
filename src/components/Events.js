import React from 'react'

export default function Events() {
  return (
    <div className='join-us'>
      <header>
        <nav class='navbar'>
          <a href='index.html' class='nav-logo'>
            <img
              src={process.env.PUBLIC_URL + 'images/logo.png'}
              class='h-28 w-28'
              alt=''
            />
          </a>
          <ul class='nav-menu'>
            <li class='nav-item'>
              <a href='index.html#about' class='nav-link'>
                About
              </a>
            </li>
            <li class='nav-item'>
              <a href='events.html' class='nav-link'>
                Events & Stories
              </a>
            </li>
            <li class='nav-item'>
              <a href='index.html#contact' class='nav-link contact'>
                Contact us
              </a>
            </li>
          </ul>
          <div class='hamburger'>
            <span class='bar2'></span>
            <span class='bar2'></span>
            <span class='bar2'></span>
          </div>
        </nav>
      </header>
      <h1
        style={{
          textAlign: 'center',
          fontFamily: 'Tangerine',
          fontWeight: 500,
        }}
        class='mt-6 text-7xl'
      >
        Events & Stories
      </h1>
      <section
        class=' body-font'
        style={{
          paddingBottom: '20%',
          background: 'linear-gradient(#0085FF,#fff)',
        }}
      >
        <div class='container px-5 py-12 blogs  mx-auto'>
          <div class='flex flex-wrap -m-4'>
            <div class='blog p-12 md:w-1/2'>
              <div class='h-full' style={{ fontFamily: 'raleway' }}>
                <img
                  class='lg:h-72 md:h-36 w-full object-cover object-center '
                  style={{ zIndex: 1 }}
                  src={process.env.PUBLIC_URL + './event-pics/event1.jpg'}
                  alt='blog'
                />
                <div class='p-6 story'>
                  <h2
                    class='tracking-widest text-xs title-font font-medium text-gray-900 mb-4'
                    style={{
                      fontFamily: 'raleway',
                      textDecoration: 'underline',
                      textUnderlineOffset: 4,
                      textDecorationThickness: 2,
                      textDecorationColor: 'blue',
                    }}
                  >
                    January 22, 2021
                  </h2>
                  <h1 class='title-font text-lg font-bold text-black mb-3'>
                    Title of Event
                  </h1>
                  <p class='leading-relaxed mb-8'>
                    Place and Categoty of event.
                  </p>
                  <div class='flex items-center flex-wrap '>
                    <a
                      class='bg-blue-500 p-2 py-1 text-white inline-flex items-center md:mb-2 lg:mb-0'
                      style={{ backgroundColor: '#0085FF' }}
                      href='blog.html'
                    >
                      {' '}
                      Read More
                      <svg
                        class='w-4 h-4 ml-2'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        stroke-width='2'
                        fill='none'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      >
                        <path d='M5 12h14'></path>
                        <path d='M12 5l7 7-7 7'></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class='blog p-12 md:w-1/2'>
              <div class='h-full' style={{ fontFamily: 'raleway' }}>
                <img
                  class='lg:h-72 md:h-36 w-full object-cover object-center '
                  style={{ zIndex: 1 }}
                  src={process.env.PUBLIC_URL + 'event-pics/event2.jpg'}
                  alt='blog'
                />
                <div class='p-6 story'>
                  <h2
                    class='tracking-widest text-xs title-font font-medium text-gray-900 mb-4'
                    style={{
                      fontFamily: 'raleway',
                      textDecoration: 'underline',
                      textUnderlineOffset: 4,
                      textDecorationThickness: 2,
                      textDecorationColor: 'blue',
                    }}
                  >
                    January 22, 2021
                  </h2>
                  <h1 class='title-font text-lg font-bold text-black mb-3'>
                    Title of Event
                  </h1>
                  <p class='leading-relaxed text-lg text-black mb-8'>
                    Place and Categoty of event.
                  </p>
                  <div class='flex items-center flex-wrap '>
                    <a
                      class=' p-2 py-1 text-white inline-flex items-center md:mb-2 lg:mb-0'
                      style={{ backgroundColor: '#0085FF' }}
                      href='blog.html'
                    >
                      Read More
                      <svg
                        class='w-4 h-4 ml-2'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        stroke-width='2'
                        fill='none'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      >
                        <path d='M5 12h14'></path>
                        <path d='M12 5l7 7-7 7'></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class='blog p-12 md:w-1/2'>
              <div class='h-full' style={{ fontFamily: 'raleway' }}>
                <img
                  class='lg:h-72 md:h-36 w-full object-cover object-center '
                  style={{ zIndex: 1 }}
                  src='./event-pics/event3.jpg'
                  alt='blog'
                />
                <div class='p-6 story'>
                  <h2
                    class='tracking-widest text-xs title-font font-medium text-gray-900 mb-4'
                    style={{
                      fontFamily: 'raleway',
                      textDecoration: 'underline',
                      textUnderlineOffset: 4,
                      textDecorationThickness: 2,
                      textDecorationColor: 'blue',
                    }}
                  >
                    January 22, 2021
                  </h2>
                  <h1 class='title-font text-lg font-bold text-black mb-3'>
                    Title of Event
                  </h1>
                  <p class='leading-relaxed mb-8'>
                    Place and Categoty of event.
                  </p>
                  <div class='flex items-center flex-wrap '>
                    <a
                      class='bg-blue-500 p-2 py-1 text-white inline-flex items-center md:mb-2 lg:mb-0'
                      style={{ backgroundColor: '#0085FF' }}
                      href='blog.html'
                    >
                      Read More
                      <svg
                        class='w-4 h-4 ml-2'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        stroke-width='2'
                        fill='none'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      >
                        <path d='M5 12h14'></path>
                        <path d='M12 5l7 7-7 7'></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class='blog p-12 md:w-1/2'>
              <div class='h-full' style={{ fontFamily: 'raleway' }}>
                <img
                  class='lg:h-72 md:h-36 w-full object-cover object-center '
                  style={{ zIndex: 1 }}
                  src='./event-pics/event4.jpg'
                  alt='blog'
                />
                <div class='p-6 story'>
                  <h2
                    class='tracking-widest text-xs title-font font-medium text-gray-900 mb-4'
                    style={{
                      fontFamily: 'raleway',
                      textDecoration: 'underline',
                      textUnderlineOffset: 4,
                      textDecorationThickness: 2,
                      textDecorationColor: 'blue',
                    }}
                  >
                    January 22, 2021
                  </h2>
                  <h1 class='title-font text-lg font-bold text-black mb-3'>
                    Title of Event
                  </h1>
                  <p class='leading-relaxed mb-8'>
                    Place and Categoty of event.
                  </p>
                  <div class='flex items-center flex-wrap '>
                    <a
                      class=' p-2 py-1 text-white inline-flex items-center md:mb-2 lg:mb-0'
                      style={{ backgroundColor: '#0085FF' }}
                      href='blog.html'
                    >
                      Read More
                      <svg
                        class='w-4 h-4 ml-2'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        stroke-width='2'
                        fill='none'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      >
                        <path d='M5 12h14'></path>
                        <path d='M12 5l7 7-7 7'></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
