import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {NoticeBar} from 'antd-mobile'
import {Link} from 'react-router-dom'

import {confirm} from '../../actions/user';

class ConfirmationPage extends Component {
  state = {
    loading: true,
    success: false
  }

  componentDidMount() {
    this.props.confirm(this.props.match.params.token).then(() => this.setState({loading: false, success: true})).catch(() => this.setState({loading: true, success: false}))
  }

  render() {
    const {loading, success} = this.state
    return (<div key='0'>
      {
        loading && <NoticeBar size='lg'>
            verity the email
          </NoticeBar>
      }
    </div>,
    <div>
      {
        !loading && success && <NoticeBar size='lg'>
            Thank you
          </NoticeBar>
      }
      <Link to='/'>Go to the homepage</Link>
    </div>)
  }
}
ConfirmationPage.propTypes = {
  confirm: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({token: PropTypes.string.isRequired}).isRequired
  }).isRequired
}

export default connect(null, {confirm})(ConfirmationPage)
