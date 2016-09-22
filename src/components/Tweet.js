import React from 'react'
import classnames from 'classnames'

const Tweet = (props) => {
  const tweetClass = classnames({
    tweet: true,
    'first-item': props.firstItem,
  })
  return (
    <div className={tweetClass}>
      <div className="name">{props.name}</div>
      <div className="screen-name">@{props.screenName}</div>
      <div className="tweet-text">{props.tweetText}</div>
    </div>
  )
}

Tweet.propTypes = {
  name: React.PropTypes.string.isRequired,
  screenName: React.PropTypes.string.isRequired,
  tweetText: React.PropTypes.string.isRequired,
  firstItem: React.PropTypes.bool,
}

export default Tweet
