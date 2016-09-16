import React from 'react'
import TweetList from '../containers/TweetList'

class MainPanel extends React.Component {
  render() {
    return (
      <div className="main-panel">
        <TweetList />
      </div>
    )
  }
}

export default MainPanel
