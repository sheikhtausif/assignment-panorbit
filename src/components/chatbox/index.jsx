import React, {useContext, useState} from 'react'
import {BsChatRight} from 'react-icons/bs';
import {IoIosArrowUp} from 'react-icons/io';
import {UsersContext} from '../../context';
import UserProfile from '../userProfile';

import './index.css'

const ChatBox = () => {
  const {usersData} = useContext(UsersContext)
  const [isChatOpen, setChatOpen] = useState(false)

  const handleOpenChat = () => setChatOpen(prev => !prev)

  const addOnlineStatus = usersData.map((el, index) => {
    return index % 2 === 0 ? {...el, isActive: true} : {...el, isActive: false}
  })

  return (
    <div className='chatbox-container'>
      <div className="chat-open-container">
        <div className='chat-heading'>
          <BsChatRight />
          <span>Chats</span>
        </div>
        <span className={`chat-open-arrow ${isChatOpen ? 'rotate-180' : ''}`} onClick={handleOpenChat}><IoIosArrowUp /></span>
      </div>
      {isChatOpen ? <div className="chat-container">
        <div className="online-user-container">
          {addOnlineStatus.map((user) => (
            <span key={user.username}>
              <UserProfile user={user} isOnlineStatus />
            </span>
          ))}
        </div>
      </div> : null
      }
    </div >
  )
}

export default ChatBox