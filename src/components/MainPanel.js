import React from 'react'
import TweetList from './TweetList'

class MainPanel extends React.Component {
  render() {
    return (
      <div className="main-panel">
        <TweetList tweets={this.props.tweets} />
      </div>
    )
  }
}

MainPanel.propTypes = {
  tweets: React.PropTypes.arrayOf(React.PropTypes.object),
}

export default MainPanel
