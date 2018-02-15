import React from 'react';

export default function TextInput(props) {
  return (
    <div className="form-group">
      <label>{props.title}</label>
      <input required onChange={(event) => props.inputChange({ [props.title]: event.target.value })} type="text" value={props.value} className="form-control" />
    </div>
  )
}