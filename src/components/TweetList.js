import React from 'react'
import Tweet from './Tweet'

class TweetList extends React.Component {
  componentDidMount() {
    this.props.fetchTweets(this.props.username)
  }

  render() {
    const tweets = this.props.tweets.map((tweet, index) =>
      <Tweet key={tweet.id} {...tweet} firstItem={index === 0 && this.props.firstItem} />
    )

    return (
      <div className="tweet-list">
        {tweets}
      </div>
    )
  }
}

TweetList.propTypes = {
  tweets: React.PropTypes.arrayOf(React.PropTypes.object),
  firstItem: React.PropTypes.bool,
  fetchTweets: React.PropTypes.func.isRequired,
  username: React.PropTypes.string,
}

TweetList.defaultProps = {
  firstItem: false,
  username: '',
}

export default TweetList
