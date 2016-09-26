import { connect } from 'react-redux'
import TweetList from '../components/TweetList'
import { fetchTweets } from '../actions/tweet'

const mapStateToProps = state => ({
  screenName: state.router.params.screenName,
  tweets: state.tweets,
})

const mapDispatchToProps = dispatch => ({
  fetchTweets: screenName => dispatch(fetchTweets(screenName)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TweetList)
