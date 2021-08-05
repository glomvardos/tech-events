import { authActions } from './auth-slice'

export const checkUser = () => {
  return async dispatch => {
    const response = await fetch('api/user')
    const data = await response.json()

    if (response.ok) {
      dispatch(authActions.storeUser(data))
    }

    if (!response.ok) {
      dispatch(authActions.storeUser(null))
    }
  }
}
