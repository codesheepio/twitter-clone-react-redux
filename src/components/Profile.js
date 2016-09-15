import React from 'react'
import ProfileHeader from './ProfileHeader'
import ProfileDetail from './ProfileDetail'

class Profile extends React.Component {
  render() {
    return (
      <div className="profile">
        <ProfileHeader name={this.props.name} screenName={this.props.screenName} />
        <ProfileDetail
          numTweets={this.props.numTweets}
          numFollowers={this.props.numFollowers}
          numFollowings={this.props.numFollowings}
        />
      </div>
    )
  }
}

Profile.propTypes = {
  name: React.PropTypes.string.isRequired,
  screenName: React.PropTypes.string.isRequired,
  numTweets: React.PropTypes.number.isRequired,
  numFollowers: React.PropTypes.number.isRequired,
  numFollowings: React.PropTypes.number.isRequired,
}

export default Profile
