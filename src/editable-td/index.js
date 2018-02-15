import React from 'react';

export default class EditableInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      value: props.user[props.attribute]
    }
  }

  toggleEdit = () => {
    const editing = !this.state.editing;
    this.setState({ editing })
  }

  changeInput = (event) => {
    this.setState({
      value: event.target.value
    });
  }

  update = () => {
    const attribute = this.props.attribute;
    this.toggleEdit();
    this.props.updateUser({ ...this.props.user, [attribute]: this.state.value });
  }


  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.update();
    }
  }

  render() {
    const content = this.state.editing ? (
      <td>
        <input
          value={this.state.value}
          onBlur={this.update}
          onChange={this.changeInput}
          type="text"
          onKeyPress={this.handleKeyPress}
        />
      </td>
    ) : (
        <td onClick={this.toggleEdit}>
          {this.state.value}
        </td>
      );
    return content;
  }
} 