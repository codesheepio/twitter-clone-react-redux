import React from 'react'
import NavBar from '../../containers/NavBar'
import LoginForm from '../../components/LoginForm'

class Login extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <LoginForm />
      </div>
    )
  }
}

export default Login
