import { connect } from 'react-redux'
import NewTweet from '../components/NewTweet'
import { addTweet } from '../actions/tweet'

const mapStateToProps = state => ({
  userName: state.profile.name,
  username: state.profile.username,
})

const mapDispatchToProps = dispatch => ({
  addTweet: (name, username, tweetText, timestamp) =>
    dispatch(addTweet(name, username, tweetText, timestamp)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NewTweet)
