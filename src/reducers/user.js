import {USER_SIGN_UP, USER_LOG_IN, USER_LOG_OUT} from '../constants/user'

export default(state = {}, action) => {
  switch (action.type) {
    case USER_SIGN_UP:
      return action.user
    case USER_LOG_IN:
      return action.user
    case USER_LOG_OUT:
      return {}
    default:
      return state
  }
}

