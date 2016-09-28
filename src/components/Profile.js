import React from 'react'
import ProfileHeader from './ProfileHeader'
import ProfileDetail from './ProfileDetail'

const Profile = props => (
  <div className="profile">
    <ProfileHeader name={props.name} username={props.username} />
    <ProfileDetail
      numTweets={props.numTweets}
      numFollowers={props.numFollowers}
      numFollowings={props.numFollowings}
    />
  </div>
)

Profile.propTypes = {
  name: React.PropTypes.string.isRequired,
  username: React.PropTypes.string.isRequired,
  numTweets: React.PropTypes.number.isRequired,
  numFollowers: React.PropTypes.number.isRequired,
  numFollowings: React.PropTypes.number.isRequired,
}

export default Profile
