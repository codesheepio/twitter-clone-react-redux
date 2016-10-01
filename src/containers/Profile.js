import { connect } from 'react-redux'
import Profile from '../components/Profile'
import { fetchNumFollowers, fetchNumFollowings } from '../actions/profile'
import { getFollowStatus } from '../actions/follow'

const mapStateToProps = state => ({
  name: state.router.params.username ? state.profile.name : state.auth.name,
  username: state.router.params.username ? state.profile.username : state.auth.username,
  authUsername: state.auth.username,
  isFollowing: state.profile.isFollowing,
  numTweets: state.profile.numTweets,
  numFollowers: state.profile.numFollowers,
  numFollowings: state.profile.numFollowings,
  isOwnProfile: !state.router.params.username ||
    state.router.params.username === state.auth.username,
})

export default connect(
  mapStateToProps,
  { fetchNumFollowers, fetchNumFollowings, getFollowStatus }
)(Profile)
