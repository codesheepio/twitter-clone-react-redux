import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { signup } from '../actions/auth'


const SignupForm = (props) => {
  const handleFormSubmit = (values) => {
    props.signup(values.username, values.firstname, values.lastname, values.email, values.password)
  }

  // eslint-disable-next-line react/prop-types
  const FormInput = ({ input, type, placeholder }) =>
    <div className="form-group">
      <input className="form-control" {...input} type={type} placeholder={placeholder} />
    </div>

  return (
    <div className="signup-form">
      <div className="logo text-center">Sign up</div>
      <form onSubmit={props.handleSubmit(handleFormSubmit)}>
        <Field name="username" type="text" component={FormInput} placeholder="Username" />
        <Field name="firstname" type="text" component={FormInput} placeholder="Firstname" />
        <Field name="lastname" type="text" component={FormInput} placeholder="Lastname" />
        <Field name="email" type="email" component={FormInput} placeholder="Email" />
        <Field name="password" type="password" component={FormInput} placeholder="Password" />
        <div className="form-group text-right">
          <button type="submit" className="btn btn-primary">Sign up</button>
        </div>
      </form>
    </div>
  )
}

SignupForm.propTypes = {
  signup: React.PropTypes.func.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
}

const ReduxSignupForm = reduxForm({
  form: 'signup',
})(SignupForm)

export default connect(null, { signup })(ReduxSignupForm)
