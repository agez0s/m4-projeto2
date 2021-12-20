import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../../components/Header/Header'

const Profile = () => {
    const location = useLocation()
    const profileData = location.state
    return (
        <>
          <Header/>
          {profileData.name}
        </>
    )
}

export default Profile
