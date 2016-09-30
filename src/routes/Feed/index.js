import React from 'react'
import { connect } from 'react-redux'
import { push } from 'redux-router'
import NavBar from '../../containers/NavBar'
import BodyContainer from '../../containers/BodyContainer'

class Feed extends React.Component {
  componentWillMount() {
    if (!this.props.token) {
      this.props.redirect('/login')
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        <BodyContainer enableTweet />
      </div>
    )
  }
}

Feed.propTypes = {
  token: React.PropTypes.string,
  redirect: React.PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  token: state.auth.token,
})

const mapDispatchToProps = dispatch => ({
  redirect: url => dispatch(push(url)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Feed)
