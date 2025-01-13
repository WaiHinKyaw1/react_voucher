import React from 'react'
import { HiChevronRight, HiHome, HiMiniHome, HiOutlineChevronRight } from 'react-icons/hi2'
import { Link, Links } from 'react-router-dom'

const Breadcrumb = ({currentPageTitle}) => {
  return (
    <div className='w-full flex gap-3 mb-3'>
      

<nav className="flex" aria-label="Breadcrumb">
  <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
    <li className="inline-flex items-center justify-center align-center">
      <Link to="/" className="inline-flex gap-1 items-center align-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
        <HiMiniHome/>
        Home
      </Link>
    </li>
    <li>
      <div className="flex items-center">
      <HiChevronRight />
        <p className='text-gray-500'>{currentPageTitle}</p>
      </div>
    </li>
    
  </ol>
</nav>


    </div>
  )
}

export default Breadcrumb