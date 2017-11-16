import {USER_SIGN_UP, USER_LOG_IN, USER_LOG_OUT} from '../constants/user';
import api from '../api/user';

export const userSignup = user => ({type: USER_SIGN_UP, user});
export const userLogin = user => ({type: USER_LOG_IN, user});
export const userLogout = () => ({type: USER_LOG_OUT});

export const signup = credentials => dispatch => api.user.signup(credentials).then(user => dispatch(userSignup(user)));
export const login = credentials => dispatch => api.user.login(credentials).then(user =>{
  localStorage.elmJWT = user.token
  dispatch(userLogin(user))
});

export const logout = () => dispatch => {
  localStorage.removeItem('elmJWT')
  dispatch(userLogout())
}

export const confirm = token => dispatch => 
  api.user.confirm(token).then(user => dispatch(userLogin(user)))

export const resetPasswordRequest = ({email}) => () =>
  api.user.resetPasswordRequest(email)

export const resetPassword = (data) => () =>
  api.user.resetPassword(data)

export const validateToken = token => () =>
  api.user.validateToken(token)