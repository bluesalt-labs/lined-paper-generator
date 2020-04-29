import React from 'react'

import './Number.scss'

export function Number(props) {
  const {
    valueKey, id, name, value, label, onChange, style, disabled,
    step, min, max
   } = props


  function handleValueChange(e) {
    const newValue = e.target.value;

    onChange(id ? id : valueKey, newValue)
  }

  const inputStyle = {
    color: (disabled ? 'rgba(0,0,0,0)' : 'initial')
  }

  return (
    <div className="input-container" style={style}>
      <input 
        type="number"
        id={id ? id : valueKey}
        name={name ? name : valueKey}
        value={value}
        onChange={handleValueChange}
        step={step}
        min={min}
        max={max}
        disabled={disabled}
        style={inputStyle}
       />
       <label className="ml-2" htmlFor={name}>{label}</label>
    </div>
  );
}

export default Number;


