
import {alert} from './alert.reducer'
import {authentication} from './authentication.reducer'
import {users} from './user.reducer'
import { combineReducers } from 'redux'


export const rootReducer = combineReducers({
  alert: alert,
  users: users,
  authentication: authentication
})

export type RootState = ReturnType<typeof rootReducer>