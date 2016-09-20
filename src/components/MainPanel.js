import React from 'react'
import NewTweet from './NewTweet'
import TweetList from '../containers/TweetList'

class MainPanel extends React.Component {
  render() {
    const newTweet = this.props.enableTweet ? <NewTweet /> : ''

    return (
      <div className="main-panel">
        {newTweet}
        <TweetList />
      </div>
    )
  }
}

MainPanel.propTypes = {
  enableTweet: React.PropTypes.bool,
}

MainPanel.defaultProps = {
  enableTweet: false,
}

export default MainPanel
