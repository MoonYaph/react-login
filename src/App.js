import React from 'react';
import {HashRouter, Route, BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import Layout from './components/layout';
import store from './store';
import {userLogin} from './actions/user';

const Router = '__DEV__'
  ? BrowserRouter
  : HashRouter;
if(localStorage.elmJWT) {
  const user = {token: localStorage.elmJWT}
  store.dispatch(userLogin(user))
}
function App() {
  return (<Provider store={store}>
    <Router>
      <Route component={Layout}/>
    </Router>
  </Provider>);
}

export default App;
