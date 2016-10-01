import types from './types'

const setFollowState = isFollowing => ({
  type: types.SET_FOLLOW_STATE,
  payload: {
    isFollowing,
  },
})

const getFollowStatus = (username, followedUsername) => (dispatch) => {
  const uri = `http://localhost:3000/api/Follows?filter={"where":{"username":"${username}", "followedUsername":"${followedUsername}"}}`
  fetch(uri)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return response.json()
  })
  .then((data) => {
    const isFollowing = data.length !== 0 && data[0].isFollowing
    dispatch(setFollowState(isFollowing))
  })
  .catch(err => console.log(err))
}

const follow = (username, followedUsername, token) => (dispatch) => {
  const uri = `http://localhost:3000/api/Follows/upsertWithWhere?where={"username":"${username}", "followedUsername":"${followedUsername}"}`

  fetch(uri, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify({
      username,
      followedUsername,
      isFollowing: true,
    }),
  })
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return response.json()
  })
  .then((data) => {
    dispatch(setFollowState(data.isFollowing))
  })
  .catch(err => console.log(err))
}

const unfollow = (username, followedUsername, token) => (dispatch) => {
  const uri = `http://localhost:3000/api/Follows/upsertWithWhere?where={"username":"${username}","followedUsername":"${followedUsername}"}`
  fetch(uri, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify({
      username,
      followedUsername,
      isFollowing: false,
    }),
  })
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return response.json()
  })
  .then((data) => {
    dispatch(setFollowState(data.isFollowing))
  })
  .catch(err => console.log(err))
}

export {
  getFollowStatus,
  follow,
  unfollow,
}
