import React from 'react'
import classnames from 'classnames'
import { Link } from 'react-router'

const Tweet = (props) => {
  const tweetClass = classnames({
    tweet: true,
    'first-item': props.firstItem,
  })
  return (
    <div className={tweetClass}>
      <div className="name">{props.name}</div>
      <div className="screen-name"><Link to={`/${props.username}`}>@{props.username}</Link></div>
      <div className="tweet-text">{props.tweetText}</div>
    </div>
  )
}

Tweet.propTypes = {
  name: React.PropTypes.string.isRequired,
  username: React.PropTypes.string.isRequired,
  tweetText: React.PropTypes.string.isRequired,
  firstItem: React.PropTypes.bool,
}

export default Tweet
