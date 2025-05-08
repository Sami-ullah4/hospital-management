import React from 'react'

import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import ProfileSettingsSidebar from '../profile/components/ProfileSettingsSidebar'

const ProfileSettings = () => {
  return (
    <>
 
    <div className="flex flex-col lg:flex-row m-auto">

    <ProfileSettingsSidebar/>
    <Outlet/>
    </div>
    </>
  )
}

export default ProfileSettings;