import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/**
 * Actions & Types
 */
const { Types, Creators } = createActions({
  signInRequest: ['email', 'password'],
  signInSuccess: ['token'],
  signInFailure: null,
  signOut: null,
  signUpRequest: ['name', 'email', 'password', 'passwordConfirmation'],
  initCheckSuccess: null
})

export const AuthTypes = Types
export default Creators

/**
 * Initial state
 */
export const INITIAL_STATE = Immutable({
  authChecked: false,
  signedIn: false,
  token: null,
  roles: []
})

/**
 * Reducers
 */
const success = (state, { token }) => state.merge({ signedIn: true, token })

const logout = state => state.merge({ signedIn: false, token: null })

const checkSuccess = state => state.merge({ authChecked: true })

/**
 * Reducers to types
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_SUCCESS]: success,
  [Types.SIGN_OUT]: logout,
  [Types.INIT_CHECK_SUCCESS]: checkSuccess
})
