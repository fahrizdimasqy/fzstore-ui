import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

// buat composer enhancer untuk menghubungkan dengan Chrome DevTools Redux
const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// gabung reducer
const rootReducers = combineReducers({})

// buat store, dan gunakan composerEnhancer + middleware thunk
const store = createStore(
  rootReducers,
  composerEnhancer(applyMiddleware(thunk)),
)

export default store
