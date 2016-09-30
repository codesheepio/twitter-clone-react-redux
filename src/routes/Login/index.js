import React from 'react'
import { connect } from 'react-redux'
import { push } from 'redux-router'
import NavBar from '../../containers/NavBar'
import LoginForm from '../../components/LoginForm'

class Login extends React.Component {
  componentWillMount() {
    if (this.props.token) {
      this.props.redirect('/')
    }
  }

  componentWillUpdate(nextProps) {
    if (nextProps.token) {
      this.props.redirect('/')
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        <LoginForm />
      </div>
    )
  }
}

Login.propTypes = {
  token: React.PropTypes.string,
  redirect: React.PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  token: state.auth.token,
})

const mapDispatchToProps = dispatch => ({
  redirect: url => dispatch(push(url)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
