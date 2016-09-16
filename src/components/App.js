import React from 'react'
import BodyContainer from './BodyContainer'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Arnupharp Viratanapanu',
      screenName: 'topscores',
      numTweets: 3,
      numFollowers: 12,
      numFollowings: 20,
    }
  }

  render() {
    return (
      <div>
        <BodyContainer {...this.state} />
      </div>
    )
  }
}

export default App
