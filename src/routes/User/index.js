import React from 'react'
import NavBar from '../../containers/NavBar'
import BodyContainer from '../../containers/BodyContainer'

class User extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <BodyContainer enableTweet={false} />
      </div>
    )
  }
}

export default User
