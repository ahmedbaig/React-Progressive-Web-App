import React, { Component,Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  withRouter
} from 'react-router-dom'
import { setInStorage, getFromStorage, removeInStorage } from '../utils/storage'
import SignIn from './signin'
import SignUp from './signup'
import {MyContext} from '../provider/provider'

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
      },
      signInError: '',
      signUpError: '',
      token_: '',
      authenticate: false,
      logoutClick: false,
      signUpClick: false,
      signInClick: true
    }
  }
  componentDidMount(){
    const token = getFromStorage('turkAuth:token');
    let b = document.getElementById('body');
    b.className = 'pace-done'
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
            token_: token,
            authenticate: true
          });
        }
      });
    }
  }
  handleSignIn(data){
    const {email, password} = data
    this.setState({
      user:{
        email: email,
        password: password
      }
    });
    // POST REQUEST
    fetch('http://localhost:3017/api/account/signin',
      {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Access-Control-Request-Origin': '*',
          'Access-Control-Allow-Origin': '*',
          "Access-Control-Allow-Headers": "access-control-allow-headers,access-control-allow-origin,content-type",
          'Content-Type': 'application/json'
        },
        body : JSON.stringify({
          email: email,
          password: password
        }),
      }).then(res => res.json())
      .then(json => {
        if(json.success){
          setInStorage('turkAuth:token', json.token);
          this.setState({
            signInError: json.message,
            token_: json.token,
            authenticate: true
          });
        }else{
          this.setState({
            signInError: json.message,
            authenticate: false
          });
        }
      });
  }
  handleSignUp(data){
    const {email, password, firstName, lastName} = data;
    this.setState ({
      user: {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
      }
    })
    // POST REQUEST
    fetch('http://localhost:3017/api/account/signup',
      {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Access-Control-Request-Origin': '*',
          'Access-Control-Allow-Origin': '*',
          "Access-Control-Allow-Headers": "access-control-allow-headers,access-control-allow-origin,content-type",
          'Content-Type': 'application/json'
        },
        body : JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password
        }),
      }).then(res => res.json())
      .then(json => {
        if(json.success){
          this.setState({
            signUpError: json.message,
          });
        }else{
          this.setState({
            signUpError: json.message
          });
        }
      });
  }
  handleLogout(){
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
              user: {
              email: '',
              password: '',
              firstName: '',
              lastName: ''
            },
            signInError: '',
            signUpError: '',
            token_: '',
            logoutClick: true,
            authenticate: false
            });
            removeInStorage('turkAuth:token');
          }
        });
    }
  }

  handleSignUpClick(){
    this.setState({
      signUpClick: true,
      signInClick: false
    })
  }
  handleSignInClick(){
    this.setState({
      signInClick: true,
      signUpClick: false
    })
  }
  render() {
    return (
      <MyContext.Consumer>
        {(context) => {
          const {token_,authenticate, signInClick, signUpClick, signUpError, signInError} = this.state
          if(!context.state.auth && authenticate){
            context.setToken(token_);
            this.setState({
              authenticate: false
            })
            console.log('Redirecting...')
            return (
              <Redirect to={{
                  pathname: '/Account'
                }}/>
            )
          }else if(signInClick){
            return (
              <SignIn
                signinerr = {signInError}
                data={this.handleSignIn.bind(this)}
                signupClick = {this.handleSignUpClick.bind(this)}/>
            )
          }else if(signUpClick){
            return (
              <SignUp
                signuperr = {signUpError}
                data={this.handleSignUp.bind(this)}
                signinClick = {this.handleSignInClick.bind(this)}/>
            )
          }
        }}
      </MyContext.Consumer>
    )
  }
}

export default Login;
