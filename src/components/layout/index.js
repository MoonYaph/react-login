import React from 'react'

import { Switch, Route } from "react-router-dom";
import { AsyncHome, AsyncSignup, AsyncLogin, AsyncConfirm, AsyncForgetPassword, AsyncResetPassword } from "../routes/index";


const Layout = () => <Switch>
  <Route exact path='/' component={AsyncHome} />
  <Route exact path='/signup' component={AsyncSignup} />
  <Route exact path='/login' component={AsyncLogin} />
  <Route exact path='/confirmation/:token' component={AsyncConfirm} />
  <Route exact path='/forget_password' component={AsyncForgetPassword} />
  <Route exact path='/reset_password/:token' component={AsyncResetPassword} />
</Switch>

export default Layout