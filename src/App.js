import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import store from './stroe';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Header from './components/Header';

import CheckOut from './components/CheckOut';

import Order from './components/Order';
import Profile from './components/Profile';



const App = ()  => (

  <Provider store={store}>
    <Router>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login}/>
        <Route exact path='/signup' component={Signup}/>
       
        <Route exact path='/checkout' component={CheckOut}/>
      
        <Route exact path='/order' component={Order}/>
        <Route exact path='/user/profile' component={Profile}/>
      </Switch>
    </Router>
  </Provider>

)

export default App;