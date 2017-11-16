import React, { Component } from 'react'
import { NavBar, Icon,List, InputItem, WhiteSpace, Button, Toast } from 'antd-mobile';
import PropTypes from 'prop-types'


class ResetPasswordForm extends Component {
  state = {
    data: {
      token: this.props.token,
      password: '',
      passwordConfiramtion: ''
    },
    loading: false,
    errors:{}
  }
  onChangePasswordConfirm = (e) => {
    this.setState({
      data: {...this.state.data,  passwordConfiramtion: e},
    })
  }
  onChangePassword = e => {
    this.setState({
      data: {...this.state.data,  password: e},
    })
  }
  clickLeft = () => {this.props.history.goBack()};

  handleClick = () => {
    const errors = this.validate(this.state.data)
    this.setState({errors})
    if (Object.keys(errors).length === 0) {
      this.props
        .submit(this.state.data)
        
    } else {
      Toast.fail(`${errors.password}`, 1)
    }
  }
  validate = data => {
    const errors = {}
    if (!data.password) errors.password = "Cant't be blank"
    if (data.password !== data.passwordConfiramtion) errors.password = 'Passwords must match'
    return errors
  }
  render() {
    const { data } = this.state
    return (
      <div>
        <NavBar mode="dark" icon={<Icon type = "left" />} onLeftClick={this.clickLeft}>
          Reset 
        </NavBar>
         <List renderHeader={() => ''}>
            <InputItem type="password" 
            placeholder="password" onChange={this.onChangePassword} 
            value={data.password}
            />
            <WhiteSpace/>
            <InputItem type="password" 
            placeholder="confirm password" onChange={this.onChangePasswordConfirm} 
            value={data.passwordConfiramtion}
            />
            <WhiteSpace/>
            <Button type="ghost" onClick={this.handleClick}>
              Reset 
            </Button>
         </List>
      </div>
    )
  }
}
ResetPasswordForm.propTypes = {
  token: PropTypes.string.isRequired,
  submit: PropTypes.func.isRequired,
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
}

export default ResetPasswordForm