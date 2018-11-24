import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase';
// import classnames from 'classnames'

import Spinner from '../layout/Spinner'

import React, { Component } from 'react'

class EditClient extends Component {
  constructor(props){
    super(props);
    // create reff
    this.firstNameInput = React.createRef();
    this.lastNameInput = React.createRef();

    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();

    this.balanceInput = React.createRef();

  
  }

  onChange=(e)=> {
    this.setState({[e.target.name]:e.target.value});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const clientUpdate = {
      firstName : this.firstNameInput.current.value,
      lastName : this.lastNameInput.current.value,
      email : this.emailInput.current.value,
      phone : this.phoneInput.current.value,
      balance : this.balanceInput.current.value === ''?0:this.balanceInput.current.value
    };

    const { client, firestore , history } = this.props;

    

    // Check For Errors
    // if (firstName === '') {
    //   this.setState({ errors: { firstName: 'Name is required' } });
    //   return;
    // }

    // if (lastName === '') {
    //   this.setState({ errors: { lastName: 'Name is required' } });
    //   return;
    // }

    // if (email === '') {
    //   this.setState({ errors: { email: 'Email is required' } });
    //   return;
    // }

    // if (phone === '') {
    //   this.setState({ errors: { phone: 'Phone is required' } });
    //   return;
    // }

    

    //// UPDATE CONTACT ////
    firestore.update({collection: 'clients',doc:client.id}, clientUpdate).then(()=>{
      history.push('/');
    });

    // Clear State
    // this.setState({
    //   firstName: '',
    //   lastName: '',
    //   email: '',
    //   phone: '',
    //   errors: {}
    // });

  };

  render() {
    const { client } = this.props;
    

    if(client){
      return (
        <div>
        <div className="row">
          <div className="col-md-6">
          <Link to="/" className = "btn btn-link">Back to Dashboard <i className="fas fa-arrow-circle-left"></i></Link>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
          Edit Client
          </div>
          <div className="card-body">
          <form onSubmit = {this.onSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" name="firstName" className="form-control" 
              minLength="2" 
              required  
              ref = {this.firstNameInput}
              defaultValue = {client.firstName} />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" 
              name="lastName" 
               className="form-control" 
              minLength="2" 
              required  
              defaultValue = {client.lastName}
              ref = {this.lastNameInput}
               />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email"  className="form-control" minLength="2"  required 
              defaultValue = {client.email} 
              ref = {this.emailInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="text" name="phone" className="form-control" minLength="2"  required 
              defaultValue = {client.phone}
              ref = {this.phoneInput}

              />
            </div>
            <div className="form-group">
              <label htmlFor="balance">Balance</label>
              <input type="text" name="balance" className="form-control" minLength="2" required  
              ref = {this.balanceInput}
              defaultValue = {client.balance} />
            </div>
            <input type="submit" value="submit" className="btn btn-primary btn-block"/>
          </form>
          </div>
        </div>
      </div>
      )
    }else{
      return (
        <div>
            <Spinner />
        </div>
      )
    }
     
  }
}

EditClient.propTypes = {
  firestore:PropTypes.object.isRequired
}


export default compose(
  firestoreConnect(
    props=>[
      {
        collection : 'clients',
        storeAs:'client',
        doc:props.match.params.id
      }
    ]
  ),
  connect(
    (
      {
        firestore:{ordered}
      },props) =>({
        client:ordered.client && ordered.client[0]
      })
    )
  )(EditClient);