import React from 'react'
import classnames from 'classnames'

class Tweet extends React.Component {
  render() {
    const tweetClass = classnames({
      tweet: true,
      'first-item': this.props.firstItem,
    })
    return (
      <div className={tweetClass}>
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
  firstItem: React.PropTypes.boolean,
}

export default Tweet
