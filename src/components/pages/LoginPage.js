import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import LoginForm from '../forms/LoginForm'
import {login} from '../../actions/user'

class LoginPage extends Component {
  submit = (data) => this.props.login(data).then(() => this.props.history.push('/'))
  render() {
    return (<div>
      <LoginForm submit={this.submit} {...this.props}/>
    </div>);
  }
}
LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}
export default connect(null, {login})(LoginPage)
