import React, {useContext} from 'react'
import {useNavigate} from 'react-router'
import {UsersContext} from '../../context'
import UserProfile from '../userProfile'

import './index.css'

const LogoutModal = () => {
  const navigate = useNavigate()
  const {user, setUser, usersData} = useContext(UsersContext)

  const remainingUsers = usersData.filter((elem) => elem.id !== user.id)

  const handleSetUser = (user) => setUser(user)

  const handleLogout = () => navigate('/')

  return (
    <div className='logout-container'>
      <div className="logout-profile-container">
        <img src={user.profilepicture} alt="profile-pic" />
      </div>
      <p className='user-name'>{user.name}</p>
      <p className='user-email'>{user.email}</p>
      <span className='logout-user-details' onClick={() => handleSetUser(remainingUsers[0])}>
        <UserProfile user={remainingUsers[0]} />
      </span>
      <span className='logout-user-details' onClick={() => handleSetUser(remainingUsers[1])}>
        <UserProfile user={remainingUsers[1]} />
      </span>
      <button className='logout-button' onClick={handleLogout}>
        Sign Out
      </button>
    </div>
  )
}

export default LogoutModal