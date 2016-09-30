import React from 'react'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import sinon from 'sinon'
import { storiesOf } from '@kadira/storybook'
import NewTweet from '../src/components/NewTweet'
import Profile from '../src/components/Profile'
import Tweet from '../src/components/Tweet'
import TweetList from '../src/components/TweetList'
import LoginForm from '../src/components/LoginForm'
import SignupForm from '../src/components/SignupForm'
import '../src/style/custom.scss'
import '../src/style/main.scss'

storiesOf('NewTweet', module)
  .add('with props', () => (
    <NewTweet firstItem />
  ))

storiesOf('Profile', module)
  .add('with props', () => (
    <Profile
      name="Supasate Choochaisri"
      username="kaizerwing"
      numTweets="30"
      numFollowers="100"
      numFollowings="200"
    />
  ))

storiesOf('Tweet', module)
  .add('with props', () => (
    <Tweet
      name="Supasate Choochaisri"
      username="kaizerwing"
      tweetText="Hello World"
    />
  ))

storiesOf('TweetList', module)
  .add('with tweets', () => {
    const props = {
      tweets: [
        { id: 1, name: 'Arnupharp Viratanapanu', username: 'topscores', tweetText: 'I am handsome' },
        { id: 2, name: 'Supasate Choochaisri', username: 'kaizerwing', tweetText: 'Hello World' },
        { id: 3, name: 'Supasate Choochaisri', username: 'kaizerwing', tweetText: 'This is storybook' },
      ],
      fetchTweets: sinon.spy(),
    }
    return (
      <TweetList {...props} />
    )
  })

storiesOf('LoginForm', module)
  .add('', () => {
    const mockStore = configureMockStore()
    const store = mockStore()
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    )
  })

storiesOf('SignupForm', module)
  .add('', () => {
    const mockStore = configureMockStore()
    const store = mockStore()
    return (
      <Provider store={store}>
        <SignupForm />
      </Provider>
    )
  })
