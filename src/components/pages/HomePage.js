import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import * as actions from '../../actions/user';

function HomePage({isAuthenticated, logout}) {
  return (<div>
    <h1>HomePage</h1>
    {
      !isAuthenticated
        ? <Link to='/login'>Login</Link>
        : <button onClick={() => logout()}>Logout</button>
    }
    or
    <Link to='/signup'>Sign up</Link>
  </div>);
}
const mapStateToProps = (state) => ({
  isAuthenticated: !!state.user.token
})

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
}
export default connect(mapStateToProps, {logout: actions.logout})(HomePage)
