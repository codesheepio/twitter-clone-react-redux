import React from 'react'
import { connect } from 'react-redux'
import BodyContainer from '../../components/BodyContainer'

class User extends React.Component {
  render() {
    return (
      <BodyContainer enableTweet={false} />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log('user ownProps')
  console.log(ownProps)

  return state
}

export default connect(mapStateToProps)(User)
