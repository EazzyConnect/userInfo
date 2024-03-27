import React from 'react';
import inputCSS from "./css-files/Input.module.css"

const Input = ({ type, name, id, placeholder, value, onchange }) => {

 return (
  <>

   <div id={inputCSS.inputContainer}>
    <label className={inputCSS.label} htmlFor={id}>{id}: </label>
    <input className={inputCSS.input} type={type} name={name} id={id} placeholder={placeholder} value={value} onChange={onchange} />
   </div>

  </>
 )
};

export default Input;