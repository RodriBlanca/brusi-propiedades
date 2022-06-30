import React, { useState, useEffect } from 'react';

const FormInput = (props) => {

  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if(props.sended) {
      setFocused(false);
    }
  }, [props.sended])
  

  const handleFocus = (e) => {
      setFocused(true);
  }

  return (
    <div>
        <label>{props.label} *</label>
        <input placeholder={props.placeholder} name={props.name} onChange={props.onChange} value={props.value} type={props.type} required pattern={props.pattern} onBlur={handleFocus} focused={focused.toString()} ref={props.reference}/>
        <span>* {props.errorMessage}</span>
    </div>
  )
}

export default FormInput;