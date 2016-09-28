import { connect } from 'react-redux'
import NewTweet from '../components/NewTweet'
import { addTweet } from '../actions/tweet'

const mapStateToProps = state => ({
  name: state.router.params.username ? state.profile.name : state.auth.name,
  username: state.router.params.username ? state.profile.username : state.auth.username,
})

const mapDispatchToProps = dispatch => ({
  addTweet: (name, username, tweetText, timestamp) =>
    dispatch(addTweet(name, username, tweetText, timestamp)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NewTweet)
