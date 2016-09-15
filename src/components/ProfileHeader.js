import React from 'react'

class ProfileHeader extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="name">{this.props.name}</div>
        <div className="screen-name">@{this.props.screenName}</div>
      </div>
    )
  }
}

ProfileHeader.propTypes = {
  name: React.PropTypes.string.isRequired,
  screenName: React.PropTypes.string.isRequired,
}

export default ProfileHeader
