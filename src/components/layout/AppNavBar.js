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
                <a href="#!" className= "nav-link" onClick={this.onLogoutClick}>
                LogOut
                </a>
                </li>
              </ul> ): null}
          </div>
        </div>
      </nav>
    )
  }
}

AppNavBar.propTypes = {
  firebase:PropTypes.object.isRequired,
  auth:PropTypes.object.isRequired
}

export default compose(firebaseConnect(),connect((state,props)=>({
  auth:state.firebase.auth
})))(AppNavBar);