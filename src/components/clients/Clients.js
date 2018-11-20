import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Clients extends Component {
  render() {
    const clients=[{
      id:'32',
      firstName:'rikesh',
      lastName:'lakhe',
      email:'lakhe@gmail.com',
      phone:'333333',
      balance:'2000'
    },
    {
      id:'32',
      firstName:'rikesh',
      lastName:'lakhe',
      email:'lakhe@gmail.com',
      phone:'333333',
      balance:'2000'
    },
    {
      id:'32',
      firstName:'rikesh',
      lastName:'lakhe',
      email:'lakhe@gmail.com',
      phone:'333333',
      balance:'2000'
    },
    {
      id:'32',
      firstName:'rikesh',
      lastName:'lakhe',
      email:'lakhe@gmail.com',
      phone:'333333',
      balance:'2000'
    },
    {
      id:'32',
      firstName:'rikesh',
      lastName:'lakhe',
      email:'lakhe@gmail.com',
      phone:'333333',
      balance:'2000'
    },
    {
      id:'32',
      firstName:'rikesh',
      lastName:'lakhe',
      email:'lakhe@gmail.com',
      phone:'333333',
      balance:'2000'
    },
    {
      id:'32',
      firstName:'rikesh',
      lastName:'lakhe',
      email:'lakhe@gmail.com',
      phone:'333333',
      balance:'2000'
    }]
    if(clients){
      return(
        <div>
          <div className="row">
          <div className="col-md-6">
            <h2>{' '} <i className="fas fa-users"></i> Clients</h2>
          </div>
          <div className="col-md-6"></div></div>
          <table className="table table-striped">
          <thead className="thead-inverse">
            <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>

            <th>Balance</th>
            </tr>
          </thead>
          <tbody>
          {clients.map(client=>(
            <tr key={client.id}>
              <td>{client.firstName} {client.lastName}</td>
              <td>{client.email}</td>
              <td>{client.phone}</td>
              <td>{client.balance}</td>
              <td><Link to={`/client/${client.id}`} className="btn btn-secondary btn-sm"><i className="fas fa-arrow-circle-right" /> Details</Link></td>
            </tr>
          ))}
          </tbody>
          </table>
        </div>

      )
    }else{
      return (
        <div>
            Loading ....
        </div>
      )
    }
    
  }
}

export default Clients;