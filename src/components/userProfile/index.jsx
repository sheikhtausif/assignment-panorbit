import React from 'react'

import './index.css'

const UserProfile = ({user, isOnlineStatus = false}) => {

  return (
    <div className="user-details">
      <div className="profile-pic">
        <img src={user.profilepicture} alt="user-profile" />
      </div>
      <p>{user.name}</p>
      {isOnlineStatus ? <div className={`online-user ${user.isActive ? 'active-user' : ''}`}></div> : null}
    </div>
  )
}

export default UserProfile