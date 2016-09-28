import { connect } from 'react-redux'
import Profile from '../components/Profile'

const mapStateToProps = state => ({
  name: state.profile.name,
  username: state.profile.username,
  numTweets: state.profile.numTweets,
  numFollowers: state.profile.numFollowers,
  numFollowings: state.profile.numFollowings,
})

export default connect(mapStateToProps)(Profile)
