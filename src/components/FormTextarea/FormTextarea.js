import React from 'react';

const FormTextarea = (props) => {
  return (
    <div>
        <label>{props.label} *</label>
        <textarea name={props.name} placeholder={props.placeholder} value={props.value} onChange={props.onChange} pattern={props.pattern}></textarea>
        <span>* {props.errorMessage}</span>
    </div>
  )
}

export default FormTextarea;