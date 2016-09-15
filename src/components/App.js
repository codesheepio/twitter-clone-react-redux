import React from 'react'
import Profile from './Profile'
import TweetList from './TweetList'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tweets: [
        { id: 1, name: 'Arnupharp Viratanapanu', screenName: 'topscores', text: 'Hello World' },
        { id: 2, name: 'Arnupharp Viratanapanu', screenName: 'topscores', text: 'I am handsome' },
        { id: 3, name: 'Arnupharp Viratanapanu', screenName: 'topscores', text: 'I like pop music' },
      ],
    }
  }

  render() {
    return (
      <div>
        <Profile />
        <TweetList tweets={this.state.tweets} />
      </div>
    )
  }
}

export default App
