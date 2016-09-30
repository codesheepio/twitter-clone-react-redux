import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { login } from '../actions/auth'

const LoginForm = (props) => {
  const handleFormSubmit = (values) => {
    props.login(values.username, values.password)
  }

  return (
    <div className="login-form">
      <form onSubmit={props.handleSubmit(handleFormSubmit)}>
        <div className="login-label">
          Log in with your username
        </div>
        <div className="form-group">
          <Field
            name="username"
            component="input"
            type="text"
            className="form-control"
            placeholder="Username"
          />
        </div>
        <div className="form-group">
          <Field
            name="password"
            type="password"
            component="input"
            className="form-control"
            placeholder="Password"
          />
        </div>
        <div className="form-group text-right">
          <button className="btn btn-default">Log in</button>
        </div>
      </form>
    </div>
  )
}

LoginForm.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
  login: React.PropTypes.func.isRequired,
}

const ReduxLoginForm = reduxForm({
  form: 'login',
})(LoginForm)

export default connect(null, { login })(ReduxLoginForm)
