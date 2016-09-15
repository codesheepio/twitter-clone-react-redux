import React from 'react'
import LeftPanel from './LeftPanel'
import MainPanel from './MainPanel'

class BodyContainer extends React.Component {
  render() {
    return (
      <div className="container body">
        <LeftPanel {...this.props} />
        <MainPanel tweets={this.props.tweets} />
      </div>
    )
  }
}

BodyContainer.propTypes = {
  tweets: React.PropTypes.arrayOf(React.PropTypes.object),
}

export default BodyContainer
