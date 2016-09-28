import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Feed from './Feed'
import User from './User'

const routes = (
  <Route path="/">
    <IndexRoute component={Feed} />
    <Route path="/:username" component={User} />
  </Route>
)

export default routes
