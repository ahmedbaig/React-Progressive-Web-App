import React, { Component, Fragment } from 'react';


class SignUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        let email = this.refs.email.value;
        let password = this.refs.password.value;
        let firstName = this.refs.fname.value;
        let lastName = this.refs.lname.value;

        if(email != '' && password != '' && firstName != '' && lastName != '' ){
            this.setState({
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName
            }, function(){
                this.props.data(this.state)
            });
            this.refs.email.value = '';
            this.refs.password.value = '';
            this.refs.fname.value = '';
            this.refs.lname.value = '';
        }
    }
    handleSignInClick(){
      this.props.signinClick();
    }
    render(){
        return (
          <Fragment>
            <section className="container-pages">
              <div className="brand-logo float-left">
                <img className="" src="assets/img/logo/logowhite.png"/>
              </div>
              <div className="pages-tag-line text-white">
                  <div className="h4">Let's Get Started .!</div>
                  <small> powered by <a id='white' href='https://fusiondigi.com'>Fusion</a></small>
              </div>
              <div className="card pages-card col-lg-4 col-md-6 col-sm-6">
                  <div className="card-body ">
                      <div className="h4 text-center text-theme"><strong>Sign Up</strong></div>
                      <div className="small text-center text-dark">{this.props.signuperr}</div>
                          <form onSubmit={this.handleClick.bind(this)} >
                          <div className="form-group">
                              <div className="input-group">
                                  <span className="input-group-addon text-theme"><i className="fa fa-user"></i></span>
                                  <input type="text" id="fname" ref="fname" className="form-control" placeholder="First Name"/>
                              </div>
                          </div>
                          <div className="form-group">
                              <div className="input-group">
                                  <span className="input-group-addon text-theme"><i className="fa fa-user"></i></span>
                                  <input type="text" id="lname" ref="lname" className="form-control" placeholder="Last Name"/>
                              </div>
                          </div>
                              <div className="form-group">
                                  <div className="input-group">
                                       <span className="input-group-addon text-theme"><i className="fa fa-envelope"></i>
                                      </span>
                                      <input type="email" id="username" ref="email" className="form-control" placeholder="Email"/>
                                  </div>
                              </div>
                              <div className="form-group">
                                  <div className="input-group">
                                      <span className="input-group-addon text-theme"><i className="fa fa-asterisk"></i></span>
                                      <input type="password" id="password" ref="password" className="form-control" placeholder="Password"/>
                                  </div>
                              </div>
                              <div className="form-group form-actions">
                                  <button type="submit" className="btn  btn-theme login-btn ">   Sign Up   </button>
                              </div>
                          </form>
                          <div className="text-center">
                              <small>already have an account ? Please
                                  <a href='javascript:void(0)' className="text-theme" onClick={this.handleSignInClick.bind(this)}> Login</a>
                              </small>
                          </div>
                  </div>
              </div>
          </section>
          <div className="half-circle"></div>
          <div className="small-circle"></div>
        </Fragment>
        );
    }
}

export default SignUp;
