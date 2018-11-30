import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firebaseConnect } from 'react-redux-firebase';

class AppNavBar extends Component {

  state = {
    isAuth:false
  }

  static getDerivedStateFromProps(props,state){
    const { auth } = props;
    if(auth.uid){
      return { isAuth : true }

    }else{
      return{ isAuth:false }
    }
  }

  onLogoutClick=(e)=>{
    e.preventDefault();
    const { firebase } = this.props;

    firebase.logout();

  }
  render() {
    const { isAuth } = this.state;
    const { auth } = this.props;
    const { allowRegistration } = this.props.settings;

    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-primary mb-4">
        <div className="container">
          <Link to="/" className = "navbar-brand">
            ClientPanel
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-type="#navbarMain">
          <span className="navbar-toggle-icon"></span>
          
          </button>
          <div className="collapse navbar-collapse" id="navbarMain">
            <ul className="navbar-nav mr-auto">
            {isAuth? ( <li className="nav-item">
            <Link to="/" className="nav-link">
            Dashboard
            </Link>
            
          </li>) : null}
           
            
            </ul>
            {isAuth? ( 
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                <a href="#!" className= "nav-link">
                {auth.email}
                </a>
                </li>
                <li className="nav-item">
                <Link to="/settings" className="nav-link">
                <i className="fas fa-cog"></i>
                Settings
                </Link>
                </li>
                <li className="nav-item">
                <a href="#!" className= "nav-link" onClick={this.onLogoutClick}>
                <i className="fas fa-sign-out-alt"></i>
                LogOut
                </a>
                </li>
              </ul> ): null}
              {
                allowRegistration && !isAuth?
                (<ul className="navbar-nav ml-auto">
                <li className="nav-item">
                <Link to="/login" className="nav-link">
                <i class="fas fa-sign-in-alt"></i>{' '} Login
                </Link>
                </li>
                <li className="nav-item">
                <Link to="/register" className="nav-link">
                <i class="fas fa-plus-circle btn-primary"></i>{' '} Register
                </Link>
                </li></ul>):null
              }
          </div>
        </div>
      </nav>
    )
  }
}

AppNavBar.propTypes = {
  firebase:PropTypes.object.isRequired,
  auth:PropTypes.object.isRequired,
  settings:PropTypes.object.isRequired
}

export default compose(firebaseConnect(),connect((state,props)=>({
  auth:state.firebase.auth,
  settings:state.settings
})))(AppNavBar);