import React from 'react'

import './Text.scss'

export function Text(props) {
  const { valueKey, id, name, value, label, onChange, style } = props

  function handleValueChange(e) {
    const newValue = e.target.value;

    onChange(id ? id : valueKey, newValue)
  }

  return (
    <div className="input-container" style={style}>
      <input 
        type="text"
        id={id ? id : valueKey}
        name={name ? name : valueKey}
        value={value}
        onChange={handleValueChange} 
       />
       <label htmlFor={name}>{label}</label>
    </div>
  );
}

export default Text;


