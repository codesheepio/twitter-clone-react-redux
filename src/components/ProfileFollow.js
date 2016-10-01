import React from 'react'

class ProfileFollow extends React.Component {
  render() {
    const followToggleBtn = this.props.isFollowing ?
      <input type="button" className="btn btn-danger btn-lg" value="Unfollow" />
      :
      <input type="button" className="btn btn-default btn-lg" value="Follow" />

    return (
      <div className="action last-section">
        { followToggleBtn }
      </div>
    )
  }
}

ProfileFollow.propTypes = {
  isFollowing: React.PropTypes.bool,
}

ProfileFollow.defaultProps = {
  isFollowing: false,
}

export default ProfileFollow
