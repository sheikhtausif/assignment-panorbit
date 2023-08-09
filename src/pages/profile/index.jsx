import React, {useContext} from 'react'
import {UsersContext} from '../../context';
import TitleValueText from '../../components/titleValueText';
import Header from '../../components/header';
import GoogleMapContainer from '../../components/googleMap';


import './index.css'

const Profile = () => {
  const {user} = useContext(UsersContext)

  return (
    <div className='main-profile'>
      <Header title='Profile' user={user} />
      <div className="profile-container">
        <div className="profile-left-container">
          <div className="profile-div">
            <div className="profile-pic">
              <img src={user.profilepicture} alt="profile-pic" />
            </div>
            <p>{user.name}</p>
          </div>
          <div className="user-info-div">
            <TitleValueText title='Username' value={user.username} />
            <TitleValueText title='e-mail' value={user.email} />
            <TitleValueText title='Phone' value={user.phone} />
            <TitleValueText title='Website' value={user.website} />
          </div>
          <hr />
          <div className="company-info-div">
            <p>Company</p>
            <TitleValueText title='Name' value={user.company.name} />
            <TitleValueText title='catchphrase' value={user.company.catchPhrase} />
            <TitleValueText title='bs' value={user.company.bs} />
          </div>
        </div>

        <div className="profile-right-container">
          <div className="user-address-div">
            <p>Address :</p>
            <TitleValueText title='Street' value={user.address.street} />
            <TitleValueText title='Suite' value={user.address.suite} />
            <TitleValueText title='City' value={user.address.city} />
            <TitleValueText title='Zipcode' value={user.address.zipcode} />
          </div>
          <div className="user-location-div">
            {/* when uncomment the below map then css is not working*/}
            {/* <GoogleMapContainer lat={Number(user.address.geo.lat)} lng={Number(user.address.geo.lng)} /> */}
          </div>
          <div className="coordinate-div">
            <TitleValueText title='Lat' value={user.address.geo.lat} />
            <TitleValueText title='Long' value={user.address.geo.lng} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile