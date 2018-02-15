import React from 'react';
import Table from '../table';
import Form from '../form';
import './style.scss';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      users: [],
      search: '',
      form: this.clearForm()
    }
  }

  inputChange = (input) => {
    const form = { ...this.state.form, ...input };
    this.setState({ form });
  }

  clearForm() {
    return {
      Name: '',
      Lastname: '',
      DNI: ''
    }
  }

  saveUser = (event) => {
    event.preventDefault();
    const form = { ...this.state.form, id: Date.now() }
    const users = [...this.state.users, form]
    this.setState({
      users,
      form: this.clearForm()
    })
  }

  updateUser = (user) => {
    const users = this.state.users.map(currentUser => {
      if (currentUser.id == user.id) {
        return user;
      }
      return currentUser;
    });

    this.setState({users})
  }

  deleteUser = (id) => {
    const users = this.state.users.filter(user => user.id != id);
    this.setState({ users });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="alert alert-success" id="notice">Welcome React II - 2018/02/09 </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Form saveUser={this.saveUser} inputChange={this.inputChange} {...this.state.form} />
          </div>
          <div className="col">
            <h1 className="text-center">Listing Users</h1>
            <div className="row">
              <div className="col-8 offset-4 text-right">
                <div className="input-group mb-4">
                  <input type="text" id="search" placeholder="Enter Name" className="form-control" />
                  <div className="input-group-append">
                    <button className="btn btn-default">Search</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Table updateUser={this.updateUser} delete={this.deleteUser} users={this.state.users} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}