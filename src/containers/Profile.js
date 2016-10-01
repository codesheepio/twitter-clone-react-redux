import { connect } from 'react-redux'
import Profile from '../components/Profile'
import { fetchNumFollowers, fetchNumFollowings } from '../actions/profile'

const mapStateToProps = state => ({
  name: state.router.params.username ? state.profile.name : state.auth.name,
  username: state.router.params.username ? state.profile.username : state.auth.username,
  numTweets: state.profile.numTweets,
  numFollowers: state.profile.numFollowers,
  numFollowings: state.profile.numFollowings,
})

export default connect(mapStateToProps, { fetchNumFollowers, fetchNumFollowings })(Profile)
