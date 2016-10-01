import React from 'react'
import ProfileHeader from './ProfileHeader'
import ProfileDetail from './ProfileDetail'
import ProfileFollow from './ProfileFollow'

class Profile extends React.Component {
  componentDidMount() {
    this.props.fetchNumFollowers(this.props.username)
    this.props.fetchNumFollowings(this.props.username)
  }

  componentWillUpdate(nextProps) {
    this.props.fetchNumFollowers(nextProps.username)
    this.props.fetchNumFollowings(nextProps.username)
  }

  render() {
    const showProfileFollow = this.props.isOwnProfile ? '' : <ProfileFollow />

    return (
      <div className="profile">
        <ProfileHeader name={this.props.name} username={this.props.username} />
        <ProfileDetail
          numTweets={this.props.numTweets}
          numFollowers={this.props.numFollowers}
          numFollowings={this.props.numFollowings}
          isLastSection={this.props.isOwnProfile}
        />
        { showProfileFollow }
      </div>
    )
  }
}

Profile.propTypes = {
  name: React.PropTypes.string.isRequired,
  username: React.PropTypes.string.isRequired,
  numTweets: React.PropTypes.number.isRequired,
  numFollowers: React.PropTypes.number.isRequired,
  numFollowings: React.PropTypes.number.isRequired,
  fetchNumFollowers: React.PropTypes.func.isRequired,
  fetchNumFollowings: React.PropTypes.func.isRequired,
  isOwnProfile: React.PropTypes.bool.isRequired,
}

export default Profile
