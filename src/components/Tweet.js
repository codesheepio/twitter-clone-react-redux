import React from 'react'

class Tweet extends React.Component {
  render() {
    return (
      <div className="tweet">
        <div className="name">{this.props.name}</div>
        <div className="screen-name">@{this.props.screenName}</div>
        <div className="tweet-text">{this.props.tweetText}</div>
      </div>
    )
  }
}

Tweet.propTypes = {
  name: React.PropTypes.string.isRequired,
  screenName: React.PropTypes.string.isRequired,
  tweetText: React.PropTypes.string.isRequired,
}

export default Tweet
