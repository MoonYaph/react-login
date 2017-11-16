import React, {Component} from 'react'
import {Toast} from 'antd-mobile';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {resetPasswordRequest} from '../../actions/user';
import ForgetPasswordForm from '../forms/ForgetPasswordForm';

class ForgetPasswordPage extends Component {
  state = {
    success: false
  }

  submit = data => this.props.resetPasswordRequest(data).then(() => this.setState({
    success: true
  }, () => Toast.success('Send email success', 1)));
  render() {
    return (<div>
      <ForgetPasswordForm submit={this.submit} {...this.props}/>
    </div>)
  }
}

ForgetPasswordPage.propTypes = {
  resetPasswordRequest: PropTypes.func.isRequired
}

export default connect(null, {resetPasswordRequest})(ForgetPasswordPage)
