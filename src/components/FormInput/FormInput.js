import React, { useState } from 'react';

const FormInput = (props) => {

    const [focused, setFocused] = useState(false);

    const handleFocus = (e) => {
        setFocused(true);
    }

  return (
    <div>
        <label>{props.label}*</label>
        <input placeholder={props.placeholder} name={props.name} onChange={props.onChange} value={props.value} type={props.type} required pattern={props.pattern} onBlur={handleFocus} focused={focused.toString()}/>
        <span>*{props.errorMessage}</span>
    </div>
  )
}

export default FormInput;