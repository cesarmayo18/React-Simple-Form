import React from 'react';
import EditableTd from '../editable-td';

export default class Table extends React.Component {

  render() {
    const { updateUser } = this.props;
    const users = this.props.users.map((user) => (
      <tr key={user.id}>
        <EditableTd updateUser={updateUser} user={user} attribute='Name'/>
        <EditableTd updateUser={updateUser} user={user} attribute='Lastname'/>
        <EditableTd updateUser={updateUser} user={user} attribute='DNI' />
        <td>
          <button className="btn btn-danger" onClick={() => { this.props.delete(user.id) }}> Delete</button>
        </td>
      </tr>
    ));

    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Lastname</th>
            <th>DNI</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users}
        </tbody>
      </table>
    )
  }
}