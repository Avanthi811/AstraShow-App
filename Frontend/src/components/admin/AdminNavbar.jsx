import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
  return (
    <div className='flex items-center justify-between px-6 md:px-10 h-16 border-b border-blue-300/30'>
       <Link to='/' className='max-md:flex-1'>
        <h1 className='text-3xl font-bold text-white'><span className='text-blue-500'>Ⱥ</span>straShow</h1>
        </Link>
    </div>
  )
}

export default AdminNavbar
