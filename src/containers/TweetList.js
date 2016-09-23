import { connect } from 'react-redux'
import TweetList from '../components/TweetList'

const mapStateToProps = state => ({
  tweets: state.ownTweets,
})

export default connect(mapStateToProps)(TweetList)
