import React from 'react'

const ProfileHeader = props => (
  <div className="header">
    <div className="name">{props.name}</div>
    <div className="screen-name">@{props.username}</div>
  </div>
)

ProfileHeader.propTypes = {
  name: React.PropTypes.string.isRequired,
  username: React.PropTypes.string.isRequired,
}

export default ProfileHeader
