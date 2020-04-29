import React from 'react'

import './Color.scss'

export function Color(props) {
  const { valueKey, id, name, value, label, onChange, style } = props

  function handleValueChange(e) {
    const newValue = e.target.value;

    onChange(id ? id : valueKey, newValue)
  }

  return (
    <div className="input-container" style={style}>
      <input 
        type="color"
        id={id ? id : valueKey}
        name={name ? name : valueKey}
        value={value}
        onChange={handleValueChange} 
       />
       <label className="ml-2" htmlFor={name ? name : valueKey}>{label}</label>
    </div>
  );
}

export default Color;


