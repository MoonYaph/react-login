import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import SignupForm from '../forms/SignupForm'
import {signup} from '../../actions/user'

class SignupPage extends Component {
  submit = (data) => this.props.signup(data).then(() => this.props.history.push('/confirmation'))
  render() {
    return (<div>
      <SignupForm submit={this.submit} {...this.props}/>
    </div>);
  }
}
SignupPage.propTypes = {
  signup: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}
export default connect(null, {signup})(SignupPage)
