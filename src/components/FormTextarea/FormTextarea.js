import React, { useState } from 'react';

const FormTextarea = (props) => {

  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
      setFocused(true);
  }

  return (
    <div className={props.className}>
        <label>{props.label} *</label>
        <textarea name={props.name} placeholder={props.placeholder} value={props.value} onChange={props.onChange} pattern={props.pattern} onBlur={handleFocus} focused={focused.toString()} required form={props.form} ref={props.reference}></textarea>
        <span>* {props.errorMessage}</span>
    </div>
  )
}

export default FormTextarea;