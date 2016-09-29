import React from 'react'
import { reduxForm, Field } from 'redux-form'

const LoginForm = props => (
  <div className="login-form">
    <form onSubmit={props.handleSubmit}>
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

LoginForm.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
}

export default reduxForm({
  form: 'login',
})(LoginForm)
