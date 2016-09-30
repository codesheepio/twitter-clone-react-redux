import React from 'react'

const NavBar = ({ isLogin, goToLogin, goToSignup, logout }) => {
  const handleLoginClick = () => {
    goToLogin()
  }

  const handleSignupClick = () => {
    goToSignup()
  }

  const handleLogoutClick = () => {
    logout()
  }

  const authComponent = isLogin ?
    <div className="navbar-form navbar-right">
      <button className="btn btn-primary" onClick={handleLogoutClick}>Log out</button>
    </div>
    :
    <div className="navbar-form navbar-right">
      <button className="btn btn-default" onClick={handleLoginClick}>Log in</button>
      <button className="btn btn-primary" onClick={handleSignupClick}>Sign up</button>
    </div>


  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand">Twister</a>
        </div>
        { authComponent }
      </div>
    </nav>
  )
}

NavBar.propTypes = {
  goToLogin: React.PropTypes.func.isRequired,
  goToSignup: React.PropTypes.func.isRequired,
  logout: React.PropTypes.func.isRequired,
  isLogin: React.PropTypes.bool,
}

NavBar.defaultProps = {
  isLogin: false,
}

export default NavBar
