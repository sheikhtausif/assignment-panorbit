import React, {useContext, useEffect, useRef, useState} from 'react'
import {UsersContext} from '../../context'
import UserProfile from '../userProfile'
import LogoutModal from '../logout'

import './index.css'

const Header = ({title}) => {
  const {user} = useContext(UsersContext)
  const [isOpen, setIsOpen] = useState(false)
  const modalRef = useRef()

  const handleOpen = () => setIsOpen(prev => !prev)

  useEffect(() => {
    const outSideClickOfModal = (e) => {
      if(isOpen && modalRef.current && !modalRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', outSideClickOfModal)

    // Cleanup
    return (() => document.removeEventListener('mousedown', outSideClickOfModal))
  }, [isOpen])

  return (
    <div className="main-header">
      <div className='header-container'>
        <p>{title}</p>
        <div className="header-profile">
          <span onClick={handleOpen}>
            <UserProfile user={user} />
          </span>
          {isOpen ? <span ref={modalRef}>< LogoutModal /></span> : null}
        </div>
      </div>
    </div>
  )
}

export default Header