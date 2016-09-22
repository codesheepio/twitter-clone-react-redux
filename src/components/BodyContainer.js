import React from 'react'
import LeftPanel from './LeftPanel'
import MainPanel from './MainPanel'

const BodyContainer = props => (
  <div className="container body">
    <LeftPanel />
    <MainPanel enableTweet={props.enableTweet} />
  </div>
)

BodyContainer.propTypes = {
  enableTweet: React.PropTypes.bool,
}

BodyContainer.defaultProps = {
  enableTweet: false,
}

export default BodyContainer
