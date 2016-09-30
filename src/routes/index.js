import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Feed from './Feed'
import User from './User'
import Login from './Login'
import Signup from './Signup'

const routes = (
  <Route path="/">
    <IndexRoute component={Feed} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/:username" component={User} />
  </Route>
)

export default routes
