import React from 'react'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import chai, { expect } from 'chai'
import { shallow, mount, render } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import jsdom from 'jsdom'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import 'isomorphic-fetch'

chai.use(chaiEnzyme())
chai.use(sinonChai)

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.window = document.defaultView

const exposedProperties = ['window', 'navigator', 'document']
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property)
    global[property] = document.defaultView[property]
  }
})
global.navigator = {
  userAgent: 'node.js',
}

const reduxMount = (component, state) => {
  const mockStore = configureMockStore([thunk])
  const store = mockStore(state)

  return mount(
    <Provider store={store} >
      {component}
    </Provider>
  )
}

export {
  expect,
  shallow,
  mount,
  render,
  reduxMount,
  sinon,
}
