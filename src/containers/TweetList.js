import { connect } from 'react-redux'
import TweetList from '../components/TweetList'
import { fetchTweets, fetchHomeFeed } from '../actions/tweet'

const mapStateToProps = state => ({
  username: state.router.params.username,
  tweets: state.tweets,
  token: state.auth.token,
})

const mapDispatchToProps = dispatch => ({
  fetchTweets: username => dispatch(fetchTweets(username)),
  fetchHomeFeed: token => dispatch(fetchHomeFeed(token)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TweetList)
