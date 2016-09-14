import React from 'react'

class ProfileDetail extends React.Component {
  render() {
    return (
      <div className="detail last-section">
        <div className="col">
          <div className="text">Tweets</div>
          <div className="number">327</div>
        </div>
        <div className="col">
          <div className="text">Followers</div>
          <div className="number">163</div>
        </div>
        <div className="col">
          <div className="text">Following</div>
          <div className="number">500</div>
        </div>
      </div>
    )
  }
}

export default ProfileDetail
