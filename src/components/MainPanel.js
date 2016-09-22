import React from 'react'
import NewTweet from '../containers/NewTweet'
import TweetList from '../containers/TweetList'

const MainPanel = (props) => {
  const newTweet = props.enableTweet ? <NewTweet firstItem /> : ''
  const tweetList = props.enableTweet ?
    <TweetList /> :
    <TweetList firstItem />

  return (
    <div className="main-panel">
      {newTweet}
      {tweetList}
    </div>
  )
}

MainPanel.propTypes = {
  enableTweet: React.PropTypes.bool,
}

MainPanel.defaultProps = {
  enableTweet: false,
}

export default MainPanel
