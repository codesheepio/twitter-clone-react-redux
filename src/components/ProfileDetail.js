import React from 'react'

class ProfileDetail extends React.Component {
  render() {
    return (
      <div className="detail last-section">
        <div className="col">
          <div className="text">Tweets</div>
          <div className="number">{this.props.numTweets}</div>
        </div>
        <div className="col">
          <div className="text">Followers</div>
          <div className="number">{this.props.numFollowers}</div>
        </div>
        <div className="col">
          <div className="text">Followings</div>
          <div className="number">{this.props.numFollowings}</div>
        </div>
      </div>
    )
  }
}

ProfileDetail.propTypes = {
  numTweets: React.PropTypes.number.isRequired,
  numFollowers: React.PropTypes.number.isRequired,
  numFollowings: React.PropTypes.number.isRequired,
}

export default ProfileDetail
