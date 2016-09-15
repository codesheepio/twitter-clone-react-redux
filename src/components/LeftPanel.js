import React from 'react'
import Profile from './Profile'

class LeftPanel extends React.Component {
  render() {
    return (
      <div className="left-panel">
        <Profile {...this.props} />
      </div>
    )
  }
}

export default LeftPanel
