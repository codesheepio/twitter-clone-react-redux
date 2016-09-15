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
      tweets: [
        { id: 1, name: 'Arnupharp Viratanapanu', screenName: 'topscores', tweetText: 'Hello World' },
        { id: 2, name: 'Arnupharp Viratanapanu', screenName: 'topscores', tweetText: 'I am handsome' },
        { id: 3, name: 'Arnupharp Viratanapanu', screenName: 'topscores', tweetText: 'I like pop music' },
      ],
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
