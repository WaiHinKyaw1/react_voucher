import React from 'react'
import { Link } from 'react-router-dom'

const ModuleBtn = ({name,icon,url}) => {
  return (
    <Link to={url} className='flex flex-col gap-3 bg-blue-500 items-center text-white p-5 rounded-lg'>
        {icon}
        {name}
    </Link>
  )
}

export default ModuleBtn