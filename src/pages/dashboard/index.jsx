import {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {UsersContext} from '../../context';
import {ReactComponent as Wave} from '../../assets/wave.svg'
import UserProfile from '../../components/userProfile';

import './index.css'

const Dashboard = () => {
  const navigate = useNavigate()
  const {usersData, setUser} = useContext(UsersContext)

  const handleNavigate = (user) => {
    navigate('/profile')
    setUser(user)
  };

  return (
    <div className="dashboard-container">
      <Wave />
      <div className="users-list-container">
        <div className="users-list-top">Select an account</div>
        <div className="users-list">
          {usersData?.map((user, index) => (
            <span key={`user${index + 1}`} onClick={() => handleNavigate(user)}>
              <UserProfile user={user} />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard