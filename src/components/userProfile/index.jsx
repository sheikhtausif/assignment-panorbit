import React from 'react'

import './index.css'

const UserProfile = ({profileUrl, username}) => {
  return (
    <div className="user-details">
      <div className="profile-pic">
        <img src={profileUrl} alt="user-profile" />
      </div>
      <p>{username}</p>
    </div>
  )
}

export default UserProfile