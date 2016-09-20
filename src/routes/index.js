import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Feed from './Feed'
import Me from './Me'

const routes = (
  <Route path="/">
    <IndexRoute component={Feed} />
    <Route path="/me" component={Me} />
  </Route>
)

export default routes
