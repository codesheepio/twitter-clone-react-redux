import React from 'react'
import LeftPanel from './LeftPanel'
import MainPanel from './MainPanel'

class BodyContainer extends React.Component {
  render() {
    return (
      <div className="container body">
        <LeftPanel />
        <MainPanel enableTweet={this.props.enableTweet} />
      </div>
    )
  }
}

BodyContainer.propTypes = {
  enableTweet: React.PropTypes.bool,
}

BodyContainer.defaultProps = {
  enableTweet: false,
}

export default BodyContainer
