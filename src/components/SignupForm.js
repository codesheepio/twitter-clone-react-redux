import React from 'react'
import { reduxForm, Field } from 'redux-form'

// eslint-disable-next-line react/prop-types
const FormInput = ({ input, type, placeholder }) =>
  <div className="form-group">
    <input className="form-control" {...input} type={type} placeholder={placeholder} />
  </div>

const SignupForm = () =>
  <div className="signup-form">
    <div className="logo text-center">Sign up</div>
    <Field name="username" type="text" component={FormInput} placeholder="Username" />
    <Field name="firstname" type="text" component={FormInput} placeholder="Firstname" />
    <Field name="lastname" type="text" component={FormInput} placeholder="Lastname" />
    <Field name="email" type="email" component={FormInput} placeholder="Email" />
    <Field name="password" type="password" component={FormInput} placeholder="Password" />
  </div>

export default reduxForm({
  form: 'signup',
})(SignupForm)
