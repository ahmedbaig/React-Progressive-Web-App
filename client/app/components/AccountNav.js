import React, { Component, Fragment } from 'react';
import {MyContext} from '../provider/provider'
import { Link } from 'react-router-dom';


class AccountNav extends Component {
  constructor(props){
    super(props);
    this.state = {
      hamburgerOpen: true,
      hamburgerOpenMobile: false
    }
  }
  handleLogout(){
    this.props.logout()
  }
  changeHamburger(){
    const {hamburgerOpen} = this.state
    this.setState({
      hamburgerOpen: !hamburgerOpen
    }, function(){
      let icon = document.getElementById('hamburgerIcon')
      let body = document.getElementById('body')
      if(!this.state.hamburgerOpen){
        icon.className = 'hamburger hamburger--arrowalt-r navbar-toggler sidebar-toggler d-md-down-none mr-auto is-active'
        body.className = 'app sidebar-fixed aside-menu-off-canvas aside-menu-hidden header-fixed pace-done sidebar-hidden'
      }else {
        icon.className = 'hamburger hamburger--arrowalt-r navbar-toggler sidebar-toggler d-md-down-none mr-auto'
        body.className = 'app sidebar-fixed aside-menu-off-canvas aside-menu-hidden header-fixed pace-done'
      }
    })

  }
  changeHamburgerMobile(){
    console.log('here')
    const {hamburgerOpenMobile} = this.state
    this.setState({
      hamburgerOpenMobile: !hamburgerOpenMobile
    }, function(){
      let icon = document.getElementById('hamburgerIconMobile')
      let body = document.getElementById('body')
      if(this.state.hamburgerOpenMobile){
        icon.className = 'hamburger hamburger--arrowalt-r navbar-toggler mobile-sidebar-toggler d-lg-none mr-auto is-active'
        body.className = 'app sidebar-fixed aside-menu-off-canvas aside-menu-hidden header-fixed pace-done sidebar-hidden sidebar-mobile-show'
      }else {
        icon.className = 'hamburger hamburger--arrowalt-r navbar-toggler mobile-sidebar-toggler d-lg-none mr-auto'
        body.className = 'app sidebar-fixed aside-menu-off-canvas aside-menu-hidden header-fixed pace-done'
      }
    })

  }
  render(){
    return (
      <header className="app-header navbar">
          <div id = 'hamburgerIconMobile'  onClick={this.changeHamburgerMobile.bind(this)} className="hamburger hamburger--arrowalt-r navbar-toggler mobile-sidebar-toggler d-lg-none mr-auto">
              <div className="hamburger-box">
                  <div className="hamburger-inner"></div>
              </div>
          </div>
          <Link to='/'>
            <div className="navbar-brand shouldBeHigher">
              <img src='./assets/img/logo/logocolor.png'/>
            </div>
          </Link>

          <div id = 'hamburgerIcon' onClick={this.changeHamburger.bind(this)} className="hamburger hamburger--arrowalt-r navbar-toggler sidebar-toggler d-md-down-none mr-auto">
              <div className="hamburger-box">
                  <div className="hamburger-inner"></div>
              </div>
          </div>

          <ul className="nav navbar-nav ">
              <li className="nav-item ">
                  <a className="nav-link" href="#" data-toggle="dropdown">
                      <i className="mdi mdi-bell-ring"></i>
                      <span className="notification hertbit"></span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right notification-list animated flipInY nicescroll-box">

                      <div className="dropdown-header">
                          <strong>Notification</strong>
                          <span className="badge badge-pill badge-theme pull-right"> new 5</span>
                      </div>

                      <div className="wrap">

                          <a href="#" className="dropdown-item">
                              <div className="message-box">
                                  <div className="u-img">
                                      <img src="../../img/products/product-1.jpg" alt="user" />
                                  </div>
                                  <div className="u-text">
                                      <div className="u-name">
                                          <strong>A New Order has Been Placed </strong>
                                      </div>
                                      <small>2 minuts ago</small>
                                  </div>
                              </div>
                          </a>

                          <a href="#" className="dropdown-item">
                              <div className="message-box">
                                  <div className="u-img">
                                      <img src="../../img/products/product-2.jpg" alt="user" />
                                  </div>
                                  <div className="u-text">
                                      <div className="u-name">
                                          <strong>Order Updated</strong>
                                      </div>
                                      <small>10 minuts ago</small>
                                  </div>
                              </div>
                          </a>

                          <a href="#" className="dropdown-item">
                              <div className="message-box">
                                  <div className="u-img">
                                      <img src="../../img/products/product-3.jpg" alt="user" />
                                  </div>
                                  <div className="u-text">
                                      <div className="u-name">
                                          <strong>A New Order has Been Placed </strong>
                                      </div>
                                      <small>30 minuts ago</small>
                                  </div>
                              </div>
                          </a>

                          <a href="#" className="dropdown-item">
                              <div className="message-box">
                                  <div className="u-img">
                                      <img src="../../img/products/product-4.jpg" alt="user" />
                                  </div>
                                  <div className="u-text">
                                      <div className="u-name">
                                          <strong> Order has Been Rated </strong>
                                      </div>
                                      <small>32 minuts ago</small>
                                  </div>
                              </div>
                          </a>
                      </div>

                      <div className="dropdown-footer ">
                          <a href="">
                              <strong>See all messages (150) </strong>
                          </a>
                      </div>
                  </div>

              </li>

              <li className="nav-item ">
                  <a className="nav-link" href="#" data-toggle="dropdown">
                      <i className="mdi mdi-forum"></i>
                      <span className="notification hertbit"></span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right message-list animated flipInY nicescroll-box">

                      <div className="dropdown-header">
                          <strong>Messages</strong>
                          <span className="badge badge-pill badge-theme pull-right"> new 15</span>
                      </div>
                      <div className="wrap">

                          <a href="#" className="dropdown-item">
                              <div className="message-box">
                                  <div className="u-img">
                                      <img src="../../img/users/207.jpg" alt="user" />
                                      <span className="notification online"></span>
                                  </div>
                                  <div className="u-text">
                                      <div className="u-name">
                                          <strong>Natalie Wall</strong>
                                      </div>
                                      <p className="text-muted">Anyways i would like just do it</p>
                                      <small>2 minuts ago</small>
                                  </div>
                              </div>
                          </a>

                          <a href="#" className="dropdown-item">
                              <div className="message-box">
                                  <div className="u-img">
                                      <img src="../../img/users/205.jpg" alt="user" />
                                      <span className="notification offline"></span>
                                  </div>
                                  <div className="u-text">
                                      <div className="u-name">
                                          <strong>Steve johns</strong>
                                      </div>
                                      <p className="text-muted">There is Problem inside the Application</p>
                                      <small>10 minuts ago</small>
                                  </div>
                              </div>
                          </a>

                          <a href="#" className="dropdown-item">
                              <div className="message-box">
                                  <div className="u-img">
                                      <img src="../../img/users/216.jpg" alt="user" />
                                      <span className="notification buzy"></span>
                                  </div>
                                  <div className="u-text">
                                      <div className="u-name">
                                          <strong>Taniya Jan</strong>
                                      </div>
                                      <p className="text-muted">Please Checkout The Attachment</p>
                                      <small>30 minuts ago</small>
                                  </div>
                              </div>
                          </a>

                          <a href="#" className="dropdown-item">
                              <div className="message-box">
                                  <div className="u-img">
                                      <img src="../../img/users/218.jpg" alt="user" />
                                      <span className="notification away"></span>
                                  </div>
                                  <div className="u-text">
                                      <div className="u-name">
                                          <strong>Tim Johns</strong>
                                      </div>
                                      <p className="text-muted">Anyways i would like just do it</p>
                                      <small>32 minuts ago</small>
                                  </div>
                              </div>
                          </a>
                      </div>
                      <div className="dropdown-footer ">
                          <a href="">
                              <strong>See all messages (150) </strong>
                          </a>
                      </div>
                  </div>
              </li>



              <li className="nav-item dropdown">
                  <a className="btn btn-round btn-theme btn-sm" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">

                      <span className="">natalie
                          <i className="fa fa-arrow-down"></i>
                      </span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right user-menu animated flipInY ">
                      <div className="wrap">
                          <div className="dw-user-box">
                              <div className="u-img">
                                  <img src="../../img/users/207.jpg" alt="user" />
                              </div>
                              <div className="u-text">
                                  <h5>Natalie Wall</h5>
                                  <p className="text-muted">wall@gmail.com</p>
                                  <a href="#" className="btn btn-round btn-theme btn-sm">View Profile</a>
                              </div>
                          </div>

                          <a className="dropdown-item" href="#">
                              <i className="fa fa-user"></i> Profile</a>
                          <a className="dropdown-item" href="#">
                              <i className="fa fa-wrench"></i> Settings</a>

                          <div className="divider"></div>

                          <a className="dropdown-item" href="javascript:void(0)" onClick={this.handleLogout.bind(this)}>
                              <i className="fa fa-lock"></i> Logout</a>
                      </div>
                  </div>
              </li>
          </ul>
      </header>
    );
  }
}

export default AccountNav;
