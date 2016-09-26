import { applyMiddleware, createStore, compose } from 'redux'
import { reduxReactRouter } from 'redux-router'
import thunk from 'redux-thunk'
import { createHistory } from 'history'
import rootReducer from '../reducers'
import routes from '../routes'

const configureStore = (preloadedState) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(thunk),
      reduxReactRouter({
        routes,
        createHistory,
      }),
      window.devToolsExtension && window.devToolsExtension()
    )
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default // eslint-disable-line global-require

      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStore
