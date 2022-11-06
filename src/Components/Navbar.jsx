import { Divider, Link } from '@mui/material'
import React from 'react'
import logo from '../images/logo (1).png';
function Navbar() {
  return (
    <div >
    <header aria-label="Site Header" className="bg-white border-r-2 rounded-md ">
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="md:flex md:items-center md:gap-12">
          <a className="block text-blue-600" href="/">
            <span className="sr-only ">Home</span>
            <img src={logo} className="h-9" alt="" />
          </a>
        </div>
  
        <div className="hidden md:block">
          <nav aria-label="Site Nav">
            <ul className="flex items-center gap-6 text-sm">
              <li className='bg-blue-100 rounded-sm active:rounded-sm active:bg-blue-50 p-2 px-4'>
                <Link
                  className="text-gray-500 transition hover:text-gray-500/75 link link--elara "
                  href="/"
                  underline="none"
                >
                  Rent</Link>
              </li>
  
              <li className=' rounded-sm'>
              <Link
                  className="text-gray-500 transition hover:text-gray-900 link link--elara"
                  href="/"
                  underline="none"
                >
                  Buy</Link>
              </li>
  
              <li className='rounded-sm'>
              <Link
                  className="text-gray-500 transition hover:text-gray-900 link link--elara"
                  href="/"
                  underline="none"
                >
                  Sell</Link>
              </li>
  
              <li className='rounded-sm'>
              <Link
                  className="text-gray-500 transition hover:text-gray-900 link link--elara"
                  href="/"
                  underline="none"
                >
                  Manage Property</Link>
              </li>
  
              <li className='rounded-sm'>
              <Link
                  className="text-gray-500 transition hover:text-gray-900 link link--elara"
                  href="/"
                  underline="none"
                >
                 Resources</Link>
              </li>
  
            
            </ul>
          </nav>
        </div>
  
        <div className="flex items-center gap-4">
          <div className="sm:flex sm:gap-4">
            <a
              className="rounded-md bg-blue-500 px-5 py-2.5 text-sm font-medium text-white shadow"
              href="/"
            >
              Login
            </a>
  
            <div className="hidden sm:flex">
              <a
                className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-blue-600"
                href="/"
              >
                Register
              </a>
            </div>
          </div>
  
          <div className="block md:hidden">
            <button
              className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>  <Divider/>
  </div>

  )
}

export default Navbar