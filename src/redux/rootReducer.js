import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'
import settings from './modules/settings'
import themes from './modules/themes'

export default combineReducers({
  router: routeReducer,
  settings,
  themes
})
