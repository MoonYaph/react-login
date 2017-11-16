import React, { Component } from 'react'
import { NavBar, Icon,List, InputItem, WhiteSpace, Button, Toast } from 'antd-mobile';
import {isEmail} from 'validator'
import PropTypes from 'prop-types'


class ForgetPasswordForm extends Component {
  state = {
    data: {
      email: ''
    },
    success: false,
    errors:{}
  }
  onChange = (e) => {
    this.setState({
      data: {...this.state.data,  email: e},
    })
  }
  clickLeft = () => {this.props.history.goBack()};
  handleClick = () => {
    const errors = this.validate(this.state.data)
    this.setState({errors})
    if (Object.keys(errors).length === 0) {
      this.props
        .submit(this.state.data)
        .catch(err =>
          this.setState({ errors: err.response.data.error }, () =>{
            Toast.fail(`${err.response.data.error}`, 1)
          })
        );
    }
  }
  validate = data => {
    const errors = {}
    if (!isEmail(data.email)) errors.email = 'Invalid email'
    return errors
  }
  render() {
    const { data } = this.state
    return (
      <div>
        <NavBar mode="dark" icon={<Icon type = "left" />} onLeftClick={this.clickLeft}>
        Forget Password
      </NavBar>
         <List renderHeader={() => ''}>
          <InputItem type="email" 
          placeholder="example@example.com" onChange={this.onChange} 
          value={data.email}
          />
          <WhiteSpace/>
          <Button type="ghost" onClick={this.handleClick}>
            Reset Password
          </Button>
         </List>
      </div>
    )
  }
}
ForgetPasswordForm.propTypes = {
  submit: PropTypes.func.isRequired,
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
}

export default ForgetPasswordForm