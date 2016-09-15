import chai, { expect } from 'chai'
import { shallow, mount, render } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

export {
  expect,
  shallow,
  mount,
  render,
}
