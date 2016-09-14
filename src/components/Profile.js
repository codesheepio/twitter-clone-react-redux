import React from 'react'
import ProfileHeader from './ProfileHeader'
import ProfileDetail from './ProfileDetail'

class Profile extends React.Component {
  render() {
    return (
      <div className="profile">
        <ProfileHeader />
        <ProfileDetail />
      </div>
    )
  }
}

export default Profile
