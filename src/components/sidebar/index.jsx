import React from 'react'
import {Link, useLocation} from 'react-router-dom'

import './index.css'

const Sidebar = () => {
  const {pathname} = useLocation()

  return (
    <div className='main-sidebar'>
      <div className="sidebar-container">
        <Link to='/profile' className={`${pathname === '/profile' ? 'active' : ''}`} >Profile</Link>
        <Link to='/posts' className={`${pathname === '/posts' ? 'active' : ''}`}>Posts</Link>
        <Link to='/gallery' className={`${pathname === '/gallery' ? 'active' : ''}`} >Gallery</Link>
        <Link to='/todo' className={`${pathname === '/todo' ? 'active' : ''}`} >ToDo</Link>
      </div>
    </div >
  )
}

export default Sidebar