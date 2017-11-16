import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  NavBar,
  Icon,
  Button,
  List,
  InputItem,
  WhiteSpace,
  Toast
} from 'antd-mobile';
import {isEmail} from 'validator'
import { Link } from 'react-router-dom';

class LoginPage extends Component {
  state = {
    hasError: false,
    data: {
      email: '',
      password: ''
    },
    errors: {}
  };

  onChangeEmail = e => {
    this.setState({
      data: {
        ...this.state.data,
        email: e
      }
    });
  };
  onChangePassword = e => {
    this.setState({
      data: {
        ...this.state.data,
        password: e
      }
    });
  };
  clickLeft = () => {
    this.props.history.goBack();
  };
  handleClick = () => {
    const errors = this.validate(this.state.data)
    this.setState({errors})
    if (Object.keys(errors).length === 0) {
      this.props.submit(this.state.data).catch(err => err.response.data.error.message ? Toast.fail(`${err.response.data.error.message}`, 1) : Toast.fail(`${err.response.data.error}`, 1))
    } else if (errors.email) {
      Toast.fail(`${errors.email}`, 1)
    } else if(errors.password){
      Toast.fail(`${errors.password}`, 1)
    }
  };
  validate = (data) => {
    const errors = {}
    if (!isEmail(data.email))
      errors.email = 'Invalid email'
    if (!data.password)
      errors.password = "Password can't be blank"
    return errors
  }
  render() {
    const {data} = this.state;
    return (
    <div>
      <NavBar mode="dark" icon={<Icon type = "left" />} onLeftClick={this.clickLeft}>
        LoginPage
      </NavBar>
      <List renderHeader={() => ''}>
        <InputItem type="email" placeholder="example@example.com" onChange={this.onChangeEmail} value={data.email}/>
        <InputItem type="password" placeholder="input your password" onChange={this.onChangePassword} value={data.password}/>
        <WhiteSpace/>
        <Button type="ghost"  onClick={this.handleClick}>
          Login
        </Button>
        <WhiteSpace />
        <Link to='/forget_password'>
          Forget password?
        </Link>
      </List>
    </div>
    );
  }
}
LoginPage.propTypes = {
  history: PropTypes.shape({goBack: PropTypes.func.isRequired}).isRequired,
  submit: PropTypes.func.isRequired
};
export default LoginPage;
