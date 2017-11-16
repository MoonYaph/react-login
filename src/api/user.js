import axios from 'axios';

export default {
  user: {
    signup: (credentials) => axios.post('/api/signup', {credentials}).then(res => res.data.user),
    login: (credentials) => axios.post('/api/login', {credentials}).then(res => res.data.user),
    confirm: (token) => axios.post('/api/confirmation',{token}).then(res => res.data.user),
    resetPasswordRequest: email => axios.post('/api/reset_password_request', {email}),
    validateToken: token => axios.post('/api/validate_token', {token}),
    resetPassword: data => axios.post("/api/reset_password", { data })
  }
}
