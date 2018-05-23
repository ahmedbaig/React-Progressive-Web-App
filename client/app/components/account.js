import React, { Component, Fragment } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  withRouter
} from 'react-router-dom'

import { setInStorage, getFromStorage, removeInStorage } from '../utils/storage'

import {MyContext} from '../provider/provider'

import AccountNav from './AccountNav'
import Header from './Header'
import Notifications from './Container/Dashboard/Notifications'
import Sales from './Container/Dashboard/Sales'
import Orders from './Container/Dashboard/Orders'

class Account extends Component {
  constructor(props){
    super(props);
    this.state = {
      token: '',
      logggedOut: false
    }
  }
  componentDidMount(){
    const token = getFromStorage('turkAuth:token');
    // let b = document.getElementById('body');
    // b.className = 'pace-done'
    if(token){
      // verify token
      fetch('http://localhost:3017/api/account/verify?token='+token,{
        method: 'GET',
        mode: 'cors',
        headers: {
          'Access-Control-Request-Origin': '*',
          'Access-Control-Allow-Origin': '*',
          "Access-Control-Allow-Headers": "access-control-allow-headers,access-control-allow-origin,content-type",
          'Content-Type': 'application/json'
        },
      })
      .then(res => res.json())
      .then(json => {
        if(json.success){
          this.setState({
            token: token,
            logggedOut: false
          });

          let B = document.getElementById('body');
          B.className = 'app sidebar-fixed aside-menu-off-canvas aside-menu-hidden header-fixed pace-done';
        }else {
          //this means you're being hacked
          return(
            <Redirect to={{
                pathname: '/Account'
              }}/>
          )
        }
      });
    }
  }
  logout(){
    const token = getFromStorage('turkAuth:token');
    if(token){
      // verify token
      fetch('http://localhost:3017/api/account/logout?token='+token,{
        method: 'GET',
        mode: 'cors',
        headers: {
          'Access-Control-Request-Origin': '*',
          'Access-Control-Allow-Origin': '*',
          "Access-Control-Allow-Headers": "access-control-allow-headers,access-control-allow-origin,content-type",
          'Content-Type': 'application/json'
        },
      })
        .then(res => res.json())
        .then(json => {
          if(json.success){
            this.setState({
              logggedOut: true
            })
            removeInStorage('turkAuth:token');
          }
        });
    }
  }
  render(){
    return(
      <MyContext.Consumer>
        {(context) => {
          const {logggedOut} = this.state
          const {auth, token} = context.state
          if(logggedOut){
            context.removeToken();
            <Redirect to={{
                pathname: '/Account'
              }}/>
          }else if(auth){
            return (
              <Router>
                <Fragment>
                  <AccountNav
                    logout = {this.logout.bind(this)}/>
                  <Header />
                  <Route path='/Account/sales' component={Sales} />
                  <Route path='/Account/orders' component={Orders} />
                  <Route path='/Account/notifications' component={Notifications} />
                </Fragment>
              </Router>
            )
          }else if(error === 'Unauthorized access!'){
            removeInStorage('turkAuth:token');
            context.changeLoading();
            context.removeToken();
            alert(error)
          }
        }}
      </MyContext.Consumer>
    )
  }
}

export default Account;
