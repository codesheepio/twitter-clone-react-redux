import { connect } from 'react-redux'
import NewTweet from '../components/NewTweet'
import { addTweet } from '../actions/tweet'

const mapStateToProps = state => ({
  userName: state.profile.name,
  userScreenName: state.profile.screenName,
})

const mapDispatchToProps = dispatch => ({
  addTweet: (name, screenName, tweetText, timestamp) =>
    dispatch(addTweet(name, screenName, tweetText, timestamp)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NewTweet)
