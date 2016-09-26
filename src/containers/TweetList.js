import { connect } from 'react-redux'
import TweetList from '../components/TweetList'

const mapStateToProps = (state) => {
  console.log(state.router)
  return {
    tweets: state.tweets,
  }
}

export default connect(mapStateToProps)(TweetList)
