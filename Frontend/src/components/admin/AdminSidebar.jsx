import React from 'react'
import assets from '../../assets/profile.png';
import { NavLink } from 'react-router-dom';
import { LayoutDashboardIcon, ListCollapseIcon, ListIcon, PlusSquareIcon } from 'lucide-react';
const AdminSidebar = () => {
    const user = {
        firstName: 'Admin',
        lastName: 'User',
        imageUrl : assets ,
    }
    const AdminNavLinks = [
        { name: 'Dashboard', href: '/admin', icon: LayoutDashboardIcon},
        { name: 'Add Shows', href: '/admin/add-shows', icon: PlusSquareIcon },
        { name: 'List Shows', href: '/admin/list-shows', icon: ListIcon },
        { name: 'List Bookings', href: '/admin/list-bookings', icon: ListCollapseIcon },
    ]
  return (
    <div className='min-h-[calc(100vh-64px)] md:flex md:flex-col items-center pt-8 max-w-13 md:max-w-60 w-full border-r border-blue-300/40 text-sm'>
      <img className='h-9 md:h-14 w-9 md:w-14 rounded-full mx-auto' src={user.imageUrl} alt='sidebar' />
      <p className='mt-2 text-base msx-md:hidden'>{user.firstName} {user.lastName}</p>
      <div className='w-full'>
        {AdminNavLinks.map((link,index)=>(
            <NavLink key={index} to={link.href} end className={({isActive})=> `relative flex items-center max-md:justify-center gap-2 w-full py-2.5 min-md:pl-10 first:mt-6 group ${isActive ? 'bg-blue-500/20 text-blue-500' : 'text-gray-300'}` } >
              {({isActive}) => (
                <>
                  <link.icon className={`w-5 h-5 ${isActive ? 'text-blue-500' : 'text-gray-300'}`} />
                  <p className={`max-md:hidden ${isActive ? 'text-blue-500' : ''}`}>{link.name}</p>
                  <span className={`w-1.5 h-10 rounded-l right-0 absolute ${isActive ? 'bg-blue-400/20' : ''}`} />
                </>
              )}
            </NavLink>
        ))}
      </div>
    </div>
  )
}

export default AdminSidebar
