import React from 'react'
import { storiesOf } from '@kadira/storybook'
import NewTweet from '../src/components/NewTweet'
import Profile from '../src/components/Profile'
import Tweet from '../src/components/Tweet'
import TweetList from '../src/components/TweetList'
import '../src/style/main.scss'

storiesOf('NewTweet', module)
  .add('with props', () => (
    <NewTweet firstItem />
  ))

storiesOf('Profile', module)
  .add('with props', () => (
    <Profile
      name="Supasate Choochaisri"
      screenName="kaizerwing"
      numTweets="30"
      numFollowers="100"
      numFollowings="200"
    />
  ))

storiesOf('Tweet', module)
  .add('with props', () => (
    <Tweet
      name="Supasate Choochaisri"
      screenName="kaizerwing"
      tweetText="Hello World"
    />
  ))

storiesOf('TweetList', module)
  .add('with tweets', () => {
    const tweets = [
      { id: 1, name: 'Arnupharp Viratanapanu', screenName: 'topscores', tweetText: 'I am handsome' },
      { id: 2, name: 'Supasate Choochaisri', screenName: 'kaizerwing', tweetText: 'Hello World' },
      { id: 3, name: 'Supasate Choochaisri', screenName: 'kaizerwing', tweetText: 'This is storybook' },
    ]
    return (
      <TweetList tweets={tweets} />
    )
  })
