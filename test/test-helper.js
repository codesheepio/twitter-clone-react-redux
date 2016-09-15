import chai, { expect } from 'chai'
import { shallow, mount, render } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import jsdom from 'jsdom'

chai.use(chaiEnzyme())

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.document = doc
global.window = doc.defaultView

export {
  expect,
  shallow,
  mount,
  render,
}
