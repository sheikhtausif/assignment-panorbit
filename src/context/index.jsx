import React from 'react'
import {createContext} from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import axios from 'axios'

export const UsersContext = createContext()

const UsersStateContext = ({children}) => {
  const [usersData, setUsersData] = useState(() => {
    const storeAllUsers = localStorage.getItem('allUsers');
    return storeAllUsers ? JSON.parse(storeAllUsers) : null;
  })
  const [user, setUser] = useState(() => {
    const storeUser = localStorage.getItem('currentUser');
    return storeUser ? JSON.parse(storeUser) : null;
  })

  const getUsersData = async () => {
    const {data} = await axios.get('https://panorbit.in/api/users.json')
    setUsersData(data.users)
  }

  useEffect(() => {
    getUsersData()
  }, [])

  useEffect(() => {
    // Save state to localStorage whenever it changes to keep the data when page refresh
    localStorage.setItem('currentUser', JSON.stringify(user));
    localStorage.setItem('allUsers', JSON.stringify(usersData));
  }, [user, usersData]);

  return (
    <UsersContext.Provider value={{usersData, user, setUser}}>
      {children}
    </UsersContext.Provider>
  )
}

export default UsersStateContext