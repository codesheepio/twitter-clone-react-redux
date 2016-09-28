import React from 'react'
import LeftPanel from './LeftPanel'
import MainPanel from './MainPanel'

class BodyContainer extends React.Component {
  componentDidMount() {
    this.props.fetchProfile(this.props.username)
  }

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
  username: React.PropTypes.string,
  fetchProfile: React.PropTypes.func.isRequired,
}

BodyContainer.defaultProps = {
  enableTweet: false,
  username: '',
}

export default BodyContainer
