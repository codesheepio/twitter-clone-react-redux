import { createStore } from 'redux'
import rootReducer from '../reducers'

const configureStore = (preloadedState) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    window.devToolsExtension && window.devToolsExtension()
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
